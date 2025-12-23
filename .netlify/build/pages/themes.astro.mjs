import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DzFHpl4b.mjs';
import { g as getCollection } from '../chunks/_astro_content_DiHXFRQx.mjs';
import { $ as $$Layout } from '../chunks/Layout_TenwalEc.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const themes = await getCollection("themes");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Themes - Her Majesty's Displeasure", "data-astro-cid-27sicj57": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-27sicj57> <h1 data-astro-cid-27sicj57>Themes</h1> <p data-astro-cid-27sicj57>Central themes and their exploration</p> <div class="items-grid" data-astro-cid-27sicj57> ${themes.map((theme) => renderTemplate`<div class="item-card" data-astro-cid-27sicj57> <h3 data-astro-cid-27sicj57><a${addAttribute(`/themes/${theme.slug}`, "href")} data-astro-cid-27sicj57>${theme.data.name}</a></h3> <p class="description" data-astro-cid-27sicj57>${theme.data.description}</p> <p class="exploration" data-astro-cid-27sicj57><strong data-astro-cid-27sicj57>How Explored:</strong> ${theme.data.how_explored}</p> ${theme.data.character_connections && theme.data.character_connections.length > 0 && renderTemplate`<p class="characters" data-astro-cid-27sicj57><strong data-astro-cid-27sicj57>Characters:</strong> ${theme.data.character_connections.join(", ")}</p>`} </div>`)} </div> <div class="back-link" data-astro-cid-27sicj57> <a href="/" data-astro-cid-27sicj57>← Back to Collections</a> </div> </div> ` })} `;
}, "/home/jk/dev/HerMajestysDispleasure/src/pages/themes/index.astro", void 0);

const $$file = "/home/jk/dev/HerMajestysDispleasure/src/pages/themes/index.astro";
const $$url = "/themes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
