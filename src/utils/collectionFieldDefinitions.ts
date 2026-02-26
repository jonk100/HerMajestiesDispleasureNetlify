/**
 * collectionFieldDefinitions.ts
 *
 * Central semantic registry for all content collections.
 *
 * This file:
 * - Documents the intent behind every field
 * - Lists all enum options explicitly
 * - Provides structural guidance and examples
 *
 * It does NOT affect validation. It is editorial and structural metadata.
 */

export type FieldDefinition = {
  description: string;
  intent?: string;
  usage?: string;
  enumValues?: Record<string, string>;
  examples?: string[];
};

export type CollectionFieldDefinitions = {
  [collection: string]: {
    description: string;
    fields: Record<string, FieldDefinition>;
  };
};

export const FIELD_DEFINITIONS: CollectionFieldDefinitions = {
  characters: {
    description:
      "Dramatic agents of the story. Characters drive conflict, theme, and structural movement.",
    fields: {
      name: {
        description: "Canonical character name.",
        examples: ["Princess Margaret", "Paul McCartney"],
      },
      dialogue_name: {
        description: "Name(s) used in dialogue.",
        usage:
          "Use when characters are addressed differently than canonical name.",
        examples: ["'Mags'", "['Sir', 'Your Majesty']"],
      },
      role: {
        description: "Narrative weight classification.",
        enumValues: {
          protagonist: "Primary driver of narrative change.",
          antagonist: "Primary opposing force.",
          supporting: "Important recurring character.",
          minor: "Limited narrative impact.",
        },
      },
      character_type: {
        description: "Ontological classification.",
        enumValues: {
          historical_figure: "Real documented individual.",
          fictional: "Entirely invented.",
          composite: "Blended from multiple real figures.",
        },
      },
      age: {
        description: "Age across act structure.",
        examples: [
          "{ act_1: 22, act_2: 28, act_3: 34 }",
        ],
      },
      occupation: {
        description: "Primary profession or societal role.",
        examples: ["Singer-songwriter", "Prime Minister"],
      },
      description: {
        description: "Psychological and narrative summary.",
        intent:
          "Should describe desire, flaw, contradiction, and thematic role.",
      },
      first_appearance: {
        description: "Scene where character first appears.",
      },
      last_appearance: {
        description: "Final scene appearance.",
      },
      created: { description: "Creation timestamp." },
      updated: { description: "Last modification timestamp." },
    },
  },

  scenes: {
    description:
      "Dramatic containers of conflict. Scenes should cause change.",
    fields: {
      title: {
        description: "Working scene title.",
        examples: ["Backstage Confrontation", "The Balcony Speech"],
      },
      act: {
        description: "Act placement (1–5).",
      },
      sequence: {
        description: "Sequence grouping identifier.",
      },
      scene_number: {
        description: "Production-style scene number.",
        examples: ["12", "12.5"],
      },
      scene_type: {
        description: "Formal construction of scene.",
        enumValues: {
          standard: "Single continuous location and time.",
          montage: "Compressed passage of time.",
          intercut: "Alternating between simultaneous actions.",
          composite: "Multiple micro-scenes grouped.",
        },
      },
      chronology_index: {
        description:
          "True chronological order when narrative is non-linear.",
      },
      location: {
        description: "Primary or composite setting.",
      },
      time_of_day: {
        description: "Temporal context.",
        enumValues: {
          morning: "Early daylight.",
          day: "Midday hours.",
          evening: "Late daylight.",
          night: "After dark.",
          continuous: "Directly follows previous scene.",
        },
      },
      characters: {
        description: "Characters present in scene.",
      },
      purpose: {
        description: "Why this scene exists structurally.",
        examples: [
          "Escalates political pressure.",
          "Forces protagonist into public stance.",
        ],
      },
      conflict: {
        description: "Primary tension source.",
        examples: [
          "Personal betrayal vs public image.",
        ],
      },
      emotional_beat: {
        description: "Dominant emotional tone.",
        examples: ["Humiliation", "Triumph", "Suppressed anger"],
      },
      page_count: {
        description: "Approximate script length.",
      },
      status: {
        description: "Development stage.",
        enumValues: {
          outline: "Conceptual stage.",
          draft: "Written but unstable.",
          revision: "Under refinement.",
          final: "Locked structurally.",
        },
      },
      notes: { description: "Development notes." },
      episode_candidates: {
        description: "Possible episode placements.",
      },
      created: { description: "Creation timestamp." },
      updated: { description: "Last modification timestamp." },
    },
  },

  episodes: {
    description:
      "Macro structural arcs. Episodes contain thematic and dramatic escalation.",
    fields: {
      episode_number: { description: "Ordinal episode number." },
      title: { description: "Episode title." },
      logline: {
        description: "One-sentence dramatic engine.",
        examples: [
          "A private scandal threatens a public institution.",
        ],
      },
      timeframe: {
        description: "Story time covered.",
        examples: ["Three days", "Summer 1969"],
      },
      thematic_engine: {
        description: "Primary ideological tension.",
        examples: ["Tradition vs modernity"],
      },
      scenes: {
        description: "Ordered scene references.",
      },
      opening_image: {
        description: "Initial tonal image.",
      },
      closing_image: {
        description: "Final resonant image.",
      },
      arc_function: {
        description: "Placement within season arc.",
        enumValues: {
          introduction: "Establishes world and tone.",
          inciting: "Triggers central conflict.",
          escalation: "Intensifies stakes.",
          complication: "Adds new layers of conflict.",
          reversal: "Major structural turn.",
          climax: "Peak confrontation.",
          resolution: "Aftermath and stabilization.",
        },
      },
      estimated_runtime: {
        description: "Estimated runtime in minutes.",
      },
      notes: { description: "Development notes." },
      episode_question: {
        description: "Central dramatic question.",
      },
      episode_button: {
        description: "Final forward-driving beat.",
      },
      created: { description: "Creation timestamp." },
      updated: { description: "Last modification timestamp." },
    },
  },

  beats: {
    description:
      "Micro-level units of change. Beats represent shifts in power, knowledge, status, or emotion.\n\nThe five axes are orthogonal and diagnostic:\n\n- movement_type vs information_type: Power can move without new information, and information can be revealed without power shift.\n- scope vs pressure_level: A beat can have high pressure but limited scope (intense personal moment), or large scope but low pressure (gradual institutional change).\n- scope vs irreversibility: Global changes can be reversible (policy shift), while internal changes can be permanent (character realization).\n- pressure_level vs irreversibility: High tension doesn't guarantee permanent consequences.\n\nThis model enables precise structural diagnosis and pattern analysis.",
    fields: {
      title: { description: "Beat label." },
      episode: { description: "Episode reference." },
      act: { description: "Act placement." },
      sequence: { description: "Sequence grouping." },
      scene_number: { description: "Parent scene." },
      beat_index: { description: "Order within scene." },
      structural_role: {
        description: "Clarifies exact structural mechanism.",
      },
      triggered_by: {
        description: "Immediate cause of beat.",
      },
      leads_to: {
        description: "Immediate consequence.",
      },
      status_quo_before: {
        description: "State before change.",
      },
      shift: {
        description: "Core transformation enacted.",
        intent: "Must describe change.",
        examples: [
          "Protagonist loses institutional support.",
        ],
      },
      status_quo_after: {
        description: "New equilibrium.",
      },
      primary_character: {
        description: "Most affected character.",
      },
      opposition: {
        description: "Opposing force.",
      },
      stakes: {
        description: "What is at risk.",
      },
      theme: {
        description: "Thematic idea expressed.",
      },
      power_shift: {
        description: "Explicit power movement.",
      },
      public_private_axis: {
        description: "Scope of consequence.",
        enumValues: {
          public: "Consequences visible publicly.",
          private: "Internal or personal.",
          collision: "Private issue erupts publicly.",
          private_with_public_threat:
            "Private issue risks public fallout.",
        },
      },
      plant: {
        description: "If beat installs element.",
      },
      payoff: {
        description: "If beat resolves prior setup.",
      },
      page_range: {
        description: "Script page span.",
      },
      movement_type: {
        description: "Change in power or direction.",
        intent:
          "Describes how power dynamics or narrative trajectory shift.",
        enumValues: {
          escalation: "Power or stakes increase.",
          deescalation: "Power or stakes decrease.",
          reversal: "Power or direction flips completely.",
          turn: "Direction shifts without full reversal.",
          stasis: "No power movement; structural holding pattern.",
          internal_shift: "Internal change without external power shift.",
        },
        examples: [
          "escalation — antagonist gains institutional support",
          "reversal — protagonist's ally becomes enemy",
          "turn — scene shifts from political to personal",
          "stasis — character maintains position despite pressure",
          "internal_shift — character realizes truth but doesn't act",
          "deescalation — threat level diminishes",
        ],
      },

      information_type: {
        description: "Change in knowledge or expectation.",
        intent:
          "Describes how information moves the narrative. Informational beats may not move power.",
        enumValues: {
          none: "No new information introduced.",
          setup: "Installs context or conditions.",
          reveal: "Uncovers hidden information.",
          plant: "Installs element for future payoff.",
          payoff: "Resolves prior planted information.",
          withholding: "Deliberately holds back information.",
          misdirect: "Points toward false conclusion.",
        },
        examples: [
          "reveal — protagonist learns of betrayal",
          "plant — character mentions seemingly casual detail",
          "payoff — earlier planted clue becomes relevant",
          "withholding — character knows something but doesn't speak",
          "misdirect — evidence suggests wrong culprit",
          "setup — scene establishes political climate",
          "none — pure power struggle without new information",
        ],
      },

      scope: {
        description: "Structural radius of impact.",
        intent:
          "Describes how widely the beat resonates. Scope is distinct from intensity and stakes.",
        enumValues: {
          internal: "Affects one character's internal state.",
          interpersonal: "Affects relationship between characters.",
          subplot: "Affects secondary narrative engine.",
          primary_plot: "Affects main narrative engine.",
          global: "Affects entire story world.",
        },
        examples: [
          "internal — character has realization",
          "interpersonal — trust between two characters breaks",
          "subplot — secondary character's storyline advances",
          "primary_plot — main conflict escalates",
          "global — political system changes",
        ],
      },
      pressure_level: {
        description: "Dramatic intensity 1–10.",
        intent:
          "Measures immediate tension intensity, not size of impact. High pressure does not imply high scope.",
      },

      irreversibility: {
        description: "Degree of permanence.",
        intent:
          "Measures permanence of consequence. A beat may be global but reversible.",
        enumValues: {
          none: "Temporary shift.",
          personal: "Permanent internal change.",
          public: "Public status change.",
          historical: "Alters historical trajectory.",
        },
      },
      engine: {
        description: "Primary force driving beat.",
        enumValues: {
          character: "Driven by personal desire/flaw.",
          institution: "Driven by system or power structure.",
          cultural: "Driven by societal pressure.",
        },
      },
      created: { description: "Creation timestamp." },
    },
  },

  locations: {
    description:
      "Physical environments that shape mood and conflict.",
    fields: {
      name: { description: "Location name." },
      type: {
        description: "Interior/exterior classification.",
        enumValues: {
          interior: "Indoor space.",
          exterior: "Outdoor space.",
          misc: "Non-standard or abstract.",
        },
      },
      description: {
        description: "Narrative and sensory detail.",
      },
      mood: {
        description: "Emotional tone of space.",
      },
      visual_notes: {
        description: "Cinematographic considerations.",
      },
      practical_notes: {
        description: "Production logic constraints.",
      },
      scenes_used: {
        description: "Scenes set here.",
      },
      reference_images: {
        description: "External visual references.",
      },
      created: { description: "Creation timestamp." },
    },
  },

  dialogue: {
    description:
      "Standalone dialogue fragments for reuse or analysis.",
    fields: {
      title: { description: "Dialogue label." },
      characters: {
        description: "Characters involved.",
      },
      context: {
        description: "Narrative situation.",
      },
      emotion: {
        description: "Dominant emotional tone.",
      },
      subtext: {
        description: "Underlying meaning.",
      },
      tags: {
        description: "Categorization labels.",
      },
      scene_reference: {
        description: "Linked scene.",
      },
      created: { description: "Creation timestamp." },
    },
  },

  research: {
    description:
      "Factual and inspirational grounding material.",
    fields: {
      title: { description: "Research topic." },
      category: {
        description: "Research classification.",
      },
      date_range: {
        description: "Historical span.",
      },
      source: {
        description: "Primary source.",
      },
      reliability: {
        description: "Confidence level.",
        enumValues: {
          verified: "Documented and confirmed.",
          likely: "Strongly supported.",
          speculative: "Uncertain.",
          creative_liberty: "Intentional deviation.",
          mixed: "Combination of above.",
        },
      },
      relevance: {
        description: "Why this matters narratively.",
      },
      tags: {
        description: "Search keywords.",
      },
      release_date: {
        description: "Publication date.",
      },
      created: { description: "Creation timestamp." },
    },
  },

  themes: {
    description:
      "Core philosophical or ideological tensions.",
    fields: {
      name: { description: "Theme label." },
      description: {
        description: "Clear thematic statement.",
      },
      how_explored: {
        description: "Mechanisms of exploration.",
      },
      character_connections: {
        description: "Characters expressing theme.",
      },
      scene_references: {
        description: "Scenes where theme appears.",
      },
      symbols: {
        description: "Recurring symbolic motifs.",
      },
      created: { description: "Creation timestamp." },
    },
  },

  timeline: {
    description:
      "Chronological record of real and fictional events.",
    fields: {
      title: { description: "Event label." },
      date: { description: "Date of event." },
      event_type: {
        description: "Nature of event.",
        enumValues: {
          historical_fact: "Documented real event.",
          creative_interpretation:
            "Dramatized interpretation of real event.",
          fictional_event: "Invented for narrative.",
        },
      },
      description: {
        description: "Event summary.",
      },
      characters_involved: {
        description: "Participants.",
      },
      sources: {
        description: "Reference materials.",
      },
      scene_reference: {
        description: "Linked dramatized scene.",
      },
      importance: {
        description: "Narrative weight.",
        enumValues: {
          critical: "Essential to plot.",
          important: "Significant but not core.",
          background: "Contextual only.",
        },
      },
      created: { description: "Creation timestamp." },
    },
  },
};