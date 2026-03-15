/**
 * Generic Stats Calculator
 * 
 * Provides unified statistics calculation for any entity type
 * Eliminates duplication between characterStats.ts and locationStats.ts
 */

import { getCollection } from "astro:content";
import { createSceneToEpisodeMap } from "./episodeMapping.ts";
import type { BaseEntityStats, SceneAppearance } from "./statsInterfaces.ts";

/**
 * Configuration for entity statistics calculation
 */
export interface EntityConfig<T extends BaseEntityStats> {
  entityType: 'character' | 'location';
  collectionName: 'characters' | 'locations';
  extractEntities: (scene: any) => string[];
  createStatsObject: (entity: any) => T;
  updateStats: (stats: T, scene: any, entityData: string) => void;
}

/**
 * Parse dialogue lines from raw scene body
 * Extracts character dialogue for line counting
 */
function extractCharacterLines(sceneBody: string): Map<string, number> {
  const lines = sceneBody.split(/\r?\n/);
  const counts = new Map<string, number>();

  let currentSpeaker: string | null = null;

  for (const raw of lines) {
    const line = raw.trim();

    if (line.startsWith("c-")) {
      currentSpeaker = line.slice(2).trim();
      continue;
    }

    if (line.startsWith("d-") && currentSpeaker) {
      counts.set(
        currentSpeaker,
        (counts.get(currentSpeaker) ?? 0) + 1
      );
      continue;
    }

    // Anything else breaks dialogue context
    if (!line.startsWith("p-")) {
      currentSpeaker = null;
    }
  }

  return counts;
}

/**
 * Generic function to calculate statistics for any entity type
 */
export async function calculateEntityStats<T extends BaseEntityStats>(
  config: EntityConfig<T>
): Promise<Record<string, T>> {
  const scenes = await getCollection("scenes");
  const entities = await getCollection(config.collectionName);

  const stats: Record<string, T> = {};

  /**
   * Initialize all entities
   */
  for (const entity of entities) {
    stats[entity.id] = config.createStatsObject(entity);
  }

  /**
   * Pre-calculate character lines for efficiency (only for characters)
   */
  const characterLinesMap = config.entityType === 'character' 
    ? new Map(scenes.map(scene => [scene.id, extractCharacterLines(scene.body || '')]))
    : null;

  /**
   * Walk scenes in content order
   */
  for (const scene of scenes) {
    const act = scene.data.act ?? 0;
    const sceneId = scene.id;
    const sceneTitle = scene.data.title;
    const sceneNumber = scene.data.scene_number;

    // Extract entities present in this scene
    const entitiesInScene = config.extractEntities(scene);
    
    for (const entitySlug of entitiesInScene) {
      const stat = stats[entitySlug];
      if (!stat) continue;

      // Update the stats with scene information
      config.updateStats(stat, scene, entitySlug);

      // Create scene appearance record
      const appearance: any = {
        slug: sceneId,
        title: sceneTitle,
        act,
        sceneNumber,
      };
      
      if (config.entityType === 'character' && characterLinesMap) {
        appearance.lines = characterLinesMap.get(sceneId)?.get(entitySlug) ?? 0;
      }

      stat.sceneAppearances.push(appearance);

      // Set first/last appearance
      if (!stat.firstAppearance) {
        stat.firstAppearance = appearance;
      }
      stat.lastAppearance = appearance;
    }
  }

  return stats;
}

/**
 * Generic function to calculate statistics with episode breakdown for any entity type
 */
export async function calculateEntityStatsByEpisode<T extends BaseEntityStats>(
  config: EntityConfig<T>
): Promise<Record<string, T & { linesByEpisode?: Map<number, number>; scenesByEpisode?: Map<number, number> }>> {
  const scenes = await getCollection("scenes");
  const episodes = await getCollection("episodes");
  const entities = await getCollection(config.collectionName);
  const sceneToEpisodeMap = await createSceneToEpisodeMap();

  const stats: Record<string, T & { linesByEpisode?: Map<number, number>; scenesByEpisode?: Map<number, number> }> = {};

  /**
   * Initialize all entities
   */
  for (const entity of entities) {
    const baseStats = config.createStatsObject(entity);
    stats[entity.slug] = {
      ...baseStats,
      linesByEpisode: config.entityType === 'character' ? new Map() : undefined,
      scenesByEpisode: new Map(),
    };
  }

  /**
   * Pre-calculate character lines for efficiency (only for characters)
   */
  const characterLinesMap = config.entityType === 'character' 
    ? new Map(scenes.map(scene => [scene.id, extractCharacterLines(scene.body || '')]))
    : null;

  /**
   * Walk scenes in content order
   */
  for (const scene of scenes) {
    const act = scene.data.act ?? 0;
    const sceneId = scene.id;
    const sceneTitle = scene.data.title;
    const sceneNumber = scene.data.scene_number;
    const episodeNumber = sceneToEpisodeMap.get(sceneId);

    // Extract entities present in this scene
    const entitiesInScene = config.extractEntities(scene);
    
    for (const entitySlug of entitiesInScene) {
      const stat = stats[entitySlug];
      if (!stat) continue;

      // Update the stats with scene information
      config.updateStats(stat, scene, entitySlug);

      // Create scene appearance record
      const appearance: any = {
        slug: sceneId,
        title: sceneTitle,
        act,
        sceneNumber,
      };
      
      if (config.entityType === 'character' && characterLinesMap) {
        appearance.lines = characterLinesMap.get(sceneId)?.get(entitySlug) ?? 0;
      }
      
      if (episodeNumber !== undefined) {
        appearance.episodeNumber = episodeNumber;
      }

      stat.sceneAppearances.push(appearance);

      // Set first/last appearance
      if (!stat.firstAppearance) {
        stat.firstAppearance = appearance;
      }
      stat.lastAppearance = appearance;

      // Update episode-specific stats
      if (episodeNumber !== undefined && stat.scenesByEpisode) {
        stat.scenesByEpisode.set(episodeNumber, (stat.scenesByEpisode.get(episodeNumber) ?? 0) + 1);
        
        if (config.entityType === 'character' && stat.linesByEpisode) {
          const lines = characterLinesMap?.get(sceneId)?.get(entitySlug) ?? 0;
          stat.linesByEpisode.set(episodeNumber, (stat.linesByEpisode.get(episodeNumber) ?? 0) + lines);
        }
      }
    }
  }

  return stats;
}

/**
 * Character-specific configuration
 */
export const characterConfig: EntityConfig<any> = {
  entityType: 'character',
  collectionName: 'characters',
  extractEntities: (scene) => {
    const characterLines = extractCharacterLines(scene.body || '');
    return Array.from(characterLines.keys());
  },
  createStatsObject: (character) => ({
    entitySlug: character.slug,
    entityName: character.data.name,
    totalScenes: 0,
    scenesByAct: new Map(),
    sceneAppearances: [],
    firstAppearance: null,
    lastAppearance: null,
    totalLines: 0,
    linesByAct: new Map(),
  }),
  updateStats: (stats, scene, characterSlug) => {
    const act = scene.data.act ?? 0;
    
    // Update scene counts
    stats.totalScenes++;
    stats.scenesByAct.set(act, (stats.scenesByAct.get(act) ?? 0) + 1);
    
    // Update line counts
    const characterLines = extractCharacterLines(scene.body || '');
    const lines = characterLines.get(characterSlug) ?? 0;
    stats.totalLines += lines;
    stats.linesByAct.set(act, (stats.linesByAct.get(act) ?? 0) + lines);
  },
};

/**
 * Location-specific configuration
 */
export const locationConfig: EntityConfig<any> = {
  entityType: 'location',
  collectionName: 'locations',
  extractEntities: (scene) => {
    if (!scene.data.location) return [];
    
    // Handle both single location reference and array of locations
    const locations = Array.isArray(scene.data.location) 
      ? scene.data.location 
      : [scene.data.location];
    
    return locations.map((loc: any) => 
      typeof loc === 'string' ? loc : loc.id
    );
  },
  createStatsObject: (location) => ({
    entitySlug: location.slug,
    entityName: location.data.name,
    totalScenes: 0,
    scenesByAct: new Map(),
    sceneAppearances: [],
    firstAppearance: null,
    lastAppearance: null,
  }),
  updateStats: (stats, scene, locationSlug) => {
    const act = scene.data.act ?? 0;
    
    // Update scene counts
    stats.totalScenes++;
    stats.scenesByAct.set(act, (stats.scenesByAct.get(act) ?? 0) + 1);
  },
};

/**
 * Convenience function to calculate all character stats
 */
export async function calculateAllCharacterStats() {
  return calculateEntityStats(characterConfig);
}

/**
 * Convenience function to calculate all location stats
 */
export async function calculateAllLocationStats() {
  return calculateEntityStats(locationConfig);
}

/**
 * Convenience function to calculate all character stats by episode
 */
export async function calculateAllCharacterStatsByEpisode() {
  return calculateEntityStatsByEpisode(characterConfig);
}

/**
 * Convenience function to calculate all location stats by episode
 */
export async function calculateAllLocationStatsByEpisode() {
  return calculateEntityStatsByEpisode(locationConfig);
}
