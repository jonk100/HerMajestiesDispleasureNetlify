/**
 * Text extraction utilities
 * 
 * Provides shared functions for extracting readable text from DOM elements
 * for speech synthesis and other purposes.
 */

/**
 * Extracts readable text from a dialogue block
 * Removes speak buttons and normalizes whitespace
 */
export function extractDialogueText(root: HTMLElement): string {
  return root
    .cloneNode(true)
    .textContent
    ?.replace(/\s+/g, " ")
    .trim() ?? "";
}

/**
 * Extract text from an element, removing speak buttons
 * Used by speech handlers to get clean text for TTS
 */
export function extractTextForSpeech(element: HTMLElement): string {
  // Clone the element and remove the button, then get text
  const clone = element.cloneNode(true) as HTMLElement;
  const button = clone.querySelector('.speak');
  if (button) button.remove();
  return clone.textContent?.replace(/\s+/g, " ").trim() ?? "";
}
