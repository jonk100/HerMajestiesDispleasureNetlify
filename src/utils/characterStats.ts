import { getCollection } from "astro:content";

/**
 * Explicit alias mapping from screenplay cues → character slugs
 */
const CHARACTER_ALIAS_MAP: Record<string, string> = {
  JOHN: "band/john-lennon",
  "JOHN LENNON": "band/john-lennon",

  PAUL: "band/paul-mccartney",
  "PAUL MCCARTNEY": "band/paul-mccartney",

  GEORGE: "band/george-harrison",
  "GEORGE HARRISON": "band/george-harrison",

  RINGO: "band/ringo-starr",
  "RINGO STARR": "band/ringo-starr",

  YOKO: "band/yoko-ono",

  BRIAN: "band/brian-epstein",
  EPSTEIN: "band/brian-epstein",
  "BRIAN EPSTEIN": "band/brian-epstein",

  NIGEL: "supporting/nigel-finch",
  "NIGEL FINCH": "supporting/nigel-finch",

  CLIVE: "supporting/clive-barrow",
  "CLIVE BARROW": "supporting/clive-barrow",

  "SIR DEREK FINCHLEY": "supporting/sir-derrick-finchley",
  "SIR DEREK": "supporting/sir-derrick-finchley",

  PHILIP: "royalty/prince-phillip",
  PHILLIP: "royalty/prince-phillip",
  "PRINCE PHILIP": "royalty/prince-phillip",
  "PRINCE PHILLIP": "royalty/prince-phillip",

  MOUNTBATTEN: "royalty/lord-mountbatten",
  "LORD MOUNTBATTEN": "royalty/lord-mountbatten",

  "QUEEN ELIZABETH": "royalty/queen-elizabeth",
  "QUEEN ELIZABETH II": "royalty/queen-elizabeth",
  "THE QUEEN": "royalty/queen-elizabeth",

  MARGARET: "royalty/princess-margarette",
  MARGARETTE: "royalty/princess-margarette",
  "PRINCESS MARGARET": "royalty/princess-margarette",
  "PRINCESS MARGARETTE": "royalty/princess-margarette",

  "GEORGE MARTIN": "supporting/george-martin",
  "GLYN JOHNS": "supporting/glyn-johns",
  "MAL EVANS": "supporting/mal-evans",
  "BILLY": "supporting/billy-preston",
  "BILLY PRESTON": "supporting/billy-preston",

  "RAVI SHANKAR": "supporting/ravi-shankar",
  LINDA: "supporting/linda-mccartney",
  MAUREEN: "misc/maureen-cleave",
  "MAUREEN CLEAVE": "misc/maureen-cleave",
};

/**
 * Generic / background roles we intentionally do NOT track
 */
const GENERIC_ROLES = new Set<string>([
  "ALL",
  "REPORTERS",
  "EDITOR",
  "ENGINEER",
  "WAITRESS",
  "SECRETARY",
  "AIDE",
  "ANNOUNCER",
  "NEWS REPORTER",
  "RADIO DJ",
  "RADIO NEWSCASTER",
  "BBC NEWSCASTER",
  "BBC ANNOUNCER",
  "TV ANCHOR",
  "PREACHER",
  "CONDUCTOR",
  "OFFICE WORKER",
  "GALLERY OWNER",
  "ROOMMATE",
  "COLLEGE STUDENT",
  "TEENAGER",
  "TEENAGE GIRL",
  "YOUNG WOMAN",
  "JUNIOR REPORTER",
]);

/**
 * Normalize screenplay dialogue cue into canonical character slug
 *
 * Examples:
 * - "JOHN (CONT'D)" → band/john-lennon
 * - "NIGEL (V.O.)" → supporting/nigel-finch
 * - "PRINCE PHILIP (INTO PHONE)" → royalty/prince-philip
 */
function resolveCharacterSlug(cue: string): string | null {
  const cleaned = cue
    // remove all parentheticals: (CONT'D), (V.O.), (ON TV), etc
    .replace(/\(.*?\)/g, "")
    // remove numbered suffixes: TEENAGER #1 → TEENAGER
    .replace(/\s+#\d+/g, "")
    // normalize smart quotes
    .replace(/[’']/g, "'")
    .trim()
    .toUpperCase();

  // ignore background / generic roles entirely
  if (GENERIC_ROLES.has(cleaned)) {
    return null;
  }

  return CHARACTER_ALIAS_MAP[cleaned] ?? null;
}


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
 * Public shape consumed by UI
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