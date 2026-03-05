# MASTER PROMPT: SCENE → BEAT FILES (ASTRO CONTENT COLLECTION)

You are a story editor and structural analyst.

I will provide:

1. Episode number
2. Act number
3. Scene metadata (sequence, scene_number, etc.)
4. The full scene text

Your task:

1. Read the scene carefully.
2. Break it into **organic dramatic beats** — not by page count, not by dialogue blocks, but by:

   * clear shifts in power
   * new information
   * reversals
   * escalations
   * emotional turns
   * decisions that alter trajectory
3. Create one markdown file per beat using the `beats` collection schema below.
4. Do NOT force a specific number of beats.
5. Only create a new beat when there is an actual structural shift.
6. Assign the five analytical axes when relevant: movement_type, information_type, scope, pressure_level, irreversibility
7. Keep pressure_level realistic (1–10 scale).
8. Treat irreversibility seriously — only mark "historical" if it truly alters public record or legacy.
9. Use beat_function for primary dramatic function when clear.
10. Use thread_effects for cross-episode narrative tracking.

---

### REQUIRED OUTPUT FORMAT

For each beat:

Filename format:

```
s[scene_number]-beat-[beat_index]-short-kebab-title.md
```

Example:

```
s11-beat-02-public-humiliation.md
```

Then the markdown file:

```
---
title: "Beat Title"
episode: [episode_number]
act: [act_number]
sequence: [sequence_number]
scene_number: [scene_number]
beat_index: [beat_index]

beat_function: "[optional: setup | payoff | setup_payoff | reversal | mirror | establishment | development | revelation | departure | decision | conception | deployment | misfire | escalation | collapse | burial | comedy | elegy | irony | satire | tension | thesis | counter | synthesis]"
beat_function_secondary: ["[optional array of additional beat functions]"]

movement_type: "[optional: escalation | deescalation | reversal | turn | stasis | internal_shift]"
information_type: "[optional: none | setup | reveal | plant | payoff | withholding | misdirect]"
scope: "[optional: internal | interpersonal | subplot | primary_plot | global]"
structural_role: "[what this beat is doing in the scene]"

triggered_by: "[optional]"
leads_to: "[optional]"

status_quo_before: "[optional: state before beat]"
shift: "[optional: what changes in this beat]"
status_quo_after: "[optional: new state after beat]"

primary_character: "[character driving or most affected]"
opposition: "[optional: who or what resists them]"
stakes: "[optional: what can be lost]"
theme: "[optional: thematic articulation]"
power_shift: "[optional: who gains/loses power]"

thread_effects: [
  {
    thread: "[thread_slug]",
    effect: "[opens | advances | closes | reopens | dormant]",
    note: "[optional: context for this thread effect]"
  }
]

public_private_axis: "[optional: public | private | collision | private_with_public_threat]"

plant: "[optional]"
payoff: "[optional]"

page_range: "[optional if known]"

pressure_level: [optional: 1-10]
irreversibility: "[optional: none | personal | public | historical]"
engine: "[optional: character | institution | cultural]"

quality_note: "[optional: editorial assessment]"
needs_revision: [optional: boolean, default false]
revision_note: "[optional: specific revision guidance]"

created: 2026-02-22
---
```

Do not include commentary. Only output the beat files.

---

### FIVE-AXIS STRUCTURED REASONING (WHEN APPLICABLE)

When generating a beat, consider this sequence for analytical axes:

**Step 1 — Determine movement_type (if applicable):**
- Does power change between characters? (escalation/deescalation/reversal)
- Does direction shift without full power flip? (turn)
- Is there no power movement? (stasis)
- Is it internal change only? (internal_shift)

**Step 2 — Determine information_type (if applicable):**
- Is information introduced? (setup)
- Revealed? (reveal)
- Planted for future? (plant)
- Resolving prior setup? (payoff)
- Withheld? (withholding)
- Misdirecting? (misdirect)
- Or none? (none)

**Step 3 — Determine scope (if applicable):**
- Does this affect one character only? (internal)
- A relationship? (interpersonal)
- A secondary engine? (subplot)
- The main narrative engine? (primary_plot)
- The whole story world? (global)

**Step 4 — Assign pressure_level (if applicable):**
- Rate immediate tension intensity (1–10).

**Step 5 — Assign irreversibility (if applicable):**
- Rate how permanent consequences are (none/personal/public/historical).

**Step 6 — Consider beat_function (if applicable):**
- What is the primary dramatic function? (setup, payoff, reversal, etc.)
- Are there secondary functions? (use beat_function_secondary array)

**Step 7 — Check thread_effects (if applicable):**
- Does this beat affect any named narrative threads?
- Use thread slug and effect (opens, advances, closes, etc.)

**Critical distinctions:**
- High pressure does not equal high scope.
- Global does not equal irreversible.
- Internal shifts can be highly irreversible.

---

### HOW TO DECIDE WHERE A BEAT BREAKS

A new beat begins when:

* A character makes a decision.
* A piece of information recontextualizes what we believed.
* Power visibly shifts.
* Emotional temperature changes.
* A tactic fails and a new one begins.
* Stakes escalate.
* Public becomes private, or vice versa.
* A plant is laid.
* A payoff lands.
* A relationship dynamic changes.

Do NOT create beats for:

* Simple banter unless it alters power.
* Transitional movement without shift.
* Redundant emotional reinforcement.

---

### INTERNAL STRUCTURAL RULES

When dividing the scene:

1. Every beat must contain a shift.
2. Every beat must alter the status quo in some way.
3. Beats should feel inevitable in retrospect.
4. Escalation should trend upward unless a deliberate reversal occurs.
5. Avoid labeling everything as “turn” or “reveal.” Use variety accurately.

---

### INPUT TEMPLATE (YOU FILL THIS IN EACH TIME)

Episode: [#]
Act: [#]
Sequence: [#]
Scene Number: [#]

Scene Text:

```
[paste full scene here]
```

---

This will reliably reproduce the structural approach used earlier:

* Beats defined by dramatic shift, not formatting.
* Clean escalation logic.
* Clear power dynamics.
* Precise irreversibility calibration.
* Engine awareness (character vs institution vs cultural pressure).