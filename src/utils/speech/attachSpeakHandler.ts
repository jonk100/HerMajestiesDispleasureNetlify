/**
 * Attaches click handler to a speak button
 *
 * @param root HTMLElement containing the dialogue
 */
import { speakText } from "./speak.ts";
import { voiceMap } from "../voices/voiceMap.ts";
import { extractDialogueText } from "../textExtraction.ts";

export function attachSpeakHandler(root: HTMLElement): void {
  const btn = root.querySelector<HTMLButtonElement>(".speak");
  if (!btn) return;

  const voice = root.dataset.voice;
  if (!voice) return;

  btn.addEventListener("click", () => {
    const text = extractDialogueText(root);
    if (!text) return;

    speakText(text, voice);
  });
}
