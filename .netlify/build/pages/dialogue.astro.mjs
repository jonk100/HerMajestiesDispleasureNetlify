import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DzFHpl4b.mjs';
import { g as getCollection } from '../chunks/_astro_content_DiHXFRQx.mjs';
import { $ as $$Layout } from '../chunks/Layout_TenwalEc.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const dialogue = await getCollection("dialogue");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dialogue - Her Majesty's Displeasure", "data-astro-cid-ojdynqlv": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-ojdynqlv> <h1 data-astro-cid-ojdynqlv>Dialogue</h1> <p data-astro-cid-ojdynqlv>Key conversations and memorable lines</p> <div class="items-grid" data-astro-cid-ojdynqlv> ${dialogue.map((item) => renderTemplate`<div class="item-card" data-astro-cid-ojdynqlv> <h3 data-astro-cid-ojdynqlv><a${addAttribute(`/dialogue/${item.slug}`, "href")} data-astro-cid-ojdynqlv>${item.data.title}</a></h3> <div class="meta" data-astro-cid-ojdynqlv> <span class="speaker" data-astro-cid-ojdynqlv>${item.data.characters?.join(", ")}</span> ${item.data.context && renderTemplate`<span class="context" data-astro-cid-ojdynqlv>${item.data.context}</span>`} </div> ${item.data.emotion && renderTemplate`<p class="emotion" data-astro-cid-ojdynqlv><strong data-astro-cid-ojdynqlv>Emotion:</strong> ${item.data.emotion}</p>`} ${item.data.subtext && renderTemplate`<p class="subtext" data-astro-cid-ojdynqlv><strong data-astro-cid-ojdynqlv>Subtext:</strong> ${item.data.subtext}</p>`} ${item.data.scene_reference && renderTemplate`<p class="scene-ref" data-astro-cid-ojdynqlv><strong data-astro-cid-ojdynqlv>Scene:</strong> ${item.data.scene_reference}</p>`} </div>`)} </div> <div class="back-link" data-astro-cid-ojdynqlv> <a href="/" data-astro-cid-ojdynqlv>← Back to Collections</a> </div> </div> ` })} `;
}, "/home/jk/dev/HerMajestysDispleasure/src/pages/dialogue/index.astro", void 0);

const $$file = "/home/jk/dev/HerMajestysDispleasure/src/pages/dialogue/index.astro";
const $$url = "/dialogue";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
