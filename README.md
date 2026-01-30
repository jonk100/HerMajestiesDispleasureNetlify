# Her Majesty’s Displeasure

An Astro-based screenplay writing and story-organization system.

This project treats a screenplay as **structured content**, not a single monolithic document. Acts, scenes, characters, dialogue, themes, and research live as first-class entities, connected through Astro pages, content collections, and screenplay-specific components.

The result is a project that is:
- Easy to navigate
- Easy to restructure
- Easy to reason about months later

---

## Core Idea

Instead of writing a screenplay in one file, the screenplay is broken into:

- **Content** (MD / MDX files in `src/content/`)
- **Structure** (routes in `src/pages/`)
- **Presentation** (screenplay components + CSS)

Astro is used because it is static-first, explicit, and imposes very little magic.

---

## High-Level Structure

    src/
    ├── pages/              # Routes and narrative views
    ├── components/         # Reusable UI + screenplay elements
    ├── layout/             # Global layout and navigation
    ├── content/            # Story content (scenes, characters, research, etc.)
    ├── styles/             # Global and screenplay-specific styles
    └── content.config.ts   # Astro content collections config

    context/                # Non-runtime writing context
    ├── Premise, outline, rules, historical notes
    ├── Character maps and planning JSON
    └── Screenwriting reference material

---

## Pages (`src/pages/`)

Pages define **how the story is explored**, not how it is written.

    pages/
    ├── index.astro
    ├── characters/
    │   └── index.astro
    ├── dialogue/
    │   ├── index.astro
    │   └── _slug_.astro
    ├── locations/
    │   └── index.astro
    ├── themes/
    │   ├── index.astro
    │   └── _slug_.astro
    ├── scenes/
    │   └── [...slug].astro
    ├── research/
    │   └── [...slug].astro
    ├── acts/
    │   └── [act].astro
    ├── sequences/
    │   └── _sequence_.astro
    └── stats/
        └── character-stats.astro

### Page Philosophy

- Pages are **views over content**
- Most pages are driven by content collections
- Dynamic routes mirror story structure

Examples:
- `/scenes/act-1/s2-ceremony`
- `/themes/power`
- `/characters/phillip`

---

## Content (`src/content/`)

This is where the actual writing lives.

    content/
    ├── scenes/
    │   ├── act-1/
    │   │   ├── s1-bathroom.mdx
    │   │   ├── s2-ceremony.mdx
    │   │   ├── s3-post-ceremony.mdx
    │   │   └── ...
    ├── characters/
    ├── dialogue/
    ├── locations/
    ├── themes/
    ├── beats/
    ├── research/
    └── timeline/

Each folder represents a **story dimension**, not a formatting concern.

Scenes are written in MDX and rendered using screenplay components.

---

## Screenplay Components (`src/components/screenplay/`)

Each component maps directly to a screenplay concept.

    components/screenplay/
    ├── Screenplay.astro
    ├── Scene.astro
    ├── Action.astro
    ├── Character.astro
    ├── Dialogue.astro
    ├── Parenthetical.astro
    ├── Transition.astro
    └── ActBreak.astro

### Design Rules

- One component = one screenplay idea
- No formatting logic in pages
- CSS handles margins, indentation, spacing
- Components remain dumb and predictable

---

## Other Components

    components/
    ├── CharacterFilter.astro
    └── SceneNav.astro

These support navigation and exploration rather than writing itself.

---

## Layout (`src/layout/`)

    layout/
    ├── Layout.astro
    ├── NavigationHeader.astro
    ├── Footer.astro
    └── collections/
        └── ResearchLayout.astro

Layouts provide consistent framing without interfering with screenplay formatting.

---

## Styling (`src/styles/`)

    styles/
    ├── screenplay.css
    └── markdown.css

- `screenplay.css` controls screenplay formatting rules  
- `markdown.css` styles non-screenplay content  

All visual changes should happen here, not in components.

---

## Content Configuration

    content.config.ts

Defines Astro content collections for scenes, characters, research, themes, and dialogue.

This file is the backbone that connects content to pages.

---

## Context Folder (`/context`)

The `context/` directory is **not part of the Astro build**.

    context/
    ├── 01-Premise.md
    ├── 03-CharacterMap.json
    ├── 04-HistoricalContext.md
    ├── 05-Outline.md
    └── screenwriting/
        └── 1-rules.md

This is where:
- Story intent lives
- Rules are written down
- Big-picture thinking happens

Nothing here is optimized for rendering. It is optimized for thinking.

---

## What This Is (and Isn’t)

This is:
- A writing tool
- A thinking tool
- A structure-first screenplay system

This is not:
- A Final Draft replacement
- A WYSIWYG editor
- A collaborative SaaS app

---

## Guiding Principle

If you return to this project in a year and can still understand:
- What the story is
- Where each scene belongs
- Why choices were made

Then the structure worked.

---

## License

MIT (or your preferred license)
