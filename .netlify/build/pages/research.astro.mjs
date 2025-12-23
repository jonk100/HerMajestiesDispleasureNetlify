import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DzFHpl4b.mjs';
import { g as getCollection } from '../chunks/_astro_content_DiHXFRQx.mjs';
import { $ as $$Layout } from '../chunks/Layout_TenwalEc.mjs';
import { $ as $$BaseFilter } from '../chunks/BaseFilter_CflLUkC2.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$ResearchFilter = createComponent(($$result, $$props, $$slots) => {
  const researchFilters = {
    all: "All Research",
    historical_events: "Historical Events",
    character_research: "Character Research",
    location_research: "Location Research",
    period_details: "Period Details",
    music_industry_1960s: "Music Industry 1960s",
    royal_family_protocols: "Royal Family Protocols",
    political_context: "Political Context",
    technical_details: "Technical Details",
    inspiration: "Inspiration",
    reference_material: "Reference Material"
  };
  return renderTemplate`${renderComponent($$result, "BaseFilter", $$BaseFilter, { "title": "Filter by Category", "filters": researchFilters, "resultLabel": "research items" })}`;
}, "/home/jk/dev/HerMajestysDispleasure/src/components/ResearchFilter.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const research = await getCollection("research");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Research - Her Majesty's Displeasure", "data-astro-cid-ynj567il": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-ynj567il> <h1 data-astro-cid-ynj567il>Research</h1> <p data-astro-cid-ynj567il>Background research, references, and historical context</p> ${renderComponent($$result2, "ResearchFilter", $$ResearchFilter, { "data-astro-cid-ynj567il": true })} <div class="items-grid" data-astro-cid-ynj567il> ${research.map((item) => renderTemplate`<div class="item-card"${addAttribute(item.data.category, "data-category")} data-astro-cid-ynj567il> <h3 data-astro-cid-ynj567il> <a${addAttribute(`/research/${item.slug}`, "href")} data-astro-cid-ynj567il>${item.data.title}</a> </h3> <div class="meta" data-astro-cid-ynj567il> <span class="category" data-astro-cid-ynj567il>${item.data.category}</span> <span class="reliability" data-astro-cid-ynj567il>${item.data.reliability}</span> </div> ${item.data.date_range && renderTemplate`<p class="date-range" data-astro-cid-ynj567il> <strong data-astro-cid-ynj567il>Period:</strong> ${item.data.date_range} </p>`} <p class="relevance" data-astro-cid-ynj567il>${item.data.relevance}</p> ${item.data.tags && item.data.tags.length > 0 && renderTemplate`<div class="tags" data-astro-cid-ynj567il> ${item.data.tags.map((tag) => renderTemplate`<span class="tag" data-astro-cid-ynj567il>${tag}</span>`)} </div>`} </div>`)} </div> <div class="back-link" data-astro-cid-ynj567il> <a href="/" data-astro-cid-ynj567il>← Back to Collections</a> </div> </div> ` })} `;
}, "/home/jk/dev/HerMajestysDispleasure/src/pages/research/index.astro", void 0);

const $$file = "/home/jk/dev/HerMajestysDispleasure/src/pages/research/index.astro";
const $$url = "/research";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
