import { v as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DzFHpl4b.mjs';

const frontmatter = {
  "title": "The Ceremony",
  "act": 1,
  "sequence": 1,
  "scene_number": 2,
  "location": "buckingham-palace-investiture-room",
  "time_of_day": "day",
  "characters": ["band/john-lennon", "band/paul-mccartney", "band/george-harrison", "band/ringo-starr", "royalty/queen-elizabeth", "royalty/prince-phillip", "royalty/lord-mountbatten"],
  "purpose": "Establish the growing tension between Philip and The Beatles during the formal ceremony, planting the seed of his disapproval before the inciting incident.",
  "conflict": "The visual and cultural clash between the rigid formality of the Crown and the barely-contained irreverence of The Beatles, as seen through Philip's disapproving eyes.",
  "emotional_beat": "From official duty to simmering personal irritation. Philip's annoyance grows, setting the stage for his later explosion of fury.",
  "page_count": 1,
  "status": "draft",
  "notes": "Keep dialogue minimal. Focus on Philip's reactions: the tightening jaw, the narrowed eyes. This is the 'before' picture, making the 'after' more impactful.",
  "created": "2025-07-26T00:00:00.000Z"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  }, {Action, Character, Dialogue, Parenthetical, Scene} = _components;
  if (!Action) _missingMdxReference("Action");
  if (!Character) _missingMdxReference("Character");
  if (!Dialogue) _missingMdxReference("Dialogue");
  if (!Parenthetical) _missingMdxReference("Parenthetical");
  if (!Scene) _missingMdxReference("Scene");
  return createVNode(Fragment, {
    children: [createVNode(Scene, {
      children: "INT.. BUCKINGHAM PALACE - INVESTITURE ROOM - DAY (OCTOBER 26, 1965)"
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "A room of silent, crushing history. Gold. Crystal. Dead monarchs watch from the walls."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "QUEEN ELIZABETH II (39) stands on the dais, a portrait of practiced duty."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "At a respectful distance, PRINCE PHILIP (44) watches — hands clasped behind his back, posture ramrod straight. Beside him, his uncle, LORD MOUNTBATTEN (65), surveys the room with the cool, analytical gaze of a strategist."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "THE BEATLES — JOHN, PAUL, GEORGE, and RINGO — wait their turn. They look impossibly young in their dark suits, shifting their weight, a nervous energy contained within the room's crushing formality."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "Paul flashes a quick, charming smile when he catches the Queen's eye. Ringo looks genuinely thrilled to be there. George seems to be studying the architecture with philosophical detachment."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "John, however, has a subtle, almost imperceptible smirk playing on his lips. A glint of the bathroom's rebellious humor remains in his eyes."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "Philip's gaze locks onto him. His expression, already stern, tightens."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Character, {
      children: "PRINCE PHILIP"
    }), "\n", createVNode(Parenthetical, {
      children: "a low murmur to Mountbatten"
    }), "\n", createVNode(Dialogue, {
      children: "There's a carelessness about that one."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Character, {
      children: "LORD MOUNTBATTEN"
    }), "\n", createVNode(Parenthetical, {
      children: "without taking his eyes off them"
    }), "\n", createVNode(Dialogue, {
      children: "They call it authenticity, Philip. It's the source of their influence."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "Philip's jaw works silently in place of a reply. His hand moves to his naval service ribbons — an unconscious gesture, touching the medals he perceives John to have mocked."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "One by one, they accept their honors — Paul with a polished, diplomatic bow. George with a quiet, respectful nod. Ringo with a wide, happy grin."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "Then John steps forward. He gives a nod and takes the medal from the Queen, his eyes darting around the room for a moment, taking in the absurdity of it all."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "To anyone else, it's nothing. To Philip, it's a fraction too casual — a clear sign of contempt. He looks away, his disapproval hardening into something colder."
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

const url = "src/content/scenes/act-1/s2-ceremony.mdx";
const file = "/home/jk/dev/HerMajestysDispleasure/src/content/scenes/act-1/s2-ceremony.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/jk/dev/HerMajestysDispleasure/src/content/scenes/act-1/s2-ceremony.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
