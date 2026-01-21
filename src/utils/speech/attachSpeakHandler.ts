/**
 * Attaches click handler to a speak button
 *
 * @param root HTMLElement containing the dialogue
 */
import { speakText } from "./speak.ts";
import { voiceMap } from "../voices/voiceMap.ts";

/**
 * Extracts readable text from a dialogue block
 */
function extractDialogueText(root: HTMLElement): string {
  return root
    .cloneNode(true)
    .textContent
    ?.replace(/\s+/g, " ")
    .trim() ?? "";
}

/**
 * Get fallback voices for a character
 */
function getVoiceFallbacks(speaker: string): string[] | undefined {
  if (speaker === voiceMap.narrator.label.toLowerCase()) {
    return voiceMap.narrator.fallbacks;
  }
  
  const character = voiceMap.characters[speaker.toUpperCase()];
  return character?.fallbacks;
}

export function attachSpeakHandler(root: HTMLElement): void {
  const btn = root.querySelector<HTMLButtonElement>(".speak");
  if (!btn) return;

  const voice = root.dataset.voice;
  if (!voice) return;

  btn.addEventListener("click", () => {
    const text = extractDialogueText(root);
    if (!text) return;

    // Try to find which character this voice belongs to
    let fallbacks: string[] | undefined;
    
    // Check if it's a character voice
    for (const [character, config] of Object.entries(voiceMap.characters)) {
      if (config.id === voice) {
        fallbacks = config.fallbacks;
        break;
      }
    }
    
    // Check if it's narrator voice
    if (!fallbacks && voiceMap.narrator.id === voice) {
      fallbacks = voiceMap.narrator.fallbacks;
    }

    speakText(text, voice);
  });
}
