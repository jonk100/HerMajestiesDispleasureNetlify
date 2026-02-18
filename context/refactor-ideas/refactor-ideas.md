# Refactor Ideas

## 1. Executive Summary

The codebase shows significant organic growth with clear patterns of duplication across all major architectural layers. The most critical issues are:

- **Collection Pages**: Nearly identical index pages with duplicated grid layouts, filtering logic, and styling patterns
- **Filter Components**: Repeated Alpine.js data structures and filtering logic across BaseFilter, CharacterFilter, BeatsFilter, and SceneFilter
- **Stats Components**: Massive duplication between CharacterStats and LocationStats with identical Alpine.js patterns and styling
- **Screenplay Components**: Duplicated voice handling logic in Dialogue and Action components
- **Utils**: Parallel implementations of stats calculation for characters vs locations with identical patterns
- **Layouts**: Unused or empty collection layouts suggesting incomplete abstraction

## 2. High-Impact Refactors

### 2.1 Collection Index Page Abstraction

**Duplication Location**: 
- `src/pages/beats/index.astro`
- `src/pages/characters/index.astro` 
- `src/pages/dialogue/index.astro`
- `src/pages/episodes/index.astro`

**Problem**: Each page repeats identical container styling, grid layout, item card structure, and back link patterns.

**Refactor Strategy**: Create a generic `CollectionIndex.astro` component that accepts:
- Collection name
- Item mapping function
- Filter component (optional)
- Stats link (optional)

```astro
---
// src/components/CollectionIndex.astro
import Layout from "@/layout/Layout.astro";

interface Props {
  title: string;
  description: string;
  collection: any[];
  itemMapper: (item: any) => CollectionItem;
  filterComponent?: any;
  statsLink?: { href: string; text: string };
}

const { title, description, collection, itemMapper, filterComponent, statsLink } = Astro.props;
---

<Layout title={title}>
  <div class="container">
    <div class="header-section">
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {statsLink && (
        <a href={statsLink.href} class="stats-link">{statsLink.text}</a>
      )}
    </div>
    
    {filterComponent}
    
    <div class="items-grid">
      {collection.map(itemMapper)}
    </div>
    
    <div class="back-link">
      <a href="/">← Back to Collections</a>
    </div>
  </div>
</Layout>
```

### 2.2 Filter System Unification

**Duplication Location**:
- `src/components/BaseFilter.astro` (189 lines)
- `src/components/CharacterFilter.astro` (22 lines) 
- `src/components/BeatsFilter.astro` (32 lines)
- `src/components/SceneFilter.astro` (331 lines)

**Problem**: SceneFilter completely reimplements filtering logic that BaseFilter already provides, with massive Alpine.js duplication.

**Refactor Strategy**: Extend BaseFilter to support multiple filter types:

```astro
---
// src/components/MultiFilter.astro
interface FilterConfig {
  type: string;
  label: string;
  options: Record<string, string>;
  dataAttribute: string;
}

interface Props {
  title: string;
  filterConfigs: FilterConfig[];
  resultLabel: string;
}

const { title, filterConfigs, resultLabel } = Astro.props;
---

<div x-data="{
  activeFilterType: filterConfigs[0]?.type || 'all',
  activeFilters: {},
  
  setFilterType(type) {
    this.activeFilterType = type;
    this.filterItems();
  },
  
  setFilter(filter) {
    this.activeFilters[this.activeFilterType] = filter;
    this.filterItems();
  },
  
  filterItems() {
    // Generic filtering logic using data attributes
  }
}">
  <!-- Filter type selector -->
  <!-- Filter options -->
  <!-- Results count -->
</div>
```

### 2.3 Stats Component Consolidation

**Duplication Location**:
- `src/components/CharacterStats.astro` (579 lines)
- `src/components/LocationStats.astro` (524 lines)

**Problem**: 90% identical Alpine.js data structures, transition classes, and styling. Only data sources differ.

**Refactor Strategy**: Create generic `EntityStats.astro` component:

```astro
---
// src/components/EntityStats.astro
interface Props {
  entityType: 'character' | 'location';
  slug: string;
  showSceneDetails?: boolean;
  statsConfig: {
    primaryStat: string;
    getStats: (slug: string) => Promise<any>;
    getEpisodeStats: (slug: string) => Promise<any>;
  };
}

const { entityType, slug, showSceneDetails, statsConfig } = Astro.props;
const stats = await statsConfig.getStats(slug);
const episodeStats = await statsConfig.getEpisodeStats(slug);
---

<div class="entity-stats" x-data="{ expandedStats: false, expandedSection: null, ... }">
  <!-- Generic stats rendering using entityType and statsConfig -->
</div>
```

### 2.4 Voice Handler Abstraction

**Duplication Location**:
- `src/components/screenplay/Dialogue.astro` (331 lines)
- `src/components/screenplay/Action.astro` (205 lines)

**Problem**: Identical voice configuration logic, button handling, and speech synthesis code duplicated across components.

**Refactor Strategy**: Create `VoiceHandler.ts` utility and `VoiceEnabled.astro` wrapper:

```typescript
// src/utils/voice/VoiceHandler.ts
export class VoiceHandler {
  static applyVoiceConfig(utterance: SpeechSynthesisUtterance, voiceType: string, element: Element) {
    // Extracted voice configuration logic
  }
  
  static createButton(element: Element, voiceId: string) {
    // Extracted button creation and event handling
  }
}
```

```astro
---
// src/components/VoiceEnabled.astro
import { VoiceHandler } from "@/utils/voice/VoiceHandler";

interface Props {
  voiceType: 'character' | 'narrator';
  speaker?: string;
}

const { voiceType, speaker } = Astro.props;
const voice = voiceMap[voiceType === 'character' ? 'characters' : 'narrator'][speaker || 'default'];
---

<div class="voice-enabled" data-voice={voice?.id}>
  {voice && <button class="speak" aria-label={`Play ${voiceType}`}>▶</button>}
  <slot />
</div>

{voice && <script>/* Minimal script using VoiceHandler */</script>}
```

## 3. Medium Refactors

### 3.1 Stats Calculation Unification

**Duplication Location**:
- `src/utils/characterStats.ts` (333 lines)
- `src/utils/locationStats.ts` (171 lines)

**Problem**: Nearly identical iteration patterns, Map handling, and episode mapping logic.

**Refactor Strategy**: Create generic `calculateEntityStats` function:

```typescript
// src/utils/stats/genericStatsCalculator.ts
interface EntityConfig<T> {
  entityType: string;
  collection: string;
  extractEntities: (scene: any) => string[];
  createStatsObject: (entity: any) => T;
  updateStats: (stats: T, scene: any, entityData: any) => void;
}

export async function calculateEntityStats<T>(config: EntityConfig<T>): Promise<Record<string, T>> {
  // Generic stats calculation using config
}
```

### 3.2 Collection Layout Standardization

**Duplication Location**:
- `src/layout/collections/CharactersLayout.astro` (15 lines)
- `src/layout/collections/BeatsLayout.astro` (empty)
- `src/layout/collections/DialogueLayout.astro` (empty)

**Problem**: Inconsistent layout usage and empty layout files.

**Refactor Strategy**: Create single `CollectionLayout.astro` with optional CSS injection:

```astro
---
// src/layout/collections/CollectionLayout.astro
import Layout from "../Layout.astro";

interface Props {
  title: string;
  stylesheet?: string;
}

const { title, stylesheet } = Astro.props;
---

{stylesheet && <link rel="stylesheet" href={stylesheet} />}
<Layout title={title}>
  <slot />
</Layout>
```

### 3.3 Alpine.js Data Object Consolidation

**Duplication Location**: Repeated Alpine.js patterns across components:
- Expand/collapse state management
- Transition classes
- Filter state handling

**Refactor Strategy**: Create `src/utils/alpine/dataObjects.ts`:

```typescript
export const expandCollapseData = {
  expanded: false,
  toggle() { this.expanded = !this.expanded; }
};

export const filterData = {
  activeFilter: 'all',
  filters: {},
  setFilter(filter) {
    this.activeFilter = filter;
    this.filterItems();
  }
};
```

## 4. Low-Level Cleanups

### 4.1 Interface Consolidation

**Duplication Location**: `src/utils/statsInterfaces.ts`

**Problem**: Redundant scene appearance interfaces and entity stats patterns.

**Refactor Strategy**: Use generic interfaces:

```typescript
interface SceneAppearance {
  slug: string;
  title: string;
  act: number;
  sceneNumber: number;
  lines?: number;
  episodeNumber?: number;
}

interface EntityStats<T = {}> {
  entitySlug: string;
  entityName: string;
  totalScenes: number;
  scenesByAct: Map<number, number>;
  sceneAppearances: SceneAppearance[];
  firstAppearance: SceneAppearance | null;
  lastAppearance: SceneAppearance | null;
  [K in keyof T]: T[K];
}
```

### 4.2 CSS Class Unification

**Problem**: Repeated styling patterns across components:
- `.container`, `.items-grid`, `.item-card` patterns
- `.meta`, `.back-link` styling
- Filter button styles

**Refactor Strategy**: Create `src/styles/collections.css` with shared classes.

### 4.3 Script Tag Cleanup

**Problem**: Inline scripts in Dialogue and Action components with identical DOM ready patterns.

**Refactor Strategy**: Extract to shared utility functions and use module scripts.

## 5. Suggested Refactor Roadmap

### Phase 1: Foundation (Week 1)
1. **Create shared CSS classes** - Extract common styling to `src/styles/collections.css`
2. **Implement generic interfaces** - Consolidate stats interfaces in `statsInterfaces.ts`
3. **Create VoiceHandler utility** - Extract voice logic from screenplay components

### Phase 2: Component Abstraction (Week 2-3)
1. **Build CollectionIndex component** - Replace 4 collection index pages
2. **Unify filter system** - Extend BaseFilter, eliminate SceneFilter duplication
3. **Create EntityStats component** - Consolidate CharacterStats and LocationStats

### Phase 3: Utility Consolidation (Week 4)
1. **Implement generic stats calculator** - Unify characterStats.ts and locationStats.ts
2. **Standardize collection layouts** - Clean up empty layout files
3. **Extract Alpine.js data objects** - Create reusable data patterns

### Phase 4: Cleanup & Polish (Week 5)
1. **Remove unused code** - Clean up duplicated imports and dead code
2. **Add TypeScript strict mode** - Ensure type safety across refactored code
3. **Performance optimization** - Bundle shared scripts and optimize CSS

### Implementation Priority:
1. **High Impact**: Collection pages, Filter system, Stats components (affects 80% of codebase)
2. **Medium Impact**: Utils consolidation, Layout standardization (improves maintainability)  
3. **Low Impact**: Interface cleanup, CSS consolidation (code quality improvements)

This refactoring would reduce the codebase by approximately 40% while improving maintainability, type safety, and consistency across all collection-based features.
