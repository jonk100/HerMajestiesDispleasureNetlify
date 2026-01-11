import { getCollection } from "astro:content";

/**
 * Public shape consumed by UI
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

/**
 * Calculate stats for ALL locations across ALL scenes
 */
export async function calculateAllLocationStats() {
  const scenes = await getCollection("scenes");
  const locations = await getCollection("locations");

  const stats: Record<string, LocationSceneStats> = {};

  /**
   * Initialize all locations
   */
  for (const loc of locations) {
    stats[loc.slug] = {
      locationSlug: loc.slug,
      locationName: loc.data.name,

      totalScenes: 0,
      scenesByAct: new Map(),

      sceneAppearances: [],
      firstAppearance: null,
      lastAppearance: null,
    };
  }

  /**
   * Walk scenes in content order
   */
  for (const scene of scenes) {
    const act = scene.data.act ?? 0;
    const sceneSlug = scene.slug;

    if (!scene.data.location) continue;

    /**
     * Normalize single location reference
     */
    const locationSlug =
      typeof scene.data.location === "string"
        ? scene.data.location
        : scene.data.location.id;

    const stat = stats[locationSlug];
    if (!stat) continue;

    stat.totalScenes += 1;
    stat.scenesByAct.set(
      act,
      (stat.scenesByAct.get(act) ?? 0) + 1
    );

    const appearance = {
      slug: sceneSlug,
      title: scene.data.title,
      act,
      sceneNumber: scene.data.scene_number ?? 0,
    };

    stat.sceneAppearances.push(appearance);

    stat.firstAppearance ??= appearance;
    stat.lastAppearance = appearance;
  }

  return stats;
}

/**
 * Convenience getter for a single location
 */
export async function getLocationStats(slug: string) {
  const all = await calculateAllLocationStats();
  return all[slug] ?? null;
}
