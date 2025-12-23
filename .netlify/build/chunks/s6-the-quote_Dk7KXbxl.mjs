import { v as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DzFHpl4b.mjs';

const frontmatter = {
  "title": "The Quote",
  "act": 1,
  "sequence": 2,
  "scene_number": 6,
  "location": "buckingham-palace-prince-phillip-private-study",
  "time_of_day": "evening",
  "characters": ["royalty/prince-phillip", "misc/bbc-newscaster", "band/john-lennon"],
  "purpose": "To show the moment John’s off-hand remark is interpreted by Philip as a personal and ideological insult, converting irritation into resolve and triggering the call that will become Operation Minuet.",
  "conflict": "Philip’s rigid worldview collides with a new form of cultural power he cannot control, forcing him to reframe a casual remark as an existential threat.",
  "emotional_beat": "From controlled composure to focused, incandescent fury.",
  "page_count": 1,
  "status": "draft",
  "notes": "This is the moment of meaning-making, not utterance. The study should feel sealed and ritualistic, with the television acting as an intrusive, distorting lens that freezes John into an image Philip can never unsee.",
  "created": "2025-07-26T00:00:00.000Z"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  }, {Action, Character, Dialogue, Parenthetical, Scene, Transition} = _components;
  if (!Action) _missingMdxReference("Action");
  if (!Character) _missingMdxReference("Character");
  if (!Dialogue) _missingMdxReference("Dialogue");
  if (!Parenthetical) _missingMdxReference("Parenthetical");
  if (!Scene) _missingMdxReference("Scene");
  if (!Transition) _missingMdxReference("Transition");
  return createVNode(Fragment, {
    children: [createVNode(Transition, {
      children: "DISSOLVE TO:"
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Scene, {
      children: "INT.. PRINCE PHILIP'S PRIVATE STUDY - EVENING"
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "A sanctuary of tradition. Deep shadows and perfect order. Leather-bound books line the walls. Polished silver frames reflect soft lamplight."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "Philip, in an immaculate dark suit, pours a whiskey. The only sound is the clink of the decanter against crystal glass. He switches on a modest black-and-white television. The screen flickers to life. A BBC NEWSCASTER recaps the day."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Character, {
      children: "BBC NEWSCASTER (V.O.)"
    }), "\n", createVNode(Dialogue, {
      children: "...the highlight of today's investiture was undoubtedly the presentation of Members of the Order of the British Empire to the four members of The Beatles..."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "On screen: grainy footage of the press scrum we just witnessed. Philip sips his whiskey, watching with mild interest."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Character, {
      children: "BBC NEWSCASTER (V.O.) (CONT'D)"
    }), "\n", createVNode(Dialogue, {
      children: "However, an off-hand remark by Mr. John Lennon has raised some eyebrows."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "We see John lean into the microphone. Now we hear him:"
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Character, {
      children: "JOHN (ON TV)"
    }), "\n", createVNode(Dialogue, {
      children: "I thought you had to drive tanks and win wars and kill people to get these things."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Transition, {
      children: "CLOSE ON PHILIP:"
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "He freezes, whiskey glass halfway to his lips. The public mask of stoicism cracks and splinters, revealing a look of pure, unadulterated fury."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "For a long moment, utter silence. Then he sets the glass down with a sharp, deliberate CLICK that echoes in the stillness."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Character, {
      children: "PRINCE PHILIP"
    }), "\n", createVNode(Parenthetical, {
      children: "to the screen, quietly"
    }), "\n", createVNode(Dialogue, {
      children: "You're not mocking the medal, boy. You're mocking duty. Sacrifice. Order."
    }), "\n", createVNode(Parenthetical, {
      children: "pacing, voice hardening"
    }), "\n", createVNode(Dialogue, {
      children: "Everything that built this nation... while you learned guitar chords in your..."
    }), "\n", createVNode(Parenthetical, {
      children: "scowling with disgust"
    }), "\n", createVNode(Dialogue, {
      children: "...Liverpool basement."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "His hand again moves to his naval service ribbons as he picks up the telephone and dials with precise, military movements."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Character, {
      children: "PRINCE PHILIP (INTO PHONE)"
    }), "\n", createVNode(Dialogue, {
      children: "Dickie."
    }), "\n", createVNode(Parenthetical, {
      children: "a pause, listening"
    }), "\n", createVNode(Dialogue, {
      children: "...mhm"
    }), "\n", createVNode(Parenthetical, {
      children: "nodding slowly"
    }), "\n", createVNode(Dialogue, {
      children: "I'm in the study, let's talk."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "He hangs up carefully, staring at the television, where John's frozen image smirks at him with an air of cultural superiority."
    }), "\n", createVNode(_components.p, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/scenes/act-1/s6-the-quote.mdx";
const file = "/home/jk/dev/HerMajestysDispleasure/src/content/scenes/act-1/s6-the-quote.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/jk/dev/HerMajestysDispleasure/src/content/scenes/act-1/s6-the-quote.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
