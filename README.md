# Her Majesty's Displeasure - Screenplay Analytics Dashboard

A comprehensive analytics dashboard for screenplay data, built with Astro, TypeScript, and Alpine.js.

## 🚀 Features

- ✅ Character statistics with act/episode breakdowns
- ✅ Location statistics with act/episode breakdowns  
- ✅ Collapsible interface for progressive disclosure
- ✅ Episode mapping and scene analysis
- ✅ Responsive design with smooth transitions
- ✅ Reusable components following DRY principles

## 🏗️ Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── CollapsibleSection.astro    # Reusable collapsible section component
│   │   ├── CharacterStats.astro       # Character-specific statistics component
│   │   └── LocationStats.astro        # Location-specific statistics component
│   ├── content/
│   │   ├── characters/               # Character content collection
│   │   ├── episodes/                 # Episode content collection  
│   │   ├── locations/                # Location content collection
│   │   └── scenes/                   # Scene content collection
│   ├── pages/
│   │   ├── stats/                   # Statistics overview pages
│   │   ├── characters/[...slug].astro # Character detail pages
│   │   └── locations/[slug].astro   # Location detail pages
│   └── utils/
│       ├── characterStats.ts          # Character statistics calculations
│       ├── locationStats.ts           # Location statistics calculations
│       ├── episodeMapping.ts          # Shared episode-to-scene mapping
│       └── statsInterfaces.ts        # TypeScript interfaces for stats
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🧩 Reusable Components & Functions

### CollapsibleSection.astro
A reusable component for creating collapsible sections with consistent styling and behavior.

**Target Audience:** Developers learning component composition in Astro

**Key Features:**
- Configurable heading level (h2, h3, h4)
- Alpine.js integration for smooth transitions
- Consistent styling across all collapsible sections
- TypeScript interfaces for type safety

**Usage:**
```astro
<CollapsibleSection 
  title="Section Title" 
  headingLevel="h3"
  alpineState="expandedSection"
>
  <!-- Content goes here -->
</CollapsibleSection>
```

### Episode Mapping Utilities
Shared functions for mapping scenes to episodes across character and location statistics.

**Target Audience:** Developers learning utility function design and DRY principles

**Key Functions:**
- `createSceneToEpisodeMap()` - Creates reusable scene-to-episode mapping
- Used by both character and location statistics
- Eliminates code duplication between stat types

**Implementation:**
```typescript
// src/utils/episodeMapping.ts
export async function createSceneToEpisodeMap(): Promise<Map<string, number>> {
  const episodes = await getCollection("episodes");
  const sceneToEpisodeMap = new Map<string, number>();
  
  for (const episode of episodes) {
    for (const sceneRef of episode.data.scenes) {
      const sceneSlug = typeof sceneRef === 'string' ? sceneRef : sceneRef.id;
      sceneToEpisodeMap.set(sceneSlug, episode.data.episode_number);
    }
  }

  return sceneToEpisodeMap;
}
```

### Statistics Components
Modular components for character and location analytics.

**Target Audience:** Developers learning modular component architecture

**CharacterStats.astro Features:**
- Performance statistics (total lines, scenes, first/last appearance)
- Collapsible act and episode breakdowns
- Scene detail lists with line counts
- Alpine.js state management for nested collapsibles

**LocationStats.astro Features:**
- Performance statistics (total scenes, first/last appearance)  
- Collapsible act and episode breakdowns
- Scene detail lists
- Consistent styling with character stats

## 🎯 DRY Principles Implementation

### Shared Interfaces
- `CharacterEpisodeStats` and `LocationEpisodeStats` in `statsInterfaces.ts`
- Consistent data structures across stat types
- Type safety for all statistics operations

### Shared Utilities
- Episode mapping centralized in `episodeMapping.ts`
- Reused by both character and location calculations
- Single source of truth for scene-to-episode relationships

### Component Composition
- `CollapsibleSection.astro` used across all statistics pages
- Consistent behavior and styling
- Reduced code duplication in UI components

### State Management Patterns
- Alpine.js hierarchical state (section → act/episode → scenes)
- Consistent transition effects
- Progressive disclosure UX patterns

## 🚀 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

This project demonstrates advanced Astro patterns including:
- Content collections with type safety
- Alpine.js integration for reactive UI
- Component composition and reusability
- TypeScript interfaces and utility functions
- Responsive design with CSS custom properties

Check out [Astro's documentation](https://docs.astro.build) or join our [Discord server](https://astro.build/chat).
