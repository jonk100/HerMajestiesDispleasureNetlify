/**
 * speakText
 *
 * Speaks text using the browser SpeechSynthesis API.
 * Input: text + voiceId
 * Output: void
 */

export function speakText(text: string, voiceId?: string): void {
  console.log("speakText called:", { text, voiceId });
  
  if (!("speechSynthesis" in window)) {
    console.warn("Speech synthesis not supported");
    return;
  }

  // Get voices
  const voices = window.speechSynthesis.getVoices();
  console.log("Available voices:", voices.map(v => v.name));

  const utterance = new SpeechSynthesisUtterance(text);
  
  if (voiceId) {
    // Try to find voice by name
    const match = voices.find(v => v.name === voiceId);
    if (match) {
      utterance.voice = match;
      console.log(`Using voice: ${match.name}`);
    } else {
      console.warn(`Voice "${voiceId}" not found, using default`);
    }
  }

  utterance.onstart = () => console.log("Speech started");
  utterance.onend = () => console.log("Speech ended");
  utterance.onerror = (e) => console.error("Speech error:", e);

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}
