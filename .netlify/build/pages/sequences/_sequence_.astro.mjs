import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DzFHpl4b.mjs';
import { g as getCollection, a as getEntry } from '../../chunks/_astro_content_DiHXFRQx.mjs';
import { $ as $$Layout } from '../../chunks/Layout_TenwalEc.mjs';
/* empty css                                    */
import { $ as $$ActBreak, a as $$Transition, b as $$Parenthetical, c as $$Dialogue, d as $$Character, e as $$Action, f as $$Scene, g as $$Screenplay } from '../../chunks/ActBreak_CjOZWHqI.mjs';
import { $ as $$PageBreaker } from '../../chunks/PageBreaker_CsxFPr_6.mjs';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const scenes = await getCollection("scenes");
  const actSequences = [...new Set(
    scenes.map((s) => `${s.data.act}-${s.data.sequence}`)
  )].sort();
  return actSequences.map((combo) => {
    const [act, sequence] = combo.split("-").map(Number);
    return {
      params: { sequence: combo },
      props: { act, sequence }
    };
  });
}
const $$sequence = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$sequence;
  const { act, sequence } = Astro2.props;
  const allScenes = await getCollection("scenes");
  const sequenceScenes = allScenes.filter((s) => s.data.act === act && s.data.sequence === sequence).sort((a, b) => a.data.scene_number - b.data.scene_number);
  const allCharacterRefs = /* @__PURE__ */ new Set();
  for (const scene of sequenceScenes) {
    for (const charRef of scene.data.characters) {
      allCharacterRefs.add(JSON.stringify(charRef));
    }
  }
  const characters = await Promise.all(
    [...allCharacterRefs].map((ref) => getEntry(JSON.parse(ref)))
  );
  const sortedCharacters = characters.filter((c) => c !== null && c !== void 0).sort((a, b) => a.data.name.localeCompare(b.data.name));
  const allLocationRefs = /* @__PURE__ */ new Set();
  for (const scene of sequenceScenes) {
    const locs = Array.isArray(scene.data.location) ? scene.data.location : [scene.data.location];
    for (const locRef of locs) {
      allLocationRefs.add(JSON.stringify(locRef));
    }
  }
  const locations = await Promise.all(
    [...allLocationRefs].map((ref) => getEntry(JSON.parse(ref)))
  );
  const sortedLocations = locations.filter((l) => l !== null && l !== void 0).sort((a, b) => a.data.name.localeCompare(b.data.name));
  const renderedScenes = await Promise.all(
    sequenceScenes.map(async (scene) => ({
      scene,
      Content: (await scene.render()).Content
    }))
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Act ${act} Sequence ${sequence} - Full Screenplay`, "data-astro-cid-jn2tm5dy": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="sequence-header" data-astro-cid-jn2tm5dy> <div class="sequence-meta" data-astro-cid-jn2tm5dy> <h1 data-astro-cid-jn2tm5dy>Act ${act}, Sequence ${sequence}</h1> <div class="meta-info" data-astro-cid-jn2tm5dy> <a${addAttribute(`/acts/${act}`, "href")} class="act-link" data-astro-cid-jn2tm5dy>View Full Act ${act}</a> <span class="scene-count" data-astro-cid-jn2tm5dy>${sequenceScenes.length} Scenes</span> </div> </div> <div class="sequence-details" data-astro-cid-jn2tm5dy> <div class="detail-section" data-astro-cid-jn2tm5dy> <strong data-astro-cid-jn2tm5dy>Locations:</strong> <div class="tag-list" data-astro-cid-jn2tm5dy> ${sortedLocations.map((loc) => renderTemplate`<a${addAttribute(`/locations/${loc.slug}`, "href")} class="tag location-tag" data-astro-cid-jn2tm5dy> ${loc.data.name} </a>`)} </div> </div> <div class="detail-section" data-astro-cid-jn2tm5dy> <strong data-astro-cid-jn2tm5dy>Characters:</strong> <div class="tag-list" data-astro-cid-jn2tm5dy> ${sortedCharacters.map((char) => renderTemplate`<a${addAttribute(`/characters/${char.slug}`, "href")} class="tag character-tag" data-astro-cid-jn2tm5dy> ${char.data.name} </a>`)} </div> </div> </div> </div> <div class="screenplay-container" data-astro-cid-jn2tm5dy> <div class="screenplay-root" data-astro-cid-jn2tm5dy> <div class="screenplay-page" data-astro-cid-jn2tm5dy> ${renderedScenes.map(({ scene, Content }, index) => renderTemplate`<div class="scene-break"${addAttribute(`scene-${scene.data.scene_number}`, "id")} data-astro-cid-jn2tm5dy> ${renderComponent($$result2, "Content", Content, { "components": {
    Screenplay: $$Screenplay,
    Scene: $$Scene,
    Action: $$Action,
    Character: $$Character,
    Dialogue: $$Dialogue,
    Parenthetical: $$Parenthetical,
    Transition: $$Transition,
    ActBreak: $$ActBreak
  }, "data-astro-cid-jn2tm5dy": true })} </div>`)} </div> </div> </div> ${renderComponent($$result2, "PageBreaker", $$PageBreaker, { "data-astro-cid-jn2tm5dy": true })} ` })} `;
}, "/home/jk/dev/HerMajestysDispleasure/src/pages/sequences/[sequence].astro", void 0);

const $$file = "/home/jk/dev/HerMajestysDispleasure/src/pages/sequences/[sequence].astro";
const $$url = "/sequences/[sequence]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$sequence,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
