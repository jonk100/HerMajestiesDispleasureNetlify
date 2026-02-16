/**
 * Character mapping utilities
 * 
 * Provides centralized character alias resolution and name mapping
 * for both stats calculation and voice configuration.
 */

/**
 * Explicit alias mapping from screenplay cues → character slugs
 */
export const CHARACTER_ALIAS_MAP: Record<string, string> = {
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
 * Mapping from screenplay cues to display names
 * Used for voice configuration UI
 */
export const CHARACTER_DISPLAY_NAMES: Record<string, string> = {
  'JOHN': 'John Lennon',
  'JOHN LENNON': 'John Lennon',
  'PAUL': 'Paul McCartney',
  'PAUL MCCARTNEY': 'Paul McCartney',
  'GEORGE': 'George Harrison',
  'GEORGE HARRISON': 'George Harrison',
  'RINGO': 'Ringo Starr',
  'RINGO STARR': 'Ringo Starr',
  'YOKO': 'Yoko Ono',
  'BRIAN': 'Brian Epstein',
  'EPSTEIN': 'Brian Epstein',
  'BRIAN EPSTEIN': 'Brian Epstein',
  'NIGEL': 'Nigel Finch',
  'NIGEL FINCH': 'Nigel Finch',
  'CLIVE': 'Clive Barrow',
  'CLIVE BARROW': 'Clive Barrow',
  'SIR DEREK': 'Sir Derrick Finchley',
  'SIR DEREK FINCHLEY': 'Sir Derrick Finchley',
  'PHILIP': 'Prince Philip',
  'PHILLIP': 'Prince Philip',
  'PRINCE PHILIP': 'Prince Philip',
  'PRINCE PHILLIP': 'Prince Philip',
  'MOUNTBATTEN': 'Lord Mountbatten',
  'LORD MOUNTBATTEN': 'Lord Mountbatten',
  'QUEEN ELIZABETH': 'Queen Elizabeth',
  'QUEEN ELIZABETH II': 'Queen Elizabeth',
  'THE QUEEN': 'Queen Elizabeth',
  'MARGARET': 'Princess Margarette',
  'MARGARETTE': 'Princess Margarette',
  'PRINCESS MARGARET': 'Princess Margarette',
  'PRINCESS MARGARETTE': 'Princess Margarette',
  'GEORGE MARTIN': 'George Martin',
  'GLYN JOHNS': 'Glyn Johns',
  'MAL EVANS': 'Mal Evans',
  'BILLY': 'Billy Preston',
  'BILLY PRESTON': 'Billy Preston',
  'RAVI SHANKAR': 'Ravi Shankar',
  'LINDA': 'Linda McCartney',
  'MAUREEN': 'Maureen Cleave',
  'MAUREEN CLEAVE': 'Maureen Cleave'
};

/**
 * Generic / background roles we intentionally do NOT track
 */
export const GENERIC_ROLES = new Set<string>([
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
export function resolveCharacterSlug(cue: string): string | null {
  const cleaned = cue
    // remove all parentheticals: (CONT'D), (V.O.), (ON TV), etc
    .replace(/\(.*?\)/g, "")
    // remove numbered suffixes: TEENAGER #1 → TEENAGER
    .replace(/\s+#\d+/g, "")
    // normalize smart quotes
    .replace(/[']/g, "'")
    .trim()
    .toUpperCase();

  // ignore background / generic roles entirely
  if (GENERIC_ROLES.has(cleaned)) {
    return null;
  }

  return CHARACTER_ALIAS_MAP[cleaned] ?? null;
}

/**
 * Get display name for a character cue
 */
export function getCharacterDisplayName(cue: string): string {
  const cleaned = cue
    .replace(/\(.*?\)/g, "")
    .replace(/\s+#\d+/g, "")
    .replace(/[']/g, "'")
    .trim()
    .toUpperCase();

  return CHARACTER_DISPLAY_NAMES[cleaned] ?? cue;
}
