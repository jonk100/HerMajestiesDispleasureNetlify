/**
 * Voice Handler Utility
 * 
 * Centralizes voice configuration logic, button handling, and speech synthesis
 * to eliminate duplication across Dialogue and Action components.
 */

export class VoiceHandler {
  /**
   * Apply voice configuration to utterance based on saved settings
   */
  static applyVoiceConfig(utterance: SpeechSynthesisUtterance, element: Element) {
    // Get saved configuration
    const savedConfig = localStorage.getItem('voiceConfig');
    if (!savedConfig) {
      console.log("No saved voice configuration found");
      return;
    }
    
    try {
      const config = JSON.parse(savedConfig);
      console.log("Using voice config:", config);
      
      let voiceConfig = null;
      let voiceSource = '';
      
      // For dialogue, find the preceding Character component
      let characterName = null;
      
      // Look for the most recent Character element before this element
      let previousElement = element.previousElementSibling;
      while (previousElement) {
        if (previousElement.classList.contains('character')) {
          characterName = previousElement.textContent?.trim();
          console.log(`Found character: ${characterName}`);
          break;
        }
        previousElement = previousElement.previousElementSibling;
      }
      
      // Use existing character mapping system
      if (characterName) {
        // Clean character name (remove parentheticals, normalize)
        const cleanedName = characterName
          .replace(/\(.*?\)/g, "")
          .replace(/\s+#\d+/g, "")
          .replace(/[']/g, "'")
          .trim()
          .toUpperCase();
        
        console.log(`Cleaned character name: ${cleanedName}`);
        
        // Use the shared character mapping system
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
        
        const mappedCharacterName = characterDisplayNames[cleanedName] || characterName;
        if (mappedCharacterName !== characterName) {
          console.log(`Mapped character name: ${characterName} -> ${mappedCharacterName}`);
        }
        
        characterName = mappedCharacterName;
      }
      
      // If no character found in previous siblings, look in parent's previous siblings
      if (!characterName && element.parentElement) {
        let parentSibling = element.parentElement.previousElementSibling;
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
        // Get the last character before this element
        for (let i = allCharacters.length - 1; i >= 0; i--) {
          const charElement = allCharacters[i];
          const charRect = charElement.getBoundingClientRect();
          const elementRect = element.getBoundingClientRect();
          
          // Check if character appears before element (higher up on page)
          if (charRect.top < elementRect.top) {
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
        
        // Apply pitch
        if (voiceConfig.pitch && voiceConfig.pitch !== 1) {
          const pitch = parseFloat(voiceConfig.pitch);
          utterance.pitch = pitch;
          console.log(`✅ Applied pitch: ${pitch} for ${voiceSource}`);
        } else {
          console.log(`Using default pitch (1.0) for ${voiceSource}`);
        }
      } else {
        console.log(`No voice configuration found for ${voiceSource}`);
      }
    } catch (error) {
      console.error("Error applying voice configuration:", error);
    }
  }

  /**
   * Create and configure speak button for an element
   */
  static createButton(element: Element, voiceId: string, elementType: 'dialogue' | 'action') {
    const btn = element.querySelector(".speak") as HTMLButtonElement;
    
    if (!btn || !voiceId) {
      console.log("No button or voiceId found", { btn: !!btn, voiceId });
      return;
    }

    let isPlaying = false;
    let currentUtterance: SpeechSynthesisUtterance | null = null;
    
    const updateButton = () => {
      btn.textContent = isPlaying ? '■' : '▶';
      btn.setAttribute('aria-label', isPlaying ? `Stop ${elementType}` : `Play ${elementType}`);
    };
    
    const extractText = () => {
      // Clone the element and remove the button, then get text
      const clone = element.cloneNode(true) as Element;
      const button = clone.querySelector('.speak');
      if (button) button.remove();
      return clone.textContent?.replace(/\s+/g, " ").trim() ?? "";
    };
    
    btn.addEventListener("click", (e) => {
      console.log(`${elementType} button clicked!`, { isPlaying, voiceId });
      e.preventDefault();
      e.stopPropagation();
      
      if (isPlaying) {
        // Stop speaking
        window.speechSynthesis.cancel();
        isPlaying = false;
        updateButton();
        console.log(`Stopped speaking ${elementType}`);
      } else {
        // Start speaking
        const text = extractText();
        console.log(`Speaking ${elementType}:`, { text, voiceId });
        
        if ('speechSynthesis' in window && text) {
          currentUtterance = new SpeechSynthesisUtterance(text);
          
          // Apply voice configuration
          console.log(`About to apply voice configuration for ${elementType}...`);
          VoiceHandler.applyVoiceConfig(currentUtterance, element);
          console.log(`Voice configuration applied for ${elementType}`);
          
          currentUtterance.onstart = () => {
            isPlaying = true;
            updateButton();
            console.log(`${elementType} started speaking`);
          };
          
          currentUtterance.onend = () => {
            isPlaying = false;
            updateButton();
            console.log(`${elementType} finished speaking`);
          };
          
          currentUtterance.onerror = (e) => {
            console.error("Speech error:", e);
            isPlaying = false;
            updateButton();
          };
          
          window.speechSynthesis.speak(currentUtterance);
        } else {
          console.error("Speech synthesis not supported or no text");
        }
      }
    });
    
    // Add debug functionality
    btn.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      console.log("Available voices:", window.speechSynthesis?.getVoices()?.map(v => v.name));
      console.log("Current voiceId:", voiceId);
    });
    
    // Initialize button
    updateButton();
  }

  /**
   * Initialize voice handling for elements with voice data
   */
  static initializeVoiceElements(elementType: 'dialogue' | 'action') {
    // Check if we're on an episode page - if so, let global handler manage it
    if (window.location.pathname.includes('/episodes/')) {
      console.log("Episode page detected - skipping individual script");
      return;
    }
    
    console.log(`${elementType} script executing...`);
    
    // Wait for DOM to be ready
    const initHandler = () => {
      // Find all unhandled elements and take the last one
      const elements = document.querySelectorAll(`.${elementType}[data-voice]:not([data-handled])`);
      const thisElement = elements[elements.length - 1]; // Take last instead of first
      
      console.log(`Found ${elementType} elements:`, elements.length, "Taking element at index:", elements.length - 1);
      
      if (thisElement) {
        // Mark as handled to avoid duplicate processing
        thisElement.setAttribute('data-handled', 'true');
        
        const voiceId = thisElement.getAttribute('data-voice');
        console.log(`${elementType} script loaded`, { voiceId });
        
        if (voiceId) {
          VoiceHandler.createButton(thisElement, voiceId, elementType);
        }
      } else {
        console.log(`No unhandled ${elementType} found`);
      }
    };
    
    // Check if DOM is already ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initHandler);
    } else {
      initHandler();
    }
  }
}
