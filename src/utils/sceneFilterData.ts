/**
 * Scene Filter Data Utilities
 * 
 * Extracts and processes scene data for filtering
 * Reduces duplication in SceneFilter component
 */

import { getCollection } from "astro:content";

/**
 * Extract unique acts from scenes
 */
export async function getUniqueActs(): Promise<number[]> {
  const scenes = await getCollection("scenes");
  const acts = scenes.map(scene => scene.data.act).filter((act): act is number => Boolean(act));
  return [...new Set(acts)].sort((a, b) => a - b);
}

/**
 * Extract unique sequences from scenes
 */
export async function getUniqueSequences(): Promise<number[]> {
  const scenes = await getCollection("scenes");
  const sequences = scenes.map(scene => scene.data.sequence).filter((seq): seq is number => Boolean(seq));
  return [...new Set(sequences)].sort((a, b) => a - b);
}

/**
 * Extract unique locations from scenes (handles both string and array formats)
 */
export async function getUniqueLocations(): Promise<string[]> {
  const scenes = await getCollection("scenes");
  
  const allLocations = scenes.flatMap(scene => {
    if (Array.isArray(scene.data.location)) {
      return scene.data.location.map(loc => {
        // Handle both string references and objects
        if (typeof loc === 'string') {
          return loc;
        } else if (loc && typeof loc === 'object' && 'id' in loc) {
          return loc.id;
        } else {
          return String(loc);
        }
      });
    }
    const singleLoc = scene.data.location;
    if (singleLoc) {
      if (typeof singleLoc === 'string') {
        return [singleLoc];
      } else if (singleLoc && typeof singleLoc === 'object' && 'id' in singleLoc) {
        return [singleLoc.id];
      } else {
        return [String(singleLoc)];
      }
    }
    return [];
  });
  
  return [...new Set(allLocations)].sort();
}

/**
 * Extract unique characters from scenes (handles array format)
 */
export async function getUniqueCharacters(): Promise<string[]> {
  const scenes = await getCollection("scenes");
  
  const allCharacters = scenes.flatMap(scene => {
    return scene.data.characters ? scene.data.characters.map(char => {
      // Handle both string references and objects
      if (typeof char === 'string') {
        return char;
      } else if (char && typeof char === 'object' && 'id' in char) {
        return char.id;
      } else {
        return String(char);
      }
    }) : [];
  });
  
  return [...new Set(allCharacters)].sort();
}

/**
 * Generate filter options for acts
 */
export function generateActFilters(acts: number[]): Record<string, string> {
  return {
    all: 'All Acts',
    ...Object.fromEntries(acts.map(act => [`act-${act}`, `Act ${act}`]))
  };
}

/**
 * Generate filter options for sequences
 */
export function generateSequenceFilters(sequences: number[]): Record<string, string> {
  return {
    all: 'All Sequences',
    ...Object.fromEntries(sequences.map(seq => [`sequence-${seq}`, `Sequence ${seq}`]))
  };
}

/**
 * Generate filter options for locations
 */
export function generateLocationFilters(locations: string[]): Record<string, string> {
  return {
    all: 'All Locations',
    ...Object.fromEntries(locations.map(loc => [
      loc.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase(),
      loc.replace('locations/', '').replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())
    ]))
  };
}

/**
 * Generate filter options for characters
 */
export function generateCharacterFilters(characters: string[]): Record<string, string> {
  return {
    all: 'All Characters',
    ...Object.fromEntries(characters.map(char => {
      const key = char.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
      const label = char
        .replace(/^(characters\/|royalty\/|band\/|supporting\/)/, '')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (l: string) => l.toUpperCase());
      return [key, label];
    }))
  };
}
