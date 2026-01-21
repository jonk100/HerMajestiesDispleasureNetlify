/**
 * Maps screenplay roles to TTS voice IDs.
 * Safe, serializable, framework-agnostic.
 */

export interface VoiceConfig {
  id: string;
  label: string;
  fallbacks?: string[];
}

export interface VoiceMap {
  narrator: VoiceConfig;
  characters: Record<string, VoiceConfig>;
}

export const voiceMap: VoiceMap = {
  narrator: {
    id: "Microsoft David - English (United States)",
    label: "Narrator",
    fallbacks: ["Google US English", "Alex", "en-US"]
  },
  characters: {
    JOHN: { 
      id: "Microsoft Mark - English (United States)", 
      label: "John",
      fallbacks: ["Google US English Male", "Daniel", "en-US"]
    },
    PAUL: { 
      id: "Microsoft Guy - English (United Kingdom)", 
      label: "Paul",
      fallbacks: ["Google UK English Male", "Daniel", "en-GB"]
    },
    GEORGE: { 
      id: "Microsoft Hazel - English (United Kingdom)", 
      label: "George",
      fallbacks: ["Google UK English Female", "Karen", "en-GB"]
    },
    RINGO: { 
      id: "Microsoft Zira - English (United States)", 
      label: "Ringo",
      fallbacks: ["Google US English", "Samantha", "en-US"]
    }
  }
};
