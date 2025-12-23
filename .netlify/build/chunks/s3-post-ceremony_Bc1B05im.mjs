import { v as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DzFHpl4b.mjs';

const frontmatter = {
  "title": "The Invasion",
  "act": 1,
  "sequence": 2,
  "scene_number": 3,
  "location": "buckingham-palace-corridor",
  "time_of_day": "day",
  "characters": ["royalty/lord-mountbatten", "royalty/prince-phillip", "misc/equerry"],
  "purpose": "Separate the private world of the monarchy from the public spectacle, physically routing Philip away from the Beatles and toward the moment of ignition.",
  "conflict": "Institutional order asserts control, redirecting potential chaos elsewhere.",
  "emotional_beat": "Cool, procedural calm — power exercised without friction.",
  "page_count": 1,
  "status": "draft",
  "notes": "This is a hinge scene. Its restraint is intentional; the emotional explosion comes later.",
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
      children: "FADE IN:"
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Scene, {
      children: "INT.. BUCKINGHAM PALACE - CORRIDOR - LATER"
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "The ceremony is over. An EQUERRY in formal attire approaches Philip and Mountbatten as they exit the Investiture Room."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Character, {
      children: "EQUERRY"
    }), "\n", createVNode(Dialogue, {
      children: "Your Royal Highness. Your car is waiting at the private west exit. The..."
    }), "\n", createVNode(Parenthetical, {
      children: "apologetically clearing his throat"
    }), "\n", createVNode(Dialogue, {
      children: "musical group will be escorted to the press pen in the Grand Entrance."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "Mountbatten clocks the phrase “musical group” — just a flicker of amusement. Philip gives a curt, dismissive nod and turns, leading Mountbatten down a long, silent, portrait-lined corridor."
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

const url = "src/content/scenes/act-1/s3-post-ceremony.mdx";
const file = "/home/jk/dev/HerMajestysDispleasure/src/content/scenes/act-1/s3-post-ceremony.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/jk/dev/HerMajestysDispleasure/src/content/scenes/act-1/s3-post-ceremony.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
