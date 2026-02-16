/**
 * ID normalization utilities
 * 
 * Provides shared functions for normalizing Astro content references
 * to their slug form for consistent handling.
 */

/**
 * Normalize an Astro reference to its slug form.
 * Handles:
 * - "locations/twickenham-film-studios"
 * - "twickenham-film-studios"
 * - { id: "locations/twickenham-film-studios" }
 */
export function normalizeId(value: unknown): string {
  if (typeof value === "string") {
    return value.split("/").pop()!;
  }

  if (typeof value === "object" && value !== null && "id" in value) {
    const id = (value as { id: string }).id;
    return id.split("/").pop()!;
  }

  return "";
}
