/**
 * threadMap.ts
 * 
 * Comprehensive mapping of all narrative threads for quick reference.
 * Extracted from src/content/threads collection.
 */

export interface ThreadInfo {
  filename: string;
  title: string;
  type: string;
  description: string;
  intended_payoff?: string;
  notes?: string;
}

export const THREAD_MAP: ThreadInfo[] = [
  {
    filename: "animation_cel_closure",
    title: "Animation Cel Closure",
    type: "motif",
    description: "The final institutional burial of Clive's Blue Meanie animation project - '47 cels completed out of approximately 3,000. Methodology: sound. Timeline: 1987. Status: ongoing.'",
    intended_payoff: "The animation cel thread gets its close in the official record, as absurd as Clive intended and as futile as identified in prior analysis. Finchley files it away with 'No further action required' as the series' last institutional word.",
    notes: "The absurdity is preserved in the bureaucratic record - 47 cels, methodology sound, timeline 1987, status ongoing. This is exactly as Clive intended: a project so absurd it could only exist as institutional paperwork."
  },
  {
    filename: "beatles_dissolution",
    title: "Beatles Dissolution",
    type: "character_arc",
    description: "The natural, organic breakup of The Beatles, contrasting with the Crown's bureaucratic attempts to force dissolution.",
    intended_payoff: "The band's dissolution happens on their own terms, not the Crown's timeline.",
    notes: "Represents the natural end of their journey together, separate from institutional manipulation. The breakup is both sad and inevitable, but authentic to their artistic evolution."
  },
  {
    filename: "brian_obsolescence",
    title: "Epstein's Obsolescence",
    type: "character_arc",
    description: "Brian Epstein's loving but managerial control style increasingly fails as the band evolves; he can manage access and mood, not consequences.",
    intended_payoff: "",
    notes: "Seeded in toasts and de-escalations; becomes visible as private coping and limits of control."
  },
  {
    filename: "business_card",
    title: "Business Card",
    type: "plot",
    description: "The mysterious business card that Clive (as Klaus) gives to Yoko at the Indica Gallery, which Paul later misinterprets as evidence of a conspiracy.",
    intended_payoff: "Paul's paranoid flashback in Episode 5, where he misremembers the innocent encounter as a briefing between Yoko and 'Klaus the German'.",
    notes: "The thread closes as a misfire — Paul uses it as evidence for a wrong conclusion. The business card needed a more explicit plant in Episode 3 to make this payoff land cleanly."
  },
  {
    filename: "clive_delusion",
    title: "Clive Delusion",
    type: "character_arc",
    description: "Clive's descent into complete institutional paranoia, where any sound can be interpreted as coded intelligence and any Beatles behavior becomes evidence of vast conspiracy. This thread tracks how institutional thinking replaces reality entirely.",
    intended_payoff: "Clive's final question in Scene 40.2 about whether 'they know they're being watched,' representing his last grasp at reality before Nigel's recognition.",
    notes: "A comedic engine with real consequences once institutionalized as method."
  },
  {
    filename: "cynthia_arc",
    title: "Cynthia's Departure",
    type: "character_arc",
    description: "Cynthia's quiet decision to leave John after finding evidence of Yoko's presence in their marriage. This thread represents the end of the Lennon marriage and Cynthia's recognition that she has been living in a relationship that was already over.",
    intended_payoff: "Cynthia physically leaving the marriage and finding her own path forward. The thread is collected in Episode 6 with her letter to Julian - not resolution, but continuation.",
    notes: "This thread is now closed. Cynthia alone, no dialogue, finding her own way forward without performance — this is the show at its most confident."
  },
  {
    filename: "epstein_pills",
    title: "Epstein's Pills",
    type: "character_arc",
    description: "Brian Epstein's private chemical coping and fragility beneath controlled management; silence as evidence of collapse.",
    intended_payoff: "",
    notes: "Introduced as wordless gesture after negotiation; a crack beneath the persona of control."
  },
  {
    filename: "george_detachment",
    title: "George's Detachment",
    type: "character_arc",
    description: "George Harrison's philosophical remove: he observes rituals and success as theatre, translating discomfort into spiritual inquiry and sonic exploration.",
    intended_payoff: "George's garden scene with Nigel: 'Things that seem complicated are usually just... sitting in the garden.' The institution couldn't categorize what George found because it wasn't legible to their surveillance methods.",
    notes: "Begins with 'it's all just theatre' and deepens into Eastern philosophy and sitar experimentation."
  },
  {
    filename: "george_harrison_exit",
    title: "George Harrison Exit",
    type: "character_arc",
    description: "George Harrison's departure from the Beatles, spanning from initial erosion at Twickenham through his quiet exit in Scene 41. The arc shows George's journey from frustration to complete withdrawal, culminating in his decision to leave the band.",
    intended_payoff: "George's quiet exit in Scene 41, where he puts down his guitar and walks out without drama, marking the end of his time with the Beatles.",
    notes: ""
  },
  {
    filename: "george_sitar",
    title: "George's Sitar",
    type: "motif",
    description: "George Harrison's sitar exploration as both genuine artistic/spiritual inquiry and a targeted pressure point for Operation Minuet.",
    intended_payoff: "George in his garden at Friar Park, tending plants and finding peace - the spiritual journey arriving at enlightenment, not dissidence.",
    notes: "Bridges music, philosophy, and institutional misreading. The thread closes showing George as a gardener at peace, not the threat the institution perceived."
  },
  {
    filename: "george_sitar_closure",
    title: "George's Sitar Closure",
    type: "character_arc",
    description: "The completion of George's sitar thread - from Episode 1 briefing room joke through Episode 2 bookshop manipulation through Episode 3 Ravi Shankar scenes through Episode 4 withdrawal to its peaceful resolution in the Friar Park garden.",
    intended_payoff: "George in his garden with a sitar in the sun, sharing wisdom with Nigel without recognition. The sitar completes the thread from joke to spiritual tool to peaceful object.",
    notes: "This thread provides the series thesis in George's register - the same as the Queen's 'all we ever had to do was wait,' arrived at from the opposite direction."
  },
  {
    filename: "george_withdrawal",
    title: "George's Withdrawal",
    type: "character_arc",
    description: "George's detachment hardening into withdrawal: dissatisfaction with the band's machine and a pull toward spiritual/creative isolation.",
    intended_payoff: "",
    notes: "Seeded by the 'same sausages' machine critique; intensified by sitar/philosophy becoming identity."
  },
  {
    filename: "jesus_backlash",
    title: "Jesus Backlash",
    type: "plot",
    description: "Public and institutional backlash ignited by the Jesus remark once it travels beyond context, becoming a mediated scandal.",
    intended_payoff: "Escalates in later episodes as a cultural flashpoint; forces institutional and personal consequences.",
    notes: "Opened when the remark becomes a portable artifact; may remain dormant until it detonates."
  },
  {
    filename: "john_irreverence",
    title: "John's Irreverence",
    type: "character_arc",
    description: "John Lennon's casual irreverence toward institutional authority, expressed as humor and performance rather than open hostility.",
    intended_payoff: "The final montage image of John at Tittenhurst Park, followed by the radio announcement of his death in 1980. The series gives us one last image of him alive in his own space before the universe delivers what the institution could not.",
    notes: "Seeded in the palace bathroom and refracted through institutional misreading."
  },
  {
    filename: "john_jesus_remark",
    title: "John's Jesus Remark",
    type: "plot",
    description: "Thread tracking the emergence, recording, and circulation of John's Jesus comparison—from conversational context to portable quote and evidence.",
    intended_payoff: "Quote lands publicly in publication and triggers backlash; recontextualized through institutions and media.",
    notes: "Planted through structural withholding; fully spoken in the interview; consequences arrive later."
  },
  {
    filename: "john_paul_dynamic",
    title: "John & Paul Dynamic",
    type: "relationship",
    description: "The creative and ideological fault line between John's hunger for meaning and Paul's momentum toward craft, output, and legitimacy.",
    intended_payoff: "",
    notes: "Appears as teasing, then as studio tension and competing definitions of success."
  },
  {
    filename: "john_radicalization",
    title: "John's Radicalization",
    type: "character_arc",
    description: "John's evolving intellectual and spiritual search—honest inquiry that institutions and media will reinterpret as provocation, threat, or manifesto.",
    intended_payoff: "",
    notes: "Begins as artistic responsibility and deepens into reading, belief critique, and the interview context."
  },
  {
    filename: "john_yoko",
    title: "John and Yoko",
    type: "relationship",
    description: "The relationship that offers John his first genuine alternative to both institutional pressure and fan adoration. Yoko speaks his language — not about fame or art, but about possibility.",
    intended_payoff: "Yoko's avant-garde scream accidentally saving John during Operation Elegy, showing that her authentic self is what protects him.",
    notes: "The relationship begins as a game (imaginary nail) and becomes recognition (YES). The thread closes when Yoko's avant-garde scream accidentally saves John from assassination."
  },
  {
    filename: "klaus_persona",
    title: "Klaus Persona",
    type: "operational",
    description: "Clive's chosen infiltration identity: a German art critic persona designed to flatter and destabilize Lennon through pseudo-intellectual validation.",
    intended_payoff: "",
    notes: "Introduced in briefing; later appears as disguise work and theatrical field behavior."
  },
  {
    filename: "maureen_interview",
    title: "Maureen Interview",
    type: "plot",
    description: "Maureen Cleave's in-depth profile project, which provides the conversational context—and later the published artifact—that ignites the Jesus backlash.",
    intended_payoff: "",
    notes: "Journalistic clarity becomes unintended catalyst once words travel."
  },
  {
    filename: "mountbatten_strategy",
    title: "Mountbatten's Strategy",
    type: "operational",
    description: "Lord Mountbatten's cold, strategic understanding of cultural power and his role as architect of covert management rather than overt repression.",
    intended_payoff: "Mountbatten's last strategic objection overruled in Episode 6, showing the cold strategist defeated by the wounded avenger.",
    notes: "He reframes authenticity as influence and translates Philip's fury into method. The thread closes when his strategic objections are finally overruled by Philip's obsession."
  },
  {
    filename: "nigel_conscience",
    title: "Nigel Conscience",
    type: "character_arc",
    description: "Nigel's growing disillusionment with the operation and its ultimate recognition of its human cost. From his early efficiency in Episode 1 through his quiet despair in Episode 4's surveillance van.",
    intended_payoff: "Nigel's final moral act in the Falklands 1980 scene: crossing out the word 'yet' in his surveillance notebook, restoring the original verdict that 'no action required' was correct.",
    notes: "Expressed through minimal logging, deadpan corrections, and the persistent sense of futility."
  },
  {
    filename: "operation_elegy",
    title: "Operation Elegy",
    type: "operational",
    description: "Covert assassination protocol targeting John Lennon, designed to eliminate a cultural threat that has become more dangerous than the original target.",
    intended_payoff: "The institutional machine that cannot acknowledge its own failure, instead burying it as classified success.",
    notes: "The operation's true objective revealed in its final moments: not disruption, but elimination. The Crown protecting itself from accountability by converting failure into state secrecy."
  },
  {
    filename: "operation_minuet",
    title: "Operation Minuet",
    type: "operational",
    description: "Covert campaign to fracture the Beatles from within by amplifying existing fissures and misreadings; bureaucratic nudges as weapon.",
    intended_payoff: "",
    notes: "Named in the royal committee; executed by mismatched MI5 operatives."
  },
  {
    filename: "paul_commercial_engine",
    title: "Paul's Commercial Engine",
    type: "character_arc",
    description: "Paul's forward-driving instinct to keep the Beatles moving—singles, studio time, professionalism—treating momentum as survival.",
    intended_payoff: "",
    notes: "Introduced in celebration as immediate pivot to the next deliverable."
  },
  {
    filename: "paul_diplomatic_anxiety",
    title: "Paul's Diplomatic Anxiety",
    type: "character_arc",
    description: "Paul McCartney's instinct to manage perception and anticipate headlines; the internal PR alarm that reads private moments as future public scandal.",
    intended_payoff: "Paul's farm scene: finding a melody alone while Linda photographs the empty path between them. The music continues even when the collaboration ends.",
    notes: "Seeded in the palace bathroom; echoes through press-facing moments and managerial negotiations."
  },
  {
    filename: "paul_establishment_arc",
    title: "Paul's Establishment Arc",
    type: "character_arc",
    description: "Paul's pursuit of legitimacy through craft and institutional respect—film scoring, orchestras, professionalism—misread by the operation as ideological pivot.",
    intended_payoff: "",
    notes: "Begins in private composition and expands into peer approval and surveillance misreading."
  },
  {
    filename: "paul_musical_return",
    title: "Paul's Musical Return",
    type: "character_arc",
    description: "Paul's arc closure through the return of authentic creativity - the unsung song fragment that connects to Episode 5's interrupted melody and shows Paul finding music again on the other side of establishment grooming and conspiracy.",
    intended_payoff: "Paul at the Scottish farm finding the melody again - not a finished song but a direction. The fragment connects to Episode 5's 'gentle, unformed melody' that was interrupted by the knighthood letter.",
    notes: "The melody returns. Linda photographs the empty path - her instinct for the image of absence, which is the series' recurring motif, done by the right person."
  },
  {
    filename: "percy_equipment_thread",
    title: "Percy's Equipment Thread",
    type: "operational",
    description: "The institutional inadequacy made physical through Percy's Q-Branch.",
    intended_payoff: "Episode 6 Nazi hunting rifle payoff with retaining screw lecture.",
    notes: "Percy's Q-Branch represents the gap between institutional ambition and material reality."
  },
  {
    filename: "philip_obsession",
    title: "Philip's Obsession",
    type: "character_arc",
    description: "Prince Philip's fixation on Lennon and the Beatles as a symptom of cultural erosion; a personal wound hardened into institutional rage and policy.",
    intended_payoff: "",
    notes: "Triggered by perceived carelessness; escalates through mediated quotes and strategic planning."
  },
  {
    filename: "photo_motif",
    title: "Photograph Motif",
    type: "motif",
    description: "Visual motif of order and consent: a photograph nudged into perfect alignment as the Queen's language of control.",
    intended_payoff: "In Episode 6, the Queen adjusts her father's photograph as order restored, the opposite gesture from Episode 1's consent.",
    notes: "Introduced in Episode 1 as consent, closes in Episode 6 as order restored. The motif completes with its second meaning in place."
  },
  {
    filename: "queens_wisdom",
    title: "Queen's Wisdom",
    type: "character_arc",
    description: "The Queen's historically grounded restraint: institutional patience, refusal to dignify provocations, and pragmatic consent expressed through routine.",
    intended_payoff: "'All we ever had to do was wait' - her thesis proven correct, showing that patient wisdom triumphs over impatient obsession.",
    notes: "Expressed through small acts of order and the budget-question consent. The thread closes with her thesis fully stated: 'All we ever had to do was wait.'"
  },
  {
    filename: "ringo_immunity",
    title: "Ringo Immunity",
    type: "character_arc",
    description: "Ringo's unique position as the band's peacekeeper and immune to the various forces tearing the Beatles apart. From his quiet wisdom in Episode 1 through his profound observation in Episode 4's 'We always do this' scenes.",
    intended_payoff: "The thread closes with two complementary scenes: Percy discovering Ringo's almost empty file in the MI5 registry, followed by Ringo on a film set in flamboyant costume, laughing with joy.",
    notes: "Introduced via family pride; reinforced by being dismissed as a 'control group.' The thread closes showing Ringo exactly as the Episode 1 briefing predicted: joyful and immune."
  }
];

// Helper function to find thread by filename
export function getThreadByFilename(filename: string): ThreadInfo | undefined {
  return THREAD_MAP.find(thread => thread.filename === filename);
}

// Helper function to get threads by type
export function getThreadsByType(type: string): ThreadInfo[] {
  return THREAD_MAP.filter(thread => thread.type === type);
}

// Helper function to search threads by keyword
export function searchThreads(keyword: string): ThreadInfo[] {
  const lowerKeyword = keyword.toLowerCase();
  return THREAD_MAP.filter(thread => 
    thread.title.toLowerCase().includes(lowerKeyword) ||
    thread.description.toLowerCase().includes(lowerKeyword) ||
    thread.notes?.toLowerCase().includes(lowerKeyword)
  );
}
