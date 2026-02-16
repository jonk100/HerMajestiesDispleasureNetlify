// src/utils/getScenesForLocation.ts
import type { CollectionEntry } from "astro:content";
import { normalizeId } from "./idNormalization.ts";

/**
 * Returns all scenes that reference a given location.
 */
export function getScenesForLocation(
  scenes: CollectionEntry<"scenes">[],
  locationId: string
): CollectionEntry<"scenes">[] {
  const normalizedLocationId = locationId.split("/").pop()!;

  return scenes.filter((scene) => {
    const loc = scene.data.location;

    if (Array.isArray(loc)) {
      return loc.some(
        (entry) => normalizeId(entry) === normalizedLocationId
      );
    }

    return normalizeId(loc) === normalizedLocationId;
  });
}
