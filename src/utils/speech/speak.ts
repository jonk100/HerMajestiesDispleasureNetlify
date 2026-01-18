/**
 * speakText
 *
 * Speaks text using the browser SpeechSynthesis API.
 * Input: text + voiceId
 * Output: void
 */

export function speakText(text: string, voiceId: string): void {
  if (!("speechSynthesis" in window)) {
    console.warn("Speech synthesis not supported");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();

  const match = voices.find(v => v.name === voiceId);
  if (match) utterance.voice = match;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}
