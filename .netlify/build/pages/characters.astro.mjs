import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DzFHpl4b.mjs';
import { g as getCollection } from '../chunks/_astro_content_DiHXFRQx.mjs';
import { $ as $$Layout } from '../chunks/Layout_TenwalEc.mjs';
import { $ as $$BaseFilter } from '../chunks/BaseFilter_CflLUkC2.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$CharacterFilter = createComponent(($$result, $$props, $$slots) => {
  const characterFilters = {
    all: "All Characters",
    band: "Band Members",
    royalty: "Royalty",
    supporting: "Supporting"
  };
  return renderTemplate`${renderComponent($$result, "BaseFilter", $$BaseFilter, { "title": "Filter by Category", "filters": characterFilters, "resultLabel": "characters" })}`;
}, "/home/jk/dev/HerMajestysDispleasure/src/components/CharacterFilter.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const characters = await getCollection("characters");
  function getCategory(slug) {
    const parts = slug.split("/");
    return parts.length > 1 ? parts[0] : "other";
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Characters - Her Majesty's Displeasure", "data-astro-cid-wajeuabh": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-wajeuabh> <div class="header-section" data-astro-cid-wajeuabh> <div data-astro-cid-wajeuabh> <h1 data-astro-cid-wajeuabh>Characters</h1> <p data-astro-cid-wajeuabh>Detailed character profiles and development</p> </div> <a href="/stats/character-stats" class="stats-link" data-astro-cid-wajeuabh>
📊 View Character Statistics
</a> </div> ${renderComponent($$result2, "CharacterFilter", $$CharacterFilter, { "data-astro-cid-wajeuabh": true })} <div class="items-grid" data-astro-cid-wajeuabh> ${characters.map((character) => renderTemplate`<div class="item-card"${addAttribute(getCategory(character.slug), "data-category")} data-astro-cid-wajeuabh> <h3 data-astro-cid-wajeuabh> <a${addAttribute(`/characters/${character.slug}`, "href")} data-astro-cid-wajeuabh> ${character.data.name} </a> </h3> <div class="meta" data-astro-cid-wajeuabh> <span class="role" data-astro-cid-wajeuabh>${character.data.role}</span> <span class="type" data-astro-cid-wajeuabh>${character.data.character_type}</span> </div> <p data-astro-cid-wajeuabh>${character.data.description}</p> ${character.data.occupation && renderTemplate`<p class="occupation" data-astro-cid-wajeuabh> <strong data-astro-cid-wajeuabh>Occupation:</strong> ${character.data.occupation} </p>`} </div>`)} </div> <div class="back-link" data-astro-cid-wajeuabh> <a href="/" data-astro-cid-wajeuabh>← Back to Collections</a> </div> <div class="character-map-image" style="margin-top: 2rem; text-align: center;" data-astro-cid-wajeuabh> <img src="/character-relationship-diagram.png" alt="Character Relationship Diagram" style="max-width: 100%; height: auto; border: 1px solid #ccc; box-shadow: 0 2px 8px rgba(0,0,0,0.07);" data-astro-cid-wajeuabh> </div> </div> ` })} `;
}, "/home/jk/dev/HerMajestysDispleasure/src/pages/characters/index.astro", void 0);

const $$file = "/home/jk/dev/HerMajestysDispleasure/src/pages/characters/index.astro";
const $$url = "/characters";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
