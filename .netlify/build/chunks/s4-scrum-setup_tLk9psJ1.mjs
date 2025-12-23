import { v as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DzFHpl4b.mjs';

const frontmatter = {
  "title": "The Invasion",
  "act": 1,
  "sequence": 2,
  "scene_number": 4,
  "location": "buckingham-palace-corridor-2",
  "time_of_day": "day",
  "characters": ["band/john-lennon", "band/paul-mccartney", "band/george-harrison", "band/ringo-starr", "misc/palace-official"],
  "purpose": "Position the Beatles on the threshold between private instinct and public consequence, foreshadowing the remark that will ignite the story.",
  "conflict": "Paul’s instinct for caution clashes with John’s reflex toward provocation.",
  "emotional_beat": "Playful confidence edged with nervous anticipation.",
  "page_count": 1,
  "status": "draft",
  "notes": "This is the last calm beat before the public explosion. Keep it light, quick, and ominous in retrospect.",
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
      children: "INT.. ANOTHER CORRIDOR - CONTINUOUS"
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "A different PALACE OFFICIAL leads THE BEATLES. The distant, muffled sound of a CROWD grows louder."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Character, {
      children: "PAUL"
    }), "\n", createVNode(Parenthetical, {
      children: "to John, whispering nervously"
    }), "\n", createVNode(Dialogue, {
      children: "Just smile and wave, our kid. Don't say anything clever."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Character, {
      children: "JOHN"
    }), "\n", createVNode(Parenthetical, {
      children: "winks"
    }), "\n", createVNode(Dialogue, {
      children: "When have I ever done that?"
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "They are led through a final set of doors and—"
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

const url = "src/content/scenes/act-1/s4-scrum-setup.mdx";
const file = "/home/jk/dev/HerMajestysDispleasure/src/content/scenes/act-1/s4-scrum-setup.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/jk/dev/HerMajestysDispleasure/src/content/scenes/act-1/s4-scrum-setup.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
