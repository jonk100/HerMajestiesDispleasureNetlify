import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export interface CharacterLineStats {
  characterSlug: string;
  characterName: string;
  totalLines: number;
  totalScenes: number;
  linesByAct: Map<number, number>;
  scenesByAct: Map<number, number>;
  sceneAppearances: Array<{
    slug: string;
    title: string;
    act: number;
    sceneNumber: number;
    lines: number;
  }>;
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

export interface AllCharacterStats {
  [characterSlug: string]: CharacterLineStats;
}

function extractCharacterLines(sceneContent: string): Map<string, number> {
  const lines = sceneContent.split(/\r?\n/);
  const characterLineCounts = new Map<string, number>();

  const isSceneDirection = (trimmed: string) =>
    /^(INT\.|EXT\.|FADE IN:|FADE OUT|FADE TO BLACK|CUT TO:|DISSOLVE TO:)/.test(trimmed);

  const isCharacterCue = (trimmed: string) => {
    if (!trimmed) return false;
    if (trimmed.length >= 40) return false;
    if (isSceneDirection(trimmed)) return false;
    // All caps cue, usually single token like JOHN/PAUL, sometimes multi-word like PRINCE PHILIP.
    // Allow spaces, apostrophes, hyphens, and periods.
    return /^[A-Z][A-Z0-9\s'.-]+$/.test(trimmed);
  };

  let currentCharacter: string | null = null;

  for (const rawLine of lines) {
    const trimmed = rawLine.trim();

    // Ignore explicit markers, but don't kill dialogue state on blank lines
    if (trimmed === "SCENE START" || trimmed === "SCENE END") {
      currentCharacter = null;
      continue;
    }

    if (isCharacterCue(trimmed)) {
      const cleaned = trimmed.replace(/\s*\(CONT'D\)\s*/g, "").trim();
      currentCharacter = cleaned || null;
      continue;
    }

    if (!currentCharacter) {
      continue;
    }

    // Blank lines are common between dialogue blocks; don't reset the character.
    if (!trimmed) {
      continue;
    }

    // Parentheticals under the cue are indented but shouldn't count as dialogue lines.
    if (trimmed.startsWith("(") && trimmed.endsWith(")")) {
      continue;
    }

    // Count only indented lines as dialogue (your format uses indentation under cues)
    const isIndentedDialogue = /^\s{2,}\S/.test(rawLine) || /^\t+\S/.test(rawLine);
    if (!isIndentedDialogue) {
      // If we hit a non-indented line (action/description), dialogue block ended.
      currentCharacter = null;
      continue;
    }

    // Also ignore scene direction lines even if indented.
    if (isSceneDirection(trimmed)) {
      continue;
    }

    const currentCount = characterLineCounts.get(currentCharacter) || 0;
    characterLineCounts.set(currentCharacter, currentCount + 1);
  }

  return characterLineCounts;
}

function normalizeCharacterName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

function findCharacterSlugByName(
  characterName: string,
  characters: CollectionEntry<"characters">[]
): string | null {
  const normalized = normalizeCharacterName(characterName);
  const searchLower = characterName.toLowerCase().trim();

  for (const character of characters) {
    const charNameNormalized = normalizeCharacterName(character.data.name);
    const charNameLower = character.data.name.toLowerCase().trim();
    
    if (charNameNormalized === normalized) {
      return character.slug;
    }

    const firstNameMatch = character.data.name.split(" ")[0]?.toLowerCase();
    if (firstNameMatch && firstNameMatch === searchLower) {
      return character.slug;
    }

    const lastNameMatch = character.data.name.split(" ").pop()?.toLowerCase();
    const searchLastName = characterName.split(" ").pop()?.toLowerCase();
    
    if (lastNameMatch && searchLastName && lastNameMatch === searchLastName && characterName.includes(" ")) {
      return character.slug;
    }

    if (charNameLower.includes(searchLower) || searchLower.includes(charNameLower.split(" ")[0] || "")) {
      return character.slug;
    }
  }

  return null;
}

export async function calculateAllCharacterStats(): Promise<AllCharacterStats> {
  const scenes = await getCollection("scenes");
  const characters = await getCollection("characters");

  const sortedScenes = scenes.sort((a, b) => {
    if (a.data.act !== b.data.act) return a.data.act - b.data.act;
    if (a.data.sequence !== b.data.sequence) return a.data.sequence - b.data.sequence;
    return a.data.scene_number - b.data.scene_number;
  });

  const stats: AllCharacterStats = {};

  for (const character of characters) {
    stats[character.slug] = {
      characterSlug: character.slug,
      characterName: character.data.name,
      totalLines: 0,
      totalScenes: 0,
      linesByAct: new Map(),
      scenesByAct: new Map(),
      sceneAppearances: [],
      firstAppearance: null,
      lastAppearance: null,
    };
  }

  for (const scene of sortedScenes) {
    const characterRefs = scene.data.characters || [];
    
    for (const charRef of characterRefs) {
      const characterId = typeof charRef === "string" ? charRef : charRef.id;
      
      if (!stats[characterId]) {
        continue;
      }

      const stat = stats[characterId];
      
      stat.totalScenes += 1;
      
      const actScenes = stat.scenesByAct.get(scene.data.act) || 0;
      stat.scenesByAct.set(scene.data.act, actScenes + 1);

      stat.sceneAppearances.push({
        slug: scene.slug,
        title: scene.data.title,
        act: scene.data.act,
        sceneNumber: scene.data.scene_number,
        lines: 0,
      });

      if (!stat.firstAppearance) {
        stat.firstAppearance = {
          slug: scene.slug,
          title: scene.data.title,
          act: scene.data.act,
          sceneNumber: scene.data.scene_number,
        };
      }

      stat.lastAppearance = {
        slug: scene.slug,
        title: scene.data.title,
        act: scene.data.act,
        sceneNumber: scene.data.scene_number,
      };
    }
  }

  const dialogueNameMap = new Map<string, string>();
  
  for (const character of characters) {
    if (character.data.dialogue_name) {
      const dialogueNames = Array.isArray(character.data.dialogue_name)
        ? character.data.dialogue_name
        : [character.data.dialogue_name];
      
      for (const dialogueName of dialogueNames) {
        dialogueNameMap.set(dialogueName.toUpperCase(), character.slug);
      }
    }
    
    const firstName = character.data.name.split(" ")[0];
    if (firstName) {
      dialogueNameMap.set(firstName.toUpperCase(), character.slug);
    }
  }
  
  for (const scene of sortedScenes) {
    const sceneBody = scene.body;
    const sceneCodeMatch = sceneBody.match(/```text\s*\r?\n([\s\S]*?)\r?\n```\s*/);
    
    if (!sceneCodeMatch) continue;
    
    const sceneContent = sceneCodeMatch[1];
    const lineCounts = extractCharacterLines(sceneContent);
    
    Array.from(lineCounts.entries()).forEach(([characterName, lineCount]) => {
      const characterSlug = dialogueNameMap.get(characterName.toUpperCase()) || 
                           findCharacterSlugByName(characterName, characters);
      
      if (characterSlug && stats[characterSlug]) {
        const stat = stats[characterSlug];
        stat.totalLines += lineCount;
        
        const actLines = stat.linesByAct.get(scene.data.act) || 0;
        stat.linesByAct.set(scene.data.act, actLines + lineCount);
        
        const sceneIndex = stat.sceneAppearances.findIndex(
          s => s.slug === scene.slug
        );
        if (sceneIndex !== -1) {
          stat.sceneAppearances[sceneIndex].lines = lineCount;
        }
      }
    });
  }

  return stats;
}

export async function getCharacterStats(
  characterSlug: string
): Promise<CharacterLineStats | null> {
  const allStats = await calculateAllCharacterStats();
  return allStats[characterSlug] || null;
}
