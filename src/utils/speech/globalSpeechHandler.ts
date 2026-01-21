/**
 * Global Speech Handler
 * 
 * Handles all speak buttons on the page with a single script
 */

export function initGlobalSpeechHandler() {
  console.log("Initializing global speech handler...");
  
  // Find all speak buttons
  const speakButtons = document.querySelectorAll('.speak');
  console.log(`Found ${speakButtons.length} speak buttons`);
  
  speakButtons.forEach((btn, index) => {
    const parent = btn.closest('.dialogue, .action');
    const voiceId = (parent as HTMLElement)?.dataset.voice;
    
    console.log(`Setting up button ${index}:`, { parent: !!parent, voiceId });
    
    if (parent && voiceId) {
      let isPlaying = false;
      let currentUtterance = null;
      
      // Store state on the button element itself
      (btn as any).isPlaying = false;
      (btn as any).currentUtterance = null;
      
      const updateButton = (buttonEl: HTMLButtonElement, playing: boolean) => {
        buttonEl.textContent = playing ? '■' : '▶';
        buttonEl.setAttribute('aria-label', playing ? 'Stop speaking' : 'Play speaking');
        (buttonEl as any).isPlaying = playing;
        console.log(`Button ${index} updated to:`, playing ? '■' : '▶');
      };
      
      const extractText = () => {
        const clone = parent.cloneNode(true);
        const button = clone.querySelector('.speak');
        if (button) button.remove();
        return clone.textContent?.replace(/\s+/g, " ").trim() ?? "";
      };
      
      // Remove any existing listeners by replacing with clone
      const newBtn = btn.cloneNode(true) as HTMLButtonElement;
      if (btn.parentNode) {
        btn.parentNode.replaceChild(newBtn, btn);
      }
      
      // Initialize state on the new button
      (newBtn as any).isPlaying = false;
      (newBtn as any).currentUtterance = null;
      
      // Add click listener to the new button
      newBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Get current state from the button
        const currentlyPlaying = (newBtn as any).isPlaying;
        console.log(`Button ${index} clicked! Current state:`, currentlyPlaying);
        
        if (currentlyPlaying) {
          // Stop speaking
          console.log("Stopping speech...");
          window.speechSynthesis.cancel();
          (newBtn as any).isPlaying = false;
          updateButton(newBtn, false);
          
          // Clear the utterance reference
          if ((newBtn as any).currentUtterance) {
            (newBtn as any).currentUtterance = null;
          }
        } else {
          // Start speaking
          const text = extractText();
          console.log(`Speaking button ${index}:`, { text, voiceId });
          
          if ('speechSynthesis' in window && text) {
            // Cancel any existing speech first
            window.speechSynthesis.cancel();
            
            const utterance = new SpeechSynthesisUtterance(text);
            (newBtn as any).currentUtterance = utterance;
            
            utterance.onstart = () => {
              console.log(`Button ${index} started speaking`);
              (newBtn as any).isPlaying = true;
              updateButton(newBtn, true);
            };
            
            utterance.onend = () => {
              console.log(`Button ${index} finished speaking`);
              (newBtn as any).isPlaying = false;
              (newBtn as any).currentUtterance = null;
              updateButton(newBtn, false);
            };
            
            utterance.onerror = (e) => {
              console.error("Speech error:", e);
              (newBtn as any).isPlaying = false;
              (newBtn as any).currentUtterance = null;
              updateButton(newBtn, false);
            };
            
            window.speechSynthesis.speak(utterance);
          } else {
            console.error("Speech synthesis not supported or no text");
          }
        }
      });
      
      // Add debug functionality
      newBtn.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        console.log("Available voices:", window.speechSynthesis?.getVoices()?.map(v => v.name));
        console.log("Current voiceId:", voiceId);
        console.log("Button state:", { isPlaying: (newBtn as any).isPlaying });
      });
      
      // Initialize button
      updateButton(newBtn, false);
    }
  });
}

// Auto-initialize when DOM is ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobalSpeechHandler);
  } else {
    initGlobalSpeechHandler();
  }
}
