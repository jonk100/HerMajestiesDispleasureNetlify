import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DzFHpl4b.mjs';
import { g as getCollection } from '../chunks/_astro_content_DiHXFRQx.mjs';
import { $ as $$Layout } from '../chunks/Layout_TenwalEc.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const locations = await getCollection("locations");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Locations - Her Majesty's Displeasure", "data-astro-cid-fvi7swcd": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-fvi7swcd> <h1 data-astro-cid-fvi7swcd>Locations</h1> <p data-astro-cid-fvi7swcd>Settings and places in the story</p> <div class="items-grid" data-astro-cid-fvi7swcd> ${locations.map((location) => renderTemplate`<div class="item-card" data-astro-cid-fvi7swcd> <h3 data-astro-cid-fvi7swcd><a${addAttribute(`/locations/${location.slug}`, "href")} data-astro-cid-fvi7swcd>${location.data.name}</a></h3> <div class="meta" data-astro-cid-fvi7swcd> <span class="type" data-astro-cid-fvi7swcd>${location.data.type}</span> ${location.data.mood && renderTemplate`<span class="mood" data-astro-cid-fvi7swcd>${location.data.mood}</span>`} </div> <p class="description" data-astro-cid-fvi7swcd>${location.data.description}</p> ${location.data.scenes_used && location.data.scenes_used.length > 0 && renderTemplate`<p class="scenes" data-astro-cid-fvi7swcd><strong data-astro-cid-fvi7swcd>Used in scenes:</strong> ${location.data.scenes_used.join(", ")}</p>`} </div>`)} </div> <div class="back-link" data-astro-cid-fvi7swcd> <a href="/" data-astro-cid-fvi7swcd>← Back to Collections</a> </div> </div> ` })} `;
}, "/home/jk/dev/HerMajestysDispleasure/src/pages/locations/index.astro", void 0);

const $$file = "/home/jk/dev/HerMajestysDispleasure/src/pages/locations/index.astro";
const $$url = "/locations";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
