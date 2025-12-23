import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DzFHpl4b.mjs';
import { g as getCollection } from '../chunks/_astro_content_DiHXFRQx.mjs';
import { $ as $$Layout } from '../chunks/Layout_TenwalEc.mjs';
import { $ as $$BaseFilter } from '../chunks/BaseFilter_CflLUkC2.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$BeatsFilter = createComponent(($$result, $$props, $$slots) => {
  const beatsFilters = {
    all: "All Beats",
    inciting_incident: "Inciting Incident",
    plot_point_1: "Plot Point 1",
    midpoint: "Midpoint",
    plot_point_2: "Plot Point 2",
    climax: "Climax",
    resolution: "Resolution",
    conspiracy_revelation: "Conspiracy Revelation",
    escalation: "Escalation",
    betrayal: "Betrayal",
    cover_up: "Cover Up",
    character_moment: "Character Moment",
    setup: "Setup",
    payoff: "Payoff"
  };
  return renderTemplate`${renderComponent($$result, "BaseFilter", $$BaseFilter, { "title": "Filter by Beat Type", "filters": beatsFilters, "resultLabel": "beats" })}`;
}, "/home/jk/dev/HerMajestysDispleasure/src/components/BeatsFilter.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const beats = await getCollection("beats");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Story Beats - Her Majesty's Displeasure", "data-astro-cid-ko5hwyne": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-ko5hwyne> <h1 data-astro-cid-ko5hwyne>Story Beats</h1> <p data-astro-cid-ko5hwyne>Key story moments and plot points</p> ${renderComponent($$result2, "BeatsFilter", $$BeatsFilter, { "data-astro-cid-ko5hwyne": true })} <div class="items-grid" data-astro-cid-ko5hwyne> ${beats.map((beat) => renderTemplate`<div class="item-card"${addAttribute(beat.data.beat_type, "data-category")} data-astro-cid-ko5hwyne> <h3 data-astro-cid-ko5hwyne><a${addAttribute(`/beats/${beat.slug}`, "href")} data-astro-cid-ko5hwyne>${beat.data.title}</a></h3> <div class="meta" data-astro-cid-ko5hwyne> <span class="act" data-astro-cid-ko5hwyne>Act ${beat.data.act}</span> <span class="type" data-astro-cid-ko5hwyne>${beat.data.beat_type}</span> </div> <p class="description" data-astro-cid-ko5hwyne>${beat.data.description}</p> ${beat.data.characters_involved && beat.data.characters_involved.length > 0 && renderTemplate`<p class="characters" data-astro-cid-ko5hwyne><strong data-astro-cid-ko5hwyne>Characters:</strong> ${beat.data.characters_involved.join(", ")}</p>`} ${beat.data.page_target && renderTemplate`<p class="page-target" data-astro-cid-ko5hwyne><strong data-astro-cid-ko5hwyne>Target Pages:</strong> ${beat.data.page_target}</p>`} </div>`)} </div> <div class="back-link" data-astro-cid-ko5hwyne> <a href="/" data-astro-cid-ko5hwyne>← Back to Collections</a> </div> </div> ` })} `;
}, "/home/jk/dev/HerMajestysDispleasure/src/pages/beats/index.astro", void 0);

const $$file = "/home/jk/dev/HerMajestysDispleasure/src/pages/beats/index.astro";
const $$url = "/beats";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
