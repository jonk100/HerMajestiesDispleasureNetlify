import { getCollection } from "astro:content";
import { CHARACTER_ALIAS_MAP, GENERIC_ROLES, resolveCharacterSlug } from "./characterMapping.ts";
import type { CharacterLineStats } from "./statsInterfaces.ts";

/**
 * Parse dialogue lines from raw scene body
 *
 * Rule:
 * - Each `d-` line under a `c-CHARACTER` cue counts as 1 line
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
 * Calculate stats for ALL characters across ALL scenes
 */
export async function calculateAllCharacterStats() {
  const scenes = await getCollection("scenes");
  const characters = await getCollection("characters");

  const stats: Record<string, CharacterLineStats> = {};

  /**
   * Initialize all characters up front
   */
  for (const char of characters) {
    stats[char.slug] = {
      characterSlug: char.slug,
      characterName: char.data.name,

      totalLines: 0,
      totalScenes: 0,

      linesByAct: new Map(),
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

    /**
     * ── SCENE PRESENCE (FRONTMATTER ONLY) ──
     */
    const presentCharacters = new Set<string>(
      (scene.data.characters ?? []).map(c =>
        typeof c === "string" ? c : c.id
      )
    );

    for (const slug of presentCharacters) {
      const stat = stats[slug];
      if (!stat) continue;

      stat.totalScenes += 1;
      stat.scenesByAct.set(act, (stat.scenesByAct.get(act) ?? 0) + 1);

      const appearance = {
        slug: sceneSlug,
        title: scene.data.title,
        act,
        sceneNumber: scene.data.scene_number,
        lines: 0,
      };

      stat.sceneAppearances.push(appearance);

      stat.firstAppearance ??= {
        slug: sceneSlug,
        title: scene.data.title,
        act,
        sceneNumber: scene.data.scene_number,
      };

      stat.lastAppearance = {
        slug: sceneSlug,
        title: scene.data.title,
        act,
        sceneNumber: scene.data.scene_number,
      };
    }

    /**
     * ── DIALOGUE (LINES ONLY) ──
     */
    const dialogueCounts = extractCharacterLines(scene.body);

    for (const [cue, lines] of dialogueCounts.entries()) {
      const slug = resolveCharacterSlug(cue);
      if (!slug) {
        // generic or intentionally ignored role
        continue;
      }

      if (!stats[slug]) {
        console.warn(`Unmapped cue "${cue}" in scene ${sceneSlug}`);
        continue;
      }

      const stat = stats[slug];
      stat.totalLines += lines;
      stat.linesByAct.set(act, (stat.linesByAct.get(act) ?? 0) + lines);

      const appearance = stat.sceneAppearances.find(
        s => s.slug === sceneSlug
      );

      if (appearance) {
        appearance.lines += lines;
      }
    }
  }

  return stats;
}

/**
 * Convenience getter for a single character
 */
export async function getCharacterStats(slug: string) {
  const all = await calculateAllCharacterStats();
  return all[slug] ?? null;
}

/**
 * Get character full name from slug
 */
export async function getCharacterFullName(slug: string): Promise<string> {
  const characters = await getCollection("characters");
  const character = characters.find(c => c.slug === slug);
  return character?.data.name || slug;
}

/**
 * Get character name mapping from screenplay cue to full name
 */
export async function getCharacterNameMapping(): Promise<Record<string, string>> {
  const characters = await getCollection("characters");
  const mapping: Record<string, string> = {};
  
  // Create reverse mapping from slug to full name
  for (const character of characters) {
    mapping[character.slug] = character.data.name;
  }
  
  // Add mappings from CHARACTER_ALIAS_MAP to full names
  for (const [cue, slug] of Object.entries(CHARACTER_ALIAS_MAP)) {
    const fullName = mapping[slug];
    if (fullName) {
      mapping[cue] = fullName;
    }
  }
  
  return mapping;
}