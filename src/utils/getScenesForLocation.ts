// src/utils/getScenesForLocation.ts
import type { CollectionEntry } from "astro:content";

/**
 * Normalize an Astro reference to its slug form.
 * Handles:
 * - "locations/twickenham-film-studios"
 * - "twickenham-film-studios"
 * - { id: "locations/twickenham-film-studios" }
 */
function normalizeId(value: unknown): string {
  if (typeof value === "string") {
    return value.split("/").pop()!;
  }

  if (typeof value === "object" && value !== null && "id" in value) {
    const id = (value as { id: string }).id;
    return id.split("/").pop()!;
  }

  return "";
}

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
