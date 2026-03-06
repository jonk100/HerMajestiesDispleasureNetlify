# Episode 3 — Beat Summary

```yaml
episode: 3
total_beats: 26

beat_function_counts:
  primary:
    reversal: 5
    establishment: 4
    confrontation: 3
    departure: 3
    escalation: 3
    revelation: 2
    payoff: 2
    decision: 1
    elegy: 1
    crisis: 1
    setup: 1

pressure_curve:
  - ep3_sc31_b01:    4   # Quite
  - ep3_sc31p1_b01:  6   # The Jesus controversy
  - ep3_sc32_b01:    3   # George and Ravi
  - ep3_sc32p1_b01:   5   # What have I built?
  - ep3_sc33_b01:    7   # The press conference
  - ep3_sc33p1_b01:   8   # We're more popular than Jesus
  - ep3_sc33p2_b01:   6   # The apology
  - ep3_sc34_b01:     10  # Brian's death
  - ep3_sc34p1_b01:    8   # The pills
  - ep3_sc35_b01:     5   # Apple Corps meeting
  - ep3_sc35p1_b01:    4   # Cynthia's evidence
  - ep3_sc35p2_b01:    3   # The wardrobe scene
  - ep3_sc36_b01:     6   # Indica Gallery
  - ep3_sc36_b02:     7   # The business card
  - ep3_sc37_b01:     2   # Ringo and the tea

threads_closed_this_episode:
  - brian_obsolescence     # CLOSES in ep3_sc34_b01
  - epstein_pills         # CLOSES in ep3_sc34p1_b01

threads_opened_this_episode:
  - apple_corps_formation # OPENS in ep3_sc35_b01
  - cynthia_arc           # OPENS in ep3_sc35p1_b01
  - business_card         # OPENS in ep3_sc36_b02

threads_requiring_attention:
  - cynthia_arc           # CRITICAL - must be collected in Episode 4
  - business_card         # MODERATE - needs targeting or explicit closure

threads_advancing_to_crisis:
  - jesus_backlash         # Escalating through press conference
  - philip_obsession      # Satisfied but seeking escalation
  - operation_minuet      # Failed deployment, seeking new methods

episode_grade: "A"
grade_note: >
  Episode 3 is the series' turning point — structurally ambitious,
  emotionally complex, and historically consequential. Five reversal
  beats in a single episode reflect its function as the pivot point.
  Brian's death, touring ends, Apple Corps forms, the operation
  escalates, Cynthia decides. The compression is correct — the episode
  handles the most consequential material with restraint. The Cynthia
  wardrobe scene is the series' most disciplined sequence and creates
  a structural promise that must be kept. Ringo's tea scene provides
  the series' clearest thesis statement about institutional immunity.
```

---

## Thread Closure Audit — Full Series

```yaml
threads_closed_cleanly:
  - brian_obsolescence    # Excellent - closes with Brian's death
  - epstein_pills        # Excellent - closes without being named

threads_with_structural_debt:
  - cynthia_arc         # CRITICAL - 2 beats opened, must be collected
    issue: "The wardrobe scene is the episode's most disciplined sequence. If this thread is not collected in Episode 4 it becomes the series' defining structural failure."
  - business_card       # MODERATE - planted but unresolved
    issue: "The Klaus business card given to Yoko is a planted thread for Paul's paranoia. Needs either specific traceable detail or explicit targeting for collection in Episode 5."

threads_ready_for_crisis:
  - jesus_backlash      # Escalating through press conference
    status: "The manufactured reaction has become real. The band experiencing consequences creates the next escalation point."
  - philip_obsession   # Satisfied but seeking escalation
    status: "Philip's satisfaction at the backlash creates the need for the next institutional challenge. The escalation mandate from Episode 2 is still active."
  - operation_minuet    # Failed deployment, seeking new methods
    status: "The tea deployment failed. The operation needs new methodologies. Episode 4 should show this crisis of purpose."

threads_in_good_health:
  - ringo_immunity      # Perfectly maintained - tea scene proves thesis
  - queens_wisdom        # Dormant since Episode 1 - correct gap maintained
  - percy_equipment     # Correctly dormant for Episode 6 payoff
```
