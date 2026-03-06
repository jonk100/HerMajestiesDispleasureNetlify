/**
 * Episode Beat Pressure Utility
 * Provides data processing functions for pressure timeline visualization
 * Can be reused across different chart and heatmap components
 */

import type { CollectionEntry } from 'astro:content';

export interface BeatPressureData {
  beat: CollectionEntry<'beats'>;
  episode: number;
  sequence: number;
  scene_number: number;
  beat_index: number;
  pressure_level: number;
  primary_character: string;
  threads: string[];
  position: number; // Relative position in the entire series
  episodePosition: number; // Relative position within episode
}

export interface EpisodePressureData {
  episode: CollectionEntry<'episodes'>;
  episodeNumber: number;
  beats: BeatPressureData[];
  averagePressure: number;
  maxPressure: number;
  minPressure: number;
  pressureTrend: 'rising' | 'falling' | 'stable';
  threadActivity: Record<string, number>; // Thread -> beat count
}

export interface ThreadPressureData {
  threadId: string;
  threadTitle: string;
  beats: BeatPressureData[];
  episodes: number[];
  pressureProgression: number[];
  averagePressure: number;
  status: 'active' | 'dormant' | 'closed';
}

export interface SeriesPressureData {
  allBeats: BeatPressureData[];
  episodes: EpisodePressureData[];
  threads: ThreadPressureData[];
  overallAveragePressure: number;
  pressureByEpisode: Record<number, number>;
  characterPressure: Record<string, number>;
  timelineRange: {
    start: number;
    end: number;
    totalBeats: number;
  };
}

/**
 * Process all beats and organize them for pressure visualization
 */
export async function processSeriesPressureData(
  beats: CollectionEntry<'beats'>[],
  episodes: CollectionEntry<'episodes'>[],
  threads: CollectionEntry<'threads'>[]
): Promise<SeriesPressureData> {
  // Sort beats by episode, scene, and beat index
  const sortedBeats = [...beats].sort((a, b) => {
    if (a.data.episode !== b.data.episode) return a.data.episode - b.data.episode;
    if (a.data.scene_number !== b.data.scene_number) return a.data.scene_number - b.data.scene_number;
    return a.data.beat_index - b.data.beat_index;
  });

  // Convert beats to pressure data format
  const allBeats: BeatPressureData[] = sortedBeats.map((beat, index) => ({
    beat,
    episode: beat.data.episode,
    sequence: beat.data.sequence,
    scene_number: beat.data.scene_number,
    beat_index: beat.data.beat_index,
    pressure_level: beat.data.pressure_level || 5,
    primary_character: beat.data.primary_character,
    threads: beat.data.thread_effects.map(effect => effect.thread),
    position: index, // Position in entire series
    episodePosition: 0 // Will be calculated per episode
  }));

  // Calculate episode positions
  const beatsByEpisode = groupBeatsByEpisode(allBeats);
  Object.values(beatsByEpisode).forEach(episodeBeats => {
    episodeBeats.forEach((beat, index) => {
      beat.episodePosition = index;
    });
  });

  // Process episodes
  const episodeData = await processEpisodeData(beatsByEpisode, episodes);

  // Process threads
  const threadData = await processThreadData(allBeats, threads);

  // Calculate overall statistics
  const overallAveragePressure = allBeats.reduce((sum, beat) => sum + beat.pressure_level, 0) / allBeats.length;
  
  const pressureByEpisode: Record<number, number> = {};
  episodeData.forEach(ep => {
    pressureByEpisode[ep.episodeNumber] = ep.averagePressure;
  });

  const characterPressure: Record<string, number> = {};
  allBeats.forEach(beat => {
    if (!characterPressure[beat.primary_character]) {
      characterPressure[beat.primary_character] = 0;
    }
    characterPressure[beat.primary_character] += beat.pressure_level;
  });
  
  // Average character pressure
  Object.keys(characterPressure).forEach(character => {
    const characterBeats = allBeats.filter(b => b.primary_character === character);
    characterPressure[character] = characterPressure[character] / characterBeats.length;
  });

  return {
    allBeats,
    episodes: episodeData,
    threads: threadData,
    overallAveragePressure,
    pressureByEpisode,
    characterPressure,
    timelineRange: {
      start: 0,
      end: allBeats.length - 1,
      totalBeats: allBeats.length
    }
  };
}

/**
 * Group beats by episode
 */
export function groupBeatsByEpisode(beats: BeatPressureData[]): Record<number, BeatPressureData[]> {
  return beats.reduce((acc, beat) => {
    if (!acc[beat.episode]) {
      acc[beat.episode] = [];
    }
    acc[beat.episode].push(beat);
    return acc;
  }, {} as Record<number, BeatPressureData[]>);
}

/**
 * Process episode-specific pressure data
 */
async function processEpisodeData(
  beatsByEpisode: Record<number, BeatPressureData[]>,
  episodes: CollectionEntry<'episodes'>[]
): Promise<EpisodePressureData[]> {
  const episodeMap = new Map(episodes.map(ep => [ep.data.episode_number, ep]));
  
  return Object.entries(beatsByEpisode).map(([episodeNum, episodeBeats]) => {
    const pressures = episodeBeats.map(b => b.pressure_level);
    const averagePressure = pressures.reduce((sum, p) => sum + p, 0) / pressures.length;
    const maxPressure = Math.max(...pressures);
    const minPressure = Math.min(...pressures);
    
    // Calculate trend (simple linear regression)
    const trend = calculatePressureTrend(pressures);
    
    // Count thread activity
    const threadActivity: Record<string, number> = {};
    episodeBeats.forEach(beat => {
      beat.threads.forEach(thread => {
        threadActivity[thread] = (threadActivity[thread] || 0) + 1;
      });
    });

    return {
      episode: episodeMap.get(parseInt(episodeNum))!,
      episodeNumber: parseInt(episodeNum),
      beats: episodeBeats,
      averagePressure,
      maxPressure,
      minPressure,
      pressureTrend: trend,
      threadActivity
    };
  }).sort((a, b) => a.episodeNumber - b.episodeNumber);
}

/**
 * Process thread-specific pressure data
 */
async function processThreadData(
  allBeats: BeatPressureData[],
  threads: CollectionEntry<'threads'>[]
): Promise<ThreadPressureData[]> {
  // Debug: Compare thread collection slugs vs beat thread IDs
  console.log('[threadMap keys]', [...threads.map(t => t.slug)]);
  console.log('[beat thread ids]', [...new Set(allBeats.flatMap(b => b.threads))]);
  
  const threadMap = new Map(threads.map(t => [t.slug, t]));
  const threadBeats: Record<string, BeatPressureData[]> = {};
  
  // Group beats by thread
  allBeats.forEach(beat => {
    beat.threads.forEach(threadId => {
      if (!threadBeats[threadId]) {
        threadBeats[threadId] = [];
      }
      threadBeats[threadId].push(beat);
    });
  });

  return Object.entries(threadBeats).map(([threadId, beats]) => {
    const thread = threadMap.get(threadId);
    if (!thread) {
      console.warn(`[episodeBeatPressure] No thread found for id: "${threadId}". Check that thread slugs in beat thread_effects match thread collection slugs exactly.`);
      return null;
    }

    const pressures = beats.map(b => b.pressure_level);
    const averagePressure = pressures.reduce((sum, p) => sum + p, 0) / pressures.length;
    const episodes = [...new Set(beats.map(b => b.episode))];
    
    // Determine status based on thread data
    let status: 'active' | 'dormant' | 'closed' = 'active';
    if (thread.data.status === 'closed') status = 'closed';
    else if (thread.data.status === 'dormant') status = 'dormant';

    return {
      threadId,
      threadTitle: thread.data.title,
      beats,
      episodes,
      pressureProgression: pressures,
      averagePressure,
      status
    };
  }).filter(Boolean) as ThreadPressureData[];
}

/**
 * Calculate pressure trend for a series of pressure values
 */
function calculatePressureTrend(pressures: number[]): 'rising' | 'falling' | 'stable' {
  if (pressures.length < 2) return 'stable';
  
  // Simple linear regression
  const n = pressures.length;
  const x = Array.from({length: n}, (_, i) => i);
  const sumX = x.reduce((sum, val) => sum + val, 0);
  const sumY = pressures.reduce((sum, val) => sum + val, 0);
  const sumXY = x.reduce((sum, val, i) => sum + val * pressures[i], 0);
  const sumX2 = x.reduce((sum, val) => sum + val * val, 0);
  
  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  
  // Determine trend based on slope magnitude
  if (Math.abs(slope) < 0.1) return 'stable';
  return slope > 0 ? 'rising' : 'falling';
}

/**
 * Filter beats by various criteria
 */
export function filterBeats(
  beats: BeatPressureData[],
  filters: {
    episodes?: number[];
    characters?: string[];
    threads?: string[];
    pressureRange?: [number, number];
  }
): BeatPressureData[] {
  return beats.filter(beat => {
    if (filters.episodes && !filters.episodes.includes(beat.episode)) return false;
    if (filters.characters && !filters.characters.includes(beat.primary_character)) return false;
    if (filters.threads && !filters.threads.some(thread => beat.threads.includes(thread))) return false;
    if (filters.pressureRange) {
      const [min, max] = filters.pressureRange;
      if (beat.pressure_level < min || beat.pressure_level > max) return false;
    }
    return true;
  });
}

/**
 * Get pressure statistics for a set of beats
 */
export function getPressureStats(beats: BeatPressureData[]) {
  if (beats.length === 0) {
    return {
      average: 0,
      min: 0,
      max: 0,
      median: 0,
      standardDeviation: 0
    };
  }

  const pressures = beats.map(b => b.pressure_level);
  const sorted = [...pressures].sort((a, b) => a - b);
  
  const average = pressures.reduce((sum, p) => sum + p, 0) / pressures.length;
  const min = Math.min(...pressures);
  const max = Math.max(...pressures);
  const median = sorted.length % 2 === 0 
    ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
    : sorted[Math.floor(sorted.length / 2)];
  
  // Standard deviation
  const variance = pressures.reduce((sum, p) => sum + Math.pow(p - average, 2), 0) / pressures.length;
  const standardDeviation = Math.sqrt(variance);

  return { average, min, max, median, standardDeviation };
}

/**
 * Generate color for pressure level (1-10 scale)
 */
export function getPressureColor(pressure: number): string {
  // Color gradient from green (low) to yellow (medium) to red (high)
  if (pressure <= 3) return '#10b981'; // green
  if (pressure <= 6) return '#f59e0b'; // yellow/orange
  return '#ef4444'; // red
}

/**
 * Generate episode colors for visualization
 */
export function getEpisodeColor(episodeNumber: number): string {
  const colors = [
    '#3b82f6', '#8b5cf6', '#ec4899', '#f43f5e', '#f97316',
    '#eab308', '#84cc16', '#22c55e', '#14b8a6', '#06b6d4'
  ];
  return colors[(episodeNumber - 1) % colors.length];
}
