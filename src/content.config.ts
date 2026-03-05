// src/content.config.ts
import { defineCollection, z, reference } from "astro:content";

/**
 * Beat function taxonomy — what the beat is doing
 * dramatically. Multiple can apply to a single beat.
 */
const beatFunctionSchema = z.enum([
  // Structural
  "setup",
  "payoff",
  "setup_payoff",    // does both simultaneously
  "reversal",
  "mirror",          // echoes earlier beat with changed meaning

  // Character
  "establishment",
  "development",
  "revelation",
  "departure",
  "decision",

  // Operational (series-specific)
  "conception",
  "deployment",
  "misfire",
  "escalation",
  "collapse",
  "burial",

  // Tonal
  "comedy",
  "elegy",
  "irony",
  "satire",
  "tension",

  // Thematic
  "thesis",
  "counter",
  "synthesis",
]);

/**
 * Thread effect — how a beat affects a named narrative thread.
 * Threads are the cross-episode connective tissue.
 */
const threadEffectSchema = z.object({
  /** The thread identifier — must match a thread slug */
  thread: z.string(),
  /**
   * What this beat does to the thread.
   * opens: first appearance of this thread
   * advances: thread is active and moves forward
   * closes: thread is resolved
   * reopens: thread was closed and returns
   * dormant: thread is acknowledged but paused
   */
  effect: z.enum([
    "opens",
    "advances",
    "closes",
    "reopens",
    "dormant",
  ]),
  note: z.string().optional(),
});

/**
 * Story beats collection schema
 * Merges your structural/analytical fields with
 * beat function taxonomy and thread tracking.
 */
const beats = defineCollection({
  type: "content",
  schema: z.object({

    // ─── Identity ────────────────────────────────────────────
    title: z.string(),
    episode: z.number().min(1),
    act: z.number().min(1).max(5),
    sequence: z.number(),
    scene_number: z.number(),
    beat_index: z.number(),

    // ─── Dramatic Function ───────────────────────────────────
    /**
     * Primary beat function — the most important thing
     * this beat is doing. Required.
     */
    beat_function: beatFunctionSchema.optional(),

    /**
     * Secondary beat functions — additional things this
     * beat is doing simultaneously. A beat that is both
     * a reversal and a setup needs both tracked.
     */
    beat_function_secondary: z.array(beatFunctionSchema).default([]),

    /**
     * Your movement_type — which direction is the
     * story moving through this beat?
     */
    movement_type: z.enum([
      "escalation",
      "deescalation",
      "reversal",
      "turn",
      "stasis",
      "internal_shift",
    ]).optional(),

    /**
     * Your information_type — what is this beat doing
     * with narrative information?
     */
    information_type: z.enum([
      "none",
      "setup",
      "reveal",
      "plant",
      "payoff",
      "withholding",
      "misdirect",
    ]).default("none"),

    // ─── Scope and Scale ─────────────────────────────────────
    /**
     * Your scope — how wide is the dramatic field
     * this beat operates in?
     */
    scope: z.enum([
      "internal",
      "interpersonal",
      "subplot",
      "primary_plot",
      "global",
    ]).optional(),

    /**
     * Your engine — what is driving this beat?
     */
    engine: z.enum([
      "character",
      "institution",
      "cultural",
    ]).optional(),

    /**
     * Your public_private_axis — where does this beat
     * sit on the show's central tension?
     */
    public_private_axis: z.enum([
      "public",
      "private",
      "collision",
      "private_with_public_threat",
    ]).optional(),

    // ─── Status Quo Tracking ─────────────────────────────────
    /**
     * Your status_quo fields — the discipline that forces
     * articulation of what actually changed.
     */
    status_quo_before: z.string().optional(),
    shift: z.string().optional(),
    status_quo_after: z.string().optional(),

    // ─── Character ───────────────────────────────────────────
    primary_character: z.string(),
    opposition: z.string().optional(),
    stakes: z.string().optional(),

    // ─── Structural Role ─────────────────────────────────────
    structural_role: z.string(),
    triggered_by: z.string().optional(),
    leads_to: z.string().optional(),

    // ─── Thread Tracking ─────────────────────────────────────
    /**
     * Named narrative threads this beat affects.
     * This replaces the freetext plant/payoff fields
     * with a queryable structure.
     */
    thread_effects: z.array(threadEffectSchema).default([]),

    /**
     * Keep plant and payoff as freetext for beats that
     * don't fit cleanly into the thread system —
     * visual motifs, tonal echoes, structural
     * foreshadowing that isn't a named thread.
     */
    plant: z.string().optional(),
    payoff: z.string().optional(),

    // ─── Analytical ──────────────────────────────────────────
    theme: z.string().optional(),
    power_shift: z.string().optional(),

    /**
     * Your pressure_level — enables tension curve
     * visualization across episodes.
     */
    pressure_level: z.number().min(1).max(10).optional(),

    /**
     * Your irreversibility — different question from
     * significance. Historical beats look small
     * and have permanent consequences.
     */
    irreversibility: z.enum([
      "none",
      "personal",
      "public",
      "historical",
    ]).default("none"),

    // ─── Editorial ───────────────────────────────────────────
    /**
     * Quality assessment — freetext note on whether
     * this beat is working and why/why not.
     * Not schema-critical but useful during revision.
     */
    quality_note: z.string().optional(),

    /**
     * Flag for beats that need attention —
     * structural problems, missed payoffs,
     * tonal inconsistencies.
     */
    needs_revision: z.boolean().default(false),
    revision_note: z.string().optional(),

    // ─── Location ────────────────────────────────────────────
    page_range: z.string().optional(),

    created: z.date().optional(),
  }),
});

/**
 * Threads collection — the cross-episode connective tissue.
 * Each named thread in thread_effects must have an entry here.
 * This gives you a queryable registry of every narrative
 * thread in the series.
 */
const threads = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),

    /**
     * What kind of thread is this?
     */
    thread_type: z.enum([
      "character_arc",       // a character's internal journey
      "relationship",        // between two or more characters
      "operational",         // the MI5 operation and its components
      "thematic",            // a recurring idea or argument
      "motif",               // a visual or verbal recurring element
      "plot",                // a causal chain of events
    ]),

    /** Which episode opens this thread */
    opened_in_episode: z.number().min(1),

    /** Which episode closes this thread, if known */
    closed_in_episode: z.number().min(1).optional(),

    /**
     * Current status — useful for tracking during drafting
     */
    status: z.enum([
      "open",
      "dormant",
      "closed",
      "abandoned",    // opened but never paid off — flag for revision
    ]).default("open"),

    /**
     * If abandoned — what was the intended payoff?
     * Critical for the revision pass.
     */
    intended_payoff: z.string().optional(),

    /**
     * Characters whose arcs are involved in this thread
     */
    characters: z.array(reference("characters")).default([]),

    /**
     * Editorial notes on the thread's health
     */
    notes: z.string().optional(),

    created: z.date(),
    updated: z.date().optional(),
  }),
});

/**
 * Character collection schema — unchanged from your version
 */
const characters = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    dialogue_name: z.union([z.string(), z.array(z.string())]).optional(),
    role: z.enum(["protagonist", "antagonist", "supporting", "minor"]),
    character_type: z.enum(["historical_figure", "fictional", "composite"]),
    age: z.object({
      act_1: z.number().optional(),
      act_2: z.number().optional(),
      act_3: z.number().optional(),
    }).optional(),
    occupation: z.string().optional(),
    description: z.string(),
    first_appearance: reference("scenes").optional(),
    last_appearance: reference("scenes").optional(),
    created: z.date(),
    updated: z.date().optional(),
  }),
});

/**
 * Scenes collection schema — unchanged from your version
 */
const scenes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    act: z.number().min(1).max(5).optional(),
    sequence: z.number(),
    scene_number: z.number().min(0).max(99.9),
    scene_type: z
      .enum(["standard", "montage", "intercut", "composite"])
      .default("standard"),
    chronology_index: z.number().optional(),
    location: z.union([
      reference("locations"),
      z.array(reference("locations")),
    ]),
    time_of_day: z.union([
      z.enum(["morning", "day", "evening", "night", "continuous"]),
      z.array(z.enum(["morning", "day", "evening", "night", "continuous"])),
    ]),
    characters: z.array(reference("characters")),
    purpose: z.string().optional(),
    conflict: z.string().optional(),
    emotional_beat: z.string().optional(),
    page_count: z.number().optional(),
    status: z
      .enum(["outline", "draft", "revision", "final"])
      .default("outline"),
    notes: z.string().optional(),
    episode_candidates: z.array(z.number()).optional(),
    created: z.date(),
    updated: z.date().optional(),
  }),
});

/**
 * Episodes collection schema — unchanged from your version
 */
const episodes = defineCollection({
  type: "content",
  schema: z.object({
    episode_number: z.number().min(1),
    title: z.string(),
    logline: z.string(),
    timeframe: z.string().optional(),
    thematic_engine: z.string().optional(),
    scenes: z.array(reference("scenes")),
    opening_image: z.string().optional(),
    closing_image: z.string().optional(),
    arc_function: z.enum([
      "introduction",
      "inciting",
      "escalation",
      "complication",
      "reversal",
      "climax",
      "resolution",
    ]),
    estimated_runtime: z.number().optional(),
    notes: z.string().optional(),
    episode_question: z.string().optional(),
    episode_button: z.string().optional(),
    created: z.date(),
    updated: z.date().optional(),
  }),
});

/**
 * Locations collection schema — unchanged from your version
 */
const locations = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    type: z.enum(["interior", "exterior", "misc"]),
    description: z.string(),
    mood: z.string().optional(),
    visual_notes: z.string().optional(),
    practical_notes: z.string().optional(),
    scenes_used: z.array(reference("scenes")).default([]),
    reference_images: z.array(z.string()).default([]),
    created: z.date(),
  }),
});

/**
 * Dialogue collection schema — unchanged from your version
 */
const dialogue = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    characters: z.array(reference("characters")),
    context: z.string().optional(),
    emotion: z.string().optional(),
    subtext: z.string().optional(),
    tags: z.array(z.string()).default([]),
    scene_reference: reference("scenes").optional(),
    created: z.date(),
  }),
});

/**
 * Research collection schema — unchanged from your version
 */
const research = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.union([
      z.enum([
        "historical_events",
        "character_research",
        "location_research",
        "period_details",
        "music_industry_1960s",
        "royal_family_protocols",
        "political_context",
        "technical_details",
        "inspiration",
        "reference_material",
        "discography_and_lyrics",
      ]),
      z.array(z.enum([
        "historical_events",
        "character_research",
        "location_research",
        "period_details",
        "music_industry_1960s",
        "royal_family_protocols",
        "political_context",
        "technical_details",
        "inspiration",
        "reference_material",
        "discography_and_lyrics",
      ]))
    ]).optional(),
    date_range: z.string().optional(),
    source: z.string().optional(),
    reliability: z.enum([
      "verified",
      "likely",
      "speculative",
      "creative_liberty",
      "mixed",
    ]).optional(),
    relevance: z.string().optional(),
    tags: z.array(z.string()).default([]),
    release_date: z.string().optional(),
    created: z.date(),
  }),
});

/**
 * Themes collection schema — unchanged from your version
 */
const themes = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    how_explored: z.string(),
    character_connections: z.array(reference("characters")).default([]),
    scene_references: z.array(reference("scenes")).default([]),
    symbols: z.array(z.string()).default([]),
    created: z.date(),
  }),
});

/**
 * Historical timeline collection schema — unchanged from your version
 */
const timeline = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    event_type: z.enum([
      "historical_fact",
      "creative_interpretation",
      "fictional_event",
    ]),
    description: z.string(),
    characters_involved: z.array(reference("characters")).default([]),
    sources: z.array(z.string()).default([]),
    scene_reference: reference("scenes").optional(),
    importance: z.enum(["critical", "important", "background"]),
    created: z.date(),
  }),
});

export const collections = {
  characters,
  scenes,
  episodes,
  beats,
  threads,       // new
  locations,
  dialogue,
  research,
  themes,
  timeline,
};