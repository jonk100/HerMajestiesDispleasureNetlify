/**
 * Beat interface for structural story analysis.
 * Represents a single narrative movement within a scene.
 */
export interface Beat {
  title: string;
  episode: number;
  act: number;
  sequence: number;
  scene_number: number;

  beat_index: number;
  beat_type: string;

  structural_role: string;
  triggered_by?: string;
  leads_to?: string;

  status_quo_before: string;
  shift: string;
  status_quo_after: string;

  primary_character: string;
  opposition: string;

  stakes: string;
  theme: string;
  power_shift: string;

  public_private_axis: string;
  plant?: string;
  payoff?: string;

  page_range?: string;
}