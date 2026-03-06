/**
 * Global Speech Handler
 * 
 * Handles all speak buttons on the page with a single script
 */

export function initGlobalSpeechHandler() {
  // Find all speak buttons
  const speakButtons = document.querySelectorAll('.speak');
  
  speakButtons.forEach((btn, index) => {
    const parent = btn.closest('.dialogue, .action, .parenthetical');
    const voiceId = (parent as HTMLElement)?.dataset.voice;
    
    if (parent) {
      let isPlaying = false;
      let currentUtterance = null;
      
      // Store state on the button element itself
      (btn as any).isPlaying = false;
      (btn as any).currentUtterance = null;
      
      const updateButton = (buttonEl: HTMLButtonElement, playing: boolean) => {
        buttonEl.textContent = playing ? '■' : '▶';
        buttonEl.setAttribute('aria-label', playing ? 'Stop speaking' : 'Play speaking');
        (buttonEl as any).isPlaying = playing;
      };
      
      const extractText = () => {
        // Clone the element and remove the button, then get text
        const clone = parent.cloneNode(true) as HTMLElement;
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
        
        if (currentlyPlaying) {
          // Stop speaking
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
          
          if ('speechSynthesis' in window && text) {
            // Cancel any existing speech first
            window.speechSynthesis.cancel();
            
            const utterance = new SpeechSynthesisUtterance(text);
            (newBtn as any).currentUtterance = utterance;
            
            // Apply voice configuration (ignore the hardcoded voiceId)
            applyVoiceConfig(utterance, parent);
            
            utterance.onstart = () => {
              (newBtn as any).isPlaying = true;
              updateButton(newBtn, true);
            };
            
            utterance.onend = () => {
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
      });
      
      // Initialize button
      updateButton(newBtn, false);
    }
  });
}

// Apply voice configuration to utterance
function applyVoiceConfig(utterance: SpeechSynthesisUtterance, parent: Element) {
  // Get saved configuration
  const savedConfig = localStorage.getItem('voiceConfig');
  if (!savedConfig) {
    return;
  }
  
  try {
    const config = JSON.parse(savedConfig);
    
    // Determine if this is narrator or character
    const isAction = parent.classList.contains('action');
    const isDialogue = parent.classList.contains('dialogue');
    const isParenthetical = parent.classList.contains('parenthetical');
    
    let voiceConfig = null;
    let voiceSource = '';
    let characterName = null;
    
    if (isAction || isParenthetical) {
      // Use narrator configuration for action and parenthetical
      voiceConfig = config.narrator;
      voiceSource = `narrator (${isParenthetical ? 'parenthetical' : 'action'})`;
    } else if (isDialogue) {
      // For dialogue, find the preceding Character component
      characterName = null;
      
      // Look for the most recent Character element before this dialogue
      let previousElement = parent.previousElementSibling;
      while (previousElement) {
        if (previousElement.classList.contains('character')) {
          let rawCharacterName = previousElement.textContent?.trim();
          if (rawCharacterName) {
            // Clean character name (remove parentheticals, normalize)
            const cleanedName = rawCharacterName
              .replace(/\(.*?\)/g, "")
              .replace(/\s+#\d+/g, "")
              .replace(/[']/g, "'")
              .trim()
              .toUpperCase();
            
            // Character name mapping
            const characterDisplayNames: Record<string, string> = {
              'JOHN': 'John Lennon',
              'JOHN LENNON': 'John Lennon',
              'PAUL': 'Paul McCartney',
              'PAUL MCCARTNEY': 'Paul McCartney',
              'GEORGE': 'George Harrison',
              'GEORGE HARRISON': 'George Harrison',
              'RINGO': 'Ringo Starr',
              'RINGO STARR': 'Ringo Starr',
              'YOKO': 'Yoko Ono',
              'BRIAN': 'Brian Epstein',
              'EPSTEIN': 'Brian Epstein',
              'BRIAN EPSTEIN': 'Brian Epstein',
              'NIGEL': 'Nigel Finch',
              'NIGEL FINCH': 'Nigel Finch',
              'CLIVE': 'Clive Barrow',
              'CLIVE BARROW': 'Clive Barrow',
              'SIR DEREK': 'Sir Derrick Finchley',
              'SIR DEREK FINCHLEY': 'Sir Derrick Finchley',
              'PHILIP': 'Prince Philip',
              'PHILLIP': 'Prince Philip',
              'PRINCE PHILIP': 'Prince Philip',
              'PRINCE PHILLIP': 'Prince Philip',
              'MOUNTBATTEN': 'Lord Mountbatten',
              'LORD MOUNTBATTEN': 'Lord Mountbatten',
              'QUEEN ELIZABETH': 'Queen Elizabeth',
              'QUEEN ELIZABETH II': 'Queen Elizabeth',
              'THE QUEEN': 'Queen Elizabeth',
              'MARGARET': 'Princess Margarette',
              'MARGARETTE': 'Princess Margarette',
              'PRINCESS MARGARET': 'Princess Margarette',
              'PRINCESS MARGARETTE': 'Princess Margarette',
              'GEORGE MARTIN': 'George Martin',
              'GLYN JOHNS': 'Glyn Johns',
              'MAL EVANS': 'Mal Evans',
              'BILLY': 'Billy Preston',
              'BILLY PRESTON': 'Billy Preston',
              'RAVI SHANKAR': 'Ravi Shankar',
              'LINDA': 'Linda McCartney',
              'MAUREEN': 'Maureen Cleave',
              'MAUREEN CLEAVE': 'Maureen Cleave'
            };
            
            characterName = characterDisplayNames[cleanedName] || rawCharacterName;
            console.log(`Found character: ${characterName}`);
            break;
          }
        }
        previousElement = previousElement.previousElementSibling;
      }
      
      // If no character found in previous siblings, look in parent's previous siblings
      if (!characterName && parent.parentElement) {
        let parentSibling = parent.parentElement.previousElementSibling;
        while (parentSibling) {
          const charElement = parentSibling.querySelector('.character');
          if (charElement) {
            characterName = charElement.textContent?.trim();
            console.log(`Found character in parent sibling: ${characterName}`);
            break;
          }
          parentSibling = parentSibling.previousElementSibling;
        }
      }
      
      // If still no character found, search more broadly in the scene
      if (!characterName) {
        const allCharacters = document.querySelectorAll('.character');
        // Get the last character before this dialogue element
        for (let i = allCharacters.length - 1; i >= 0; i--) {
          const charElement = allCharacters[i];
          const charRect = charElement.getBoundingClientRect();
          const dialogueRect = parent.getBoundingClientRect();
          
          // Check if character appears before dialogue (higher up on page)
          if (charRect.top < dialogueRect.top) {
            characterName = charElement.textContent?.trim();
            console.log(`Found character by position: ${characterName}`);
            break;
          }
        }
      }
      
      // Use character configuration if found
      if (characterName && config.characters[characterName]) {
        voiceConfig = config.characters[characterName];
        voiceSource = `character: ${characterName}`;
        console.log(`Using character config for: ${characterName}`, voiceConfig);
      }
      
      // Fallback to narrator if no character config found
      if (!voiceConfig && config.narrator) {
        voiceConfig = config.narrator;
        voiceSource = 'narrator (fallback)';
        console.log("Fallback to narrator config");
      }
    }
    
    console.log(`Voice config for ${voiceSource}:`, voiceConfig);
    
    if (voiceConfig) {
      // Apply voice selection
      if (voiceConfig.voice && voiceConfig.voice !== '') {
        const voices = window.speechSynthesis.getVoices();
        console.log("Available voices for selection:", voices.map(v => v.name));
        
        const selectedVoice = voices.find(v => v.name === voiceConfig.voice);
        if (selectedVoice) {
          utterance.voice = selectedVoice;
          console.log(`✅ Applied voice: ${selectedVoice.name} for ${voiceSource}`);
        } else {
          console.warn(`❌ Voice not found: ${voiceConfig.voice} for ${voiceSource}`);
          console.log("Available voices:", voices.map(v => v.name));
        }
      } else {
        console.log(`No voice configured for ${voiceSource}, using default`);
      }
      
      // Apply speed
      if (voiceConfig.speed && voiceConfig.speed !== 1) {
        const speed = parseFloat(voiceConfig.speed);
        utterance.rate = speed;
        console.log(`✅ Applied speed: ${speed} for ${voiceSource}`);
      } else {
        console.log(`Using default speed (1.0) for ${voiceSource}`);
      }
    } else {
      console.log(`No voice configuration found for ${voiceSource}`);
    }
  } catch (error) {
    console.error("Error applying voice configuration:", error);
  }
}

// Auto-initialize when DOM is ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobalSpeechHandler);
  } else {
    initGlobalSpeechHandler();
  }
  
  // Add reload function for voice configuration updates
  (window as any).reloadVoiceConfig = () => {
    console.log("Reloading voice configuration...");
    // Re-initialize the speech handler to pick up new configuration
    initGlobalSpeechHandler();
  };
}
