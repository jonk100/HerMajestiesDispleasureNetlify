/**
 * Maps screenplay roles to TTS voice IDs.
 * Safe, serializable, framework-agnostic.
 */

export interface VoiceConfig {
  id: string;
  label: string;
}

export interface VoiceMap {
  narrator: VoiceConfig;
  characters: Record<string, VoiceConfig>;
}

export const voiceMap: VoiceMap = {
  narrator: {
    id: "en-US-narrator-01",
    label: "Narrator"
  },
  characters: {
    JOHN: { id: "en-GB-male-01", label: "John" },
    PAUL: { id: "en-GB-male-02", label: "Paul" },
    GEORGE: { id: "en-GB-male-03", label: "George" },
    RINGO: { id: "en-GB-male-04", label: "Ringo" }
  }
};
