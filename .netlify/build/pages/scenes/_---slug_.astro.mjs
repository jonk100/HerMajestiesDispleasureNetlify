import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, b as renderTemplate, r as renderComponent } from '../../chunks/astro/server_DzFHpl4b.mjs';
import { g as getCollection, a as getEntry } from '../../chunks/_astro_content_DiHXFRQx.mjs';
import { $ as $$Layout } from '../../chunks/Layout_TenwalEc.mjs';
/* empty css                                     */
/* empty css                                    */
import { $ as $$ActBreak, a as $$Transition, b as $$Parenthetical, c as $$Dialogue, d as $$Character, e as $$Action, f as $$Scene, g as $$Screenplay } from '../../chunks/ActBreak_CjOZWHqI.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$SceneNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SceneNav;
  const { currentSlug } = Astro2.props;
  const allScenes = await getCollection("scenes");
  const sortedScenes = allScenes.sort((a, b) => {
    if (a.data.act !== b.data.act) return a.data.act - b.data.act;
    if (a.data.sequence !== b.data.sequence) return a.data.sequence - b.data.sequence;
    return a.data.scene_number - b.data.scene_number;
  });
  const currentIndex = sortedScenes.findIndex((s) => s.slug === currentSlug);
  const prevScene = currentIndex > 0 ? sortedScenes[currentIndex - 1] : null;
  const nextScene = currentIndex < sortedScenes.length - 1 ? sortedScenes[currentIndex + 1] : null;
  return renderTemplate`${maybeRenderHead()}<nav class="scene-nav" data-astro-cid-eihys7kp> ${prevScene ? renderTemplate`<a${addAttribute(`/scenes/${prevScene.slug}`, "href")} class="nav-link prev"${addAttribute(`Scene ${prevScene.data.scene_number}: ${prevScene.data.title}`, "title")} data-astro-cid-eihys7kp> <span class="arrow" data-astro-cid-eihys7kp>←</span> <span class="label" data-astro-cid-eihys7kp>Previous Scene</span> <span class="scene-info" data-astro-cid-eihys7kp>${prevScene.data.title}</span> </a>` : renderTemplate`<span class="nav-link prev disabled" data-astro-cid-eihys7kp> <span class="arrow" data-astro-cid-eihys7kp>←</span> <span class="label" data-astro-cid-eihys7kp>Previous Scene</span> </span>`} <a href="/scenes" class="nav-link center" data-astro-cid-eihys7kp>
Back to Scenes
</a> ${nextScene ? renderTemplate`<a${addAttribute(`/scenes/${nextScene.slug}`, "href")} class="nav-link next"${addAttribute(`Scene ${nextScene.data.scene_number}: ${nextScene.data.title}`, "title")} data-astro-cid-eihys7kp> <span class="label" data-astro-cid-eihys7kp>Next Scene</span> <span class="scene-info" data-astro-cid-eihys7kp>${nextScene.data.title}</span> <span class="arrow" data-astro-cid-eihys7kp>→</span> </a>` : renderTemplate`<span class="nav-link next disabled" data-astro-cid-eihys7kp> <span class="label" data-astro-cid-eihys7kp>Next Scene</span> <span class="arrow" data-astro-cid-eihys7kp>→</span> </span>`} </nav> `;
}, "/home/jk/dev/HerMajestysDispleasure/src/components/SceneNav.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const scenes = await getCollection("scenes");
  return scenes.map((scene) => ({
    params: { slug: scene.slug },
    props: { scene }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { scene } = Astro2.props;
  const { Content } = await scene.render();
  const characters = await Promise.all(
    scene.data.characters.map((charRef) => getEntry(charRef))
  );
  const locations = Array.isArray(scene.data.location) ? await Promise.all(scene.data.location.map((locRef) => getEntry(locRef))) : [await getEntry(scene.data.location)];
  const timesOfDay = Array.isArray(scene.data.time_of_day) ? scene.data.time_of_day : [scene.data.time_of_day];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${scene.data.title} - Scenes`, "data-astro-cid-ist5byp4": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-ist5byp4> <div class="header" data-astro-cid-ist5byp4> <h1 data-astro-cid-ist5byp4>${scene.data.title}</h1> <div class="meta" data-astro-cid-ist5byp4> <a${addAttribute(`/acts/${scene.data.act}`, "href")} class="act" data-astro-cid-ist5byp4>Act ${scene.data.act}</a> <a${addAttribute(`/sequences/${scene.data.act}-${scene.data.sequence}`, "href")} class="sequence" data-astro-cid-ist5byp4>Seq ${scene.data.sequence}</a> <span class="scene-num" data-astro-cid-ist5byp4>Scene ${scene.data.scene_number}</span> </div> </div> <div class="scene-info" data-astro-cid-ist5byp4> <div class="info-grid" data-astro-cid-ist5byp4> <div class="info-item" data-astro-cid-ist5byp4> <strong data-astro-cid-ist5byp4>Location${locations.length > 1 ? "s" : ""}:</strong> ${locations.map((location, index) => renderTemplate`<span data-astro-cid-ist5byp4> ${location ? renderTemplate`<a${addAttribute(`/locations/${location.slug}`, "href")} class="location-link" data-astro-cid-ist5byp4> ${location.data.name} </a>` : "Unknown Location"} ${index < locations.length - 1 && ", "} </span>`)} </div> <div class="info-item" data-astro-cid-ist5byp4> <strong data-astro-cid-ist5byp4>Time of Day:</strong> ${timesOfDay.join(" \u2192 ")} </div> ${scene.data.page_count && renderTemplate`<div class="info-item" data-astro-cid-ist5byp4> <strong data-astro-cid-ist5byp4>Page Count:</strong> ${scene.data.page_count} </div>`} ${scene.data.status && renderTemplate`<div class="info-item" data-astro-cid-ist5byp4> <strong data-astro-cid-ist5byp4>Status:</strong> <span class="status" data-astro-cid-ist5byp4>${scene.data.status}</span> </div>`} </div> <div class="purpose" data-astro-cid-ist5byp4> <strong data-astro-cid-ist5byp4>Purpose:</strong> ${scene.data.purpose} </div> ${scene.data.conflict && renderTemplate`<div class="conflict" data-astro-cid-ist5byp4> <strong data-astro-cid-ist5byp4>Conflict:</strong> ${scene.data.conflict} </div>`} ${scene.data.emotional_beat && renderTemplate`<div class="emotional-beat" data-astro-cid-ist5byp4> <strong data-astro-cid-ist5byp4>Emotional Beat:</strong> ${scene.data.emotional_beat} </div>`} ${characters && characters.length > 0 && renderTemplate`<div class="characters" data-astro-cid-ist5byp4> <strong data-astro-cid-ist5byp4>Characters:</strong> <div class="character-list" data-astro-cid-ist5byp4> ${characters.map((character) => renderTemplate`<a${addAttribute(`/characters/${character?.slug}`, "href")} class="character-link" data-astro-cid-ist5byp4>${character?.data.name}</a>`)} </div> </div>`} </div> <div class="content markdown" data-astro-cid-ist5byp4> <div class="screenplay-root" data-astro-cid-ist5byp4> ${renderComponent($$result2, "Content", Content, { "components": {
    Screenplay: $$Screenplay,
    Scene: $$Scene,
    Action: $$Action,
    Character: $$Character,
    Dialogue: $$Dialogue,
    Parenthetical: $$Parenthetical,
    Transition: $$Transition,
    ActBreak: $$ActBreak
  }, "data-astro-cid-ist5byp4": true })} </div> </div> ${renderComponent($$result2, "SceneNav", $$SceneNav, { "currentSlug": scene.slug, "data-astro-cid-ist5byp4": true })} </div> ` })} `;
}, "/home/jk/dev/HerMajestysDispleasure/src/pages/scenes/[...slug].astro", void 0);

const $$file = "/home/jk/dev/HerMajestysDispleasure/src/pages/scenes/[...slug].astro";
const $$url = "/scenes/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
