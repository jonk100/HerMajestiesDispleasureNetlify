import { v as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DzFHpl4b.mjs';

const frontmatter = {
  "title": "The Invasion",
  "act": 1,
  "sequence": 2,
  "scene_number": 5,
  "location": "buckingham-palace-grand-entrance",
  "time_of_day": "day",
  "characters": ["band/john-lennon", "band/paul-mccartney", "band/ringo-starr", "band/george-harrison", "misc/reporters"],
  "purpose": "Release John’s offhand remark into the uncontrolled public sphere, stripping it of context and setting up its later weaponization.",
  "conflict": "Public spectacle and press chaos overwhelm private intent, while Paul senses the consequences before anyone else.",
  "emotional_beat": "Exuberant chaos curdles into a flicker of unease.",
  "page_count": 1,
  "status": "draft",
  "notes": "The audience should not fully hear the quote here. Confusion and momentum are the point.",
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
      children: "EXT.. BUCKINGHAM PALACE - GRAND ENTRANCE - DAY"
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "—into a blinding wall of camera flash and shouted questions. A chaotic scrum of REPORTERS pushes forward. The Beatles are momentarily stunned before their public personas take over."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Character, {
      children: "REPORTERS"
    }), "\n", createVNode(Parenthetical, {
      children: "talking over each other"
    }), "\n", createVNode(Dialogue, {
      children: "Paul! Over here — What did she say? — How does it feel? — Will you tour again? — Ringo! — Smile!"
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Character, {
      children: "PAUL"
    }), "\n", createVNode(Parenthetical, {
      children: "charming, diplomatic"
    }), "\n", createVNode(Dialogue, {
      children: "We're just very honored.."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Character, {
      children: "RINGO"
    }), "\n", createVNode(Parenthetical, {
      children: "grinning"
    }), "\n", createVNode(Dialogue, {
      children: "Me mum's going to frame it!"
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "Laughter. Flash bulbs. A REPORTER shouts something to John — we see his mouth moving, but we don't hear the question over the chaos. John leans toward a microphone and says something, grinning. Some reporters laugh. Others scribble furiously."
    }), "\n", createVNode(_components.p, {}), "\n", createVNode(Action, {
      children: "We see Paul's smile tighten slightly — he caught it, whatever it was. The chaos continues."
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

const url = "src/content/scenes/act-1/s5-press-scrum.mdx";
const file = "/home/jk/dev/HerMajestysDispleasure/src/content/scenes/act-1/s5-press-scrum.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/jk/dev/HerMajestysDispleasure/src/content/scenes/act-1/s5-press-scrum.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
