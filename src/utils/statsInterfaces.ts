/**
 * Generic stats interfaces
 * 
 * Provides shared interfaces for character and location statistics
 * to reduce duplication and improve type safety.
 */

/**
 * Base interface for scene appearance data
 */
export interface SceneAppearance {
  slug: string;
  title: string;
  act: number;
  sceneNumber: number;
}

/**
 * Base interface for entity statistics (character or location)
 */
export interface BaseEntityStats {
  entitySlug: string;
  entityName: string;

  totalScenes: number;
  scenesByAct: Map<number, number>;

  sceneAppearances: SceneAppearance[];

  firstAppearance: SceneAppearance | null;
  lastAppearance: SceneAppearance | null;
}

/**
 * Character-specific stats with all required properties
 */
export interface CharacterLineStats {
  characterSlug: string;
  characterName: string;

  totalLines: number;
  totalScenes: number;

  linesByAct: Map<number, number>;
  scenesByAct: Map<number, number>;

  sceneAppearances: {
    slug: string;
    title: string;
    act: number;
    sceneNumber: number;
    lines: number;
  }[];

  firstAppearance: {
    slug: string;
    title: string;
    act: number;
    sceneNumber: number;
  } | null;

  lastAppearance: {
    slug: string;
    title: string;
    act: number;
    sceneNumber: number;
  } | null;
}

/**
 * Location-specific stats with all required properties
 */
export interface LocationSceneStats {
  locationSlug: string;
  locationName: string;

  totalScenes: number;
  scenesByAct: Map<number, number>;

  sceneAppearances: {
    slug: string;
    title: string;
    act: number;
    sceneNumber: number;
  }[];

  firstAppearance: {
    slug: string;
    title: string;
    act: number;
    sceneNumber: number;
  } | null;

  lastAppearance: {
    slug: string;
    title: string;
    act: number;
    sceneNumber: number;
  } | null;
}
