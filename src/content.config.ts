// src/content.config.ts
import { defineCollection, z, reference } from "astro:content";

/**
 * Character collection schema
 */
const characters = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    dialogue_name: z.union([z.string(), z.array(z.string())]).optional(),
    role: z.enum(["protagonist", "antagonist", "supporting", "minor"]),
    character_type: z.enum(["historical_figure", "fictional", "composite"]),
    age: z
      .object({
        act_1: z.number().optional(),
        act_2: z.number().optional(),
        act_3: z.number().optional(),
      })
      .optional(),
    occupation: z.string().optional(),
    description: z.string(),
    // Link to a scene entry
    first_appearance: reference("scenes").optional(),
    last_appearance: reference("scenes").optional(),
    created: z.date(),
    updated: z.date().optional(),
  }),
});

/**
 * Scenes collection schema
 */
const scenes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    act: z.number().min(1).max(3),
    sequence: z.number(),
    // Scene number can be a single number or have 1 decimal place
    scene_number: z.number().min(0).max(99.9),
    scene_type: z
      .enum(["standard", "montage", "intercut", "composite"])
      .default("standard"),
    // Allow either single location reference or array of location references
    location: z.union([
      reference("locations"),
      z.array(reference("locations")),
    ]),
    // Allow either single time of day or array of times of day
    time_of_day: z.union([
      z.enum(["morning", "day", "evening", "night", "continuous"]),
      z.array(z.enum(["morning", "day", "evening", "night", "continuous"])),
    ]),
    // Link to character entries
    characters: z.array(reference("characters")),
    purpose: z.string().optional(),
    conflict: z.string().optional(),
    emotional_beat: z.string().optional(),
    page_count: z.number().optional(),
    status: z
      .enum(["outline", "draft", "revision", "final"])
      .default("outline"),
    notes: z.string().optional(),
    created: z.date(),
    updated: z.date().optional(),
  }),
});

/**
 * Story beats collection schema
 */
const beats = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    act: z.number().min(1).max(3),
    beat_type: z.enum([
      "inciting_incident",
      "plot_point_1",
      "midpoint",
      "plot_point_2",
      "climax",
      "resolution",
      "conspiracy_revelation",
      "escalation",
      "betrayal",
      "cover_up",
      "character_moment",
      "setup",
      "payoff",
    ]),
    page_target: z.number().optional(),
    description: z.string(),
    // Link to character entries
    characters_involved: z.array(reference("characters")),
    themes: z.array(z.string()).default([]),
    notes: z.string().optional(),
    created: z.date(),
  }),
});

/**
 * Locations collection schema
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
    // Link to scene entries
    scenes_used: z.array(reference("scenes")).default([]),
    reference_images: z.array(z.string()).default([]),
    created: z.date(),
  }),
});

/**
 * Dialogue collection schema
 */
const dialogue = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    // Link to character entries
    characters: z.array(reference("characters")),
    context: z.string().optional(),
    emotion: z.string().optional(),
    subtext: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // Link to a scene entry
    scene_reference: reference("scenes").optional(),
    created: z.date(),
  }),
});

/**
 * Research collection schema
 */
const research = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.enum([
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
    created: z.date(),
  }),
});

/**
 * Themes collection schema
 */
const themes = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    how_explored: z.string(),
    // Link to character entries
    character_connections: z.array(reference("characters")).default([]),
    // Link to scene entries
    scene_references: z.array(reference("scenes")).default([]),
    symbols: z.array(z.string()).default([]),
    created: z.date(),
  }),
});

/**
 * Historical timeline collection schema
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
    // Link to character entries
    characters_involved: z.array(reference("characters")).default([]),
    sources: z.array(z.string()).default([]),
    // Link to a scene entry
    scene_reference: reference("scenes").optional(),
    importance: z.enum(["critical", "important", "background"]),
    created: z.date(),
  }),
});

export const collections = {
  characters,
  scenes,
  beats,
  locations,
  dialogue,
  research,
  themes,
  timeline,
};
