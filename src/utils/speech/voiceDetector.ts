/**
 * Voice Detection Utilities
 * 
 * Helps detect available voices and provides fallbacks
 */

export interface VoiceInfo {
  name: string;
  lang: string;
  gender?: 'male' | 'female';
}

export function getAvailableVoices(): SpeechSynthesisVoice[] {
  if (!('speechSynthesis' in window)) {
    return [];
  }
  return window.speechSynthesis.getVoices();
}

export function findBestVoice(
  preferredVoices: string[], 
  fallbackLang: string = 'en-US'
): SpeechSynthesisVoice | null {
  const voices = getAvailableVoices();
  
  // Try exact matches first
  for (const voiceName of preferredVoices) {
    const match = voices.find(v => v.name === voiceName);
    if (match) return match;
  }
  
  // Try language matches
  for (const voiceName of preferredVoices) {
    const match = voices.find(v => 
      v.lang === voiceName || 
      v.name.toLowerCase().includes(voiceName.toLowerCase())
    );
    if (match) return match;
  }
  
  // Fallback to language
  const langMatch = voices.find(v => v.lang === fallbackLang || v.lang.startsWith(fallbackLang.split('-')[0]));
  if (langMatch) return langMatch;
  
  // Last resort - any English voice
  const anyEnglish = voices.find(v => v.lang.startsWith('en'));
  return anyEnglish || voices[0] || null;
}

export function logAvailableVoices(): void {
  const voices = getAvailableVoices();
  console.log('Available TTS Voices:');
  voices.forEach(voice => {
    console.log(`- ${voice.name} (${voice.lang}) ${voice.default ? '[DEFAULT]' : ''}`);
  });
}
