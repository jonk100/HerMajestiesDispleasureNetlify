/**
 * Voice debugging utilities
 */

import { logAvailableVoices } from "./voiceDetector.js";

export function debugVoiceSetup(): void {
  console.log("=== Voice Debugging ===");
  
  if (!('speechSynthesis' in window)) {
    console.error("Speech synthesis not supported in this browser");
    return;
  }

  console.log("Speech synthesis supported");
  
  // Log available voices
  logAvailableVoices();
  
  // Test basic speech
  const testUtterance = new SpeechSynthesisUtterance("Voice test working");
  testUtterance.onstart = () => console.log("Test speech started");
  testUtterance.onend = () => console.log("Test speech ended");
  testUtterance.onerror = (e) => console.error("Test speech error:", e);
  
  // Uncomment to test immediately
  // window.speechSynthesis.speak(testUtterance);
}

// Make available globally for debugging
declare global {
  interface Window {
    debugVoiceSetup: typeof debugVoiceSetup;
  }
}

// Attach to window for console debugging
if (typeof window !== 'undefined') {
  window.debugVoiceSetup = debugVoiceSetup;
}
