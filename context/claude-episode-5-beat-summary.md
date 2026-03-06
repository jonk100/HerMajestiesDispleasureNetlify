# Episode 5 — Beat Summary

```yaml
episode: 5
total_beats: 21

beat_function_counts:
  primary:
    revelation: 4
    irony: 4
    escalation: 4
    reversal: 3
    payoff: 2
    elegy: 1
    comedy: 1
    decision: 1
    departure: 1

pressure_curve:
  - ep5_sc42_b01:   6   # The festering wound
  - ep5_sc42_b02:   7   # You always been boss
  - ep5_sc42_b03:   8   # I've been so frightened
  - ep5_sc42_b04:   8   # Treating him like a mongrel
  - ep5_sc43_b01:   4   # George brings Billy
  - ep5_sc43_b02:   4   # You're in the group
  - ep5_sc44_b01:   3   # Sweet Loretta Fart
  - ep5_sc44_b02:   5   # The perfect take
  - ep5_sc45_b01:   5   # There's no payoff
  - ep5_sc45_b02:   5   # What if we went up to the roof
  - ep5_sc39m_b01:  2   # One tooth at a time
  - ep5_sc46_b01:   6   # Sir Paul
  - ep5_sc46_b02:   7   # Klaus, the German
  - ep5_sc47_b01:   7   # St. Paul's sermon
  - ep5_sc47_b02:   10  # I'm leaving the group
  - ep5_sc48_b01:   3   # Next
  - ep5_sc49_b01:   7   # That's that I suppose
  - ep5_sc49_b02:   8   # He's more dangerous now
  - ep5_sc50_b01:   9   # A final one
  - ep5_sc51_b01:   8   # Permanently retired
  - ep5_sc51_b02:   9   # This is assassination

threads_closed_this_episode:
  - john_paul_dynamic         # CLOSES in ep5_sc47_b02
  - operation_minuet          # CLOSES in ep5_sc50_b01
  - philip_obsession          # CLOSES in ep5_sc50_b01
  - business_card             # CLOSES in ep5_sc46_b02
  - george_harrison_exit      # CLOSES in ep5_sc42_b01

threads_opening_this_episode:
  - operation_elegy           # OPENS in ep5_sc50_b01

threads_in_crisis:
  - nigel_conscience          # CRISIS in ep5_sc51_b02
  - cynthia_arc               # STRUCTURALLY_OVERDUE

episode_grade: "A-"
grade_note: >
  Episode 5 is the series' most structurally complex episode
  and its most contested. The cafeteria conversation (sc42) is 
  the series' finest scene. The tonal shift to assassination 
  thriller (sc49-51) is structurally ambitious and partially 
  successful. The episode works in three distinct registers — 
  political elegy, comic recovery, and assassination thriller. 
  The transition between the second and third is the series' 
  most difficult structural problem, but 'Brenda' (sc48) 
  serves as an effective tonal hinge. Three beats require revision.
```

---

## Thread Closure Audit — Full Series

```yaml
threads_closed_cleanly:
  - john_paul_dynamic       # Excellent - "It was fun while it lasted"
  - operation_minuet        # Excellent - "Operation Minuet is terminated"
  - philip_obsession        # Good - escalates into Operation Elegy
  - george_harrison_exit    # Good - retrospective closure in sc42

threads_closed_with_weakness:
  - business_card           # Plant was underplayed in Ep3
    issue: "The Klaus/Yoko business card from Episode 3 sc36 is collected here as the seed of Paul's paranoid flashback. The closure is present but the plant in Episode 3 was underplayed, making Paul's flashback require the audience to remember a detail that was easy to miss."

threads_opened_for_finale:
  - operation_elegy         # Opens in sc50, primary thread for Episode 6
    requirements: "Must resolve as: (1) comic in execution, (2) moral in weight, (3) historically honest"

threads_needing_attention:
  - nigel_conscience        # CRISIS - requires action in Episode 6
    status: "Reached crisis point in sc51. Episode 6 must provide the action: Nigel's sabotage of Operation Elegy."
  - cynthia_arc            # STRUCTURALLY_OVERDUE
    status: "Three episodes have elapsed since the wardrobe scene. Episode 6 is the final opportunity."
```
