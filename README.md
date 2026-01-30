README.md

# Her Majesty’s Displeasure

A personal screenplay repository and writer’s dashboard built with Astro content collections. Content is authored in Markdown and rendered via MDX/remark tooling. Use src/content/ to store characters, scenes, beats, locations, dialogue, research, themes, and timeline entries.

Quick links
- Content schema: src/content.config.ts
- Scenes: src/content/scenes/
- Characters: src/content/characters/
- Locations: src/content/locations/
- Dev / build scripts: package.json (npm run dev / build)
- Netlify config: netlify.toml

1. Purpose
- Single source of truth for screenplay material (modular Markdown content + optional static site).
- Organize story artifacts (characters, scenes, beats, research, locations) so you can generate pages or a writing dashboard.

2. Project layout (what matters)
- src/content.config.ts — Astro content collections and schemas (characters, scenes, beats, locations, dialogue, research, themes, timeline).
- src/content/<collection>/ — Markdown files for each collection.
- public/ — static assets
- package.json — scripts: dev, build, preview
- netlify.toml — Netlify deploy settings

3. How content is stored
- Each entry is a Markdown file with YAML frontmatter matching the collection schema in src/content.config.ts.
- Dates should be ISO strings (e.g., "2026-01-30") to satisfy z.date() parsing.
- References between entries use consistent slugs. Depending on your Astro setup references can be the slug (e.g., "john-lennon") or a collection-relative path (e.g., "band/john-lennon"). Keep usage consistent.

4. Core collections (brief)
- characters: name, dialogue_name(s), role, character_type, age (act_1/2/3), occupation, description, first_appearance, last_appearance, created, updated.
- scenes: title, act (1-3), sequence, scene_number, scene_type, location (reference or array), time_of_day (single or array), characters (array of references), purpose, conflict, emotional_beat, page_count, status, notes, created, updated.
- beats, locations, dialogue, research, themes, timeline — see src/content.config.ts for exact fields and validation.

5. Writing content — practical rules
- File locations: src/content/<collection>/<slug>.md
- Slugs: use lowercase, hyphen-separated names (e.g., john-lennon.md, pre-ceremony-nerves.md).
- Frontmatter must include fields required by the schema (missing required fields will fail validation).
- For reference fields (reference("scenes") etc.), make sure the referenced slug exists.
- Prefer lightweight organization (subfolders OK, but update your references accordingly).

6. Example files
Save these examples under the indicated paths.

Character (src/content/characters/john-lennon.md)
---
name: "John Lennon"
dialogue_name: "JOHN"
character_type: "historical_figure"
role: "protagonist"
age:
  act_1: 25
  act_2: 29
  act_3: 30
occupation: "Musician, songwriter, peace activist"
description: "The brilliant, rebellious Beatle whose irreverent 'killing people' quip at the 1965 MBE ceremony triggers Prince Philip's five-year vendetta, culminating in John's medal return and a failed assassination attempt."
first_appearance: "act1-chapter01-mbe-ceremony"
last_appearance: "act3-epilogue-falklands"
created: "2025-01-15"
---

# John Lennon
(Full character profile — motivations, arc, relationships, timeline notes, voice, costume, scene-specific notes.)

Scene (src/content/scenes/pre-ceremony-nerves.md)
---
title: "Pre-Ceremony Nerves"
act: 1
sequence: 1
scene_number: 1
location: "buckingham-palace-bathroom"
time_of_day: "day"
characters:
  - "band/john-lennon"
  - "band/paul-mccartney"
  - "band/george-harrison"
  - "band/ringo-starr"
purpose: "Establish The Beatles' irreverent character and nervous energy before the ceremony..."
conflict: "Tension between their working-class origins and the formal royal setting."
emotional_beat: "Nervous excitement mixed with rebellious humor."
page_count: 1.5
status: "draft"
notes: "Focus on the absurdity of smoking cannabis in the Queen's bathroom..."
created: "2025-07-25"
---

s-INT. BUCKINGHAM PALACE - PRIVATE BATHROOM - DAY (OCTOBER 26, 1965)
a-An ornate bathroom with marble fixtures and gilded mirrors. ...
c-JOHN
d-Right then. Last chance to calm the nerves before we meet Her Majesty.
...

Location (src/content/locations/abbey-road-studios-lounge.md)
---
name: "Abbey Road Studios Lounge"
type: "interior"
description: "The comfortable common area within Abbey Road Studios..."
mood: "Tense familiarity, creative exhaustion, underlying conflict"
visual_notes: "Worn leather furniture, scattered tea cups, ashtrays..."
practical_notes: "Tea service is crucial for Clive's failed poisoning attempt."
scenes_used: []
reference_images: []
created: "2025-07-27"
---

# Abbey Road Studios Lounge
(Visual description, atmosphere, symbolic function, set dressing notes.)

7. Screenplay shorthand: remark-screenplay
This repo includes a remark plugin that converts compact screenplay shorthand into MDX JSX flow elements. Use the shorthand in scene files (src/content/scenes/) to author screenplay text easily.

- What it does:
  - Transforms prefixed paragraph lines into MDX flow elements: Scene, Action, Character, Dialogue, Parenthetical, Transition, ActBreak.
  - Groups Character → Parenthetical → Dialogue lines into dialogue blocks.
  - Supports implicit parsing for files in src/content/scenes/ (uppercase character names, INT/EXT headings, parenthetical detection).

- Supported prefixes:
  - s- or scene-  → Scene
  - a- or action- → Action
  - c- or character- → Character (starts dialogue)
  - d- or dialogue- → Dialogue
  - p- or parenthetical- → Parenthetical
  - t- or transition- → Transition
  - ab- or act-break- → ActBreak

- Implicit parsing (enabled for files under src/content/scenes/):
  - Uppercase line (e.g., JOHN) → Character
  - Line starting with INT / EXT / INT./EXT. → Scene heading
  - Parenthetical lines like "(whispering)" → Parenthetical (inside dialogue)
  - The plugin warns if you use Parenthetical or Dialogue without a Character.

- Inline caps marker:
  - Use //Name to force inline uppercase in Action/Dialogue: "He meets //John Doe" → "He meets JOHN DOE".
  - // is only recognized at start or after whitespace to avoid matching URLs.

- Output:
  - The plugin emits mdxJsxFlowElement nodes; your MDX/site must provide components named: Scene, Action, Character, Dialogue, Parenthetical, Transition, ActBreak (or map these during render).

- Practical tips:
  - Keep scene files in src/content/scenes/ to get implicit parsing.
  - Use blank lines to flush dialogue blocks.
  - You can write compact runs on one line: c- JOHN d- Right then. Last chance...
  - The plugin reconstructs original paragraph text where possible for accurate parsing.

8. Build & preview
- Install dependencies (pnpm or npm) — repo uses pnpm-lock.yaml but package.json scripts are compatible:
  - npm install
  - npm run dev — local dev server (astro dev)
  - npm run build — build site (astro build)
  - npm run preview — server preview (astro preview)

9. Deployment (Netlify)
- netlify.toml exists. Default Astro + Netlify adapter is in package.json.
- Set Netlify build command to: npm run build (or pnpm build) and publish directory to the default Astro output (usually dist/).
- Connect repository to Netlify and enable branch auto-deploys.

10. Workflow & versioning suggestions
- Keep full screenplay drafts (single-file) in scripts/ or drafts/ if you prefer linear source; keep scene modularity in src/content/scenes/ for the dashboard.
- Use branches for large rewrites (feat/act-2-rewrite).
- Tag major draft releases (v0.1, v1.0) and attach exported PDFs to releases for sharing.

11. Privacy & licensing
- This repo is configured as a personal project. Default: All rights reserved.
- If you want a license (MIT, CC BY-NC, etc.), tell me which and I’ll add it.
