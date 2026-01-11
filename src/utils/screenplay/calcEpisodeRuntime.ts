/**
 * Calculates estimated runtime for an episode
 * based on the sum of page counts of its scenes.
 *
 * Rule:
 * - 1 script page ≈ 1 minute of runtime
 *
 * @param scenes - Scene entries resolved from content collections
 * @returns Estimated runtime in minutes
 */
import type { CollectionEntry } from "astro:content";

export function calcEpisodeRuntime(
  scenes: CollectionEntry<"scenes">[]
): number {
  return scenes.reduce((total, scene) => {
    return total + (scene.data.page_count ?? 0);
  }, 0);
}
