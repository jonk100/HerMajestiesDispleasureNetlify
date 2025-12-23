import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DzFHpl4b.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DiHXFRQx.mjs';
import { $ as $$Layout } from '../../chunks/Layout_TenwalEc.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const themes = await getCollection("themes");
  return themes.map((theme) => ({
    params: { slug: theme.slug },
    props: { theme }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { theme } = Astro2.props;
  const { Content } = await theme.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${theme.data.name} - Themes`, "data-astro-cid-mxaipuk2": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-mxaipuk2> <div class="header" data-astro-cid-mxaipuk2> <h1 data-astro-cid-mxaipuk2>${theme.data.name}</h1> </div> <div class="theme-info" data-astro-cid-mxaipuk2> <div class="description" data-astro-cid-mxaipuk2> <strong data-astro-cid-mxaipuk2>Description:</strong> ${theme.data.description} </div> <div class="exploration" data-astro-cid-mxaipuk2> <strong data-astro-cid-mxaipuk2>How Explored:</strong> ${theme.data.how_explored} </div> ${theme.data.character_connections && theme.data.character_connections.length > 0 && renderTemplate`<div class="characters" data-astro-cid-mxaipuk2> <strong data-astro-cid-mxaipuk2>Character Connections:</strong> <div class="character-list" data-astro-cid-mxaipuk2> ${theme.data.character_connections.map((character) => renderTemplate`<span class="character" data-astro-cid-mxaipuk2>${character}</span>`)} </div> </div>`} ${theme.data.scene_references && theme.data.scene_references.length > 0 && renderTemplate`<div class="scenes" data-astro-cid-mxaipuk2> <strong data-astro-cid-mxaipuk2>Scene References:</strong> <div class="scene-list" data-astro-cid-mxaipuk2> ${theme.data.scene_references.map((scene) => renderTemplate`<span class="scene" data-astro-cid-mxaipuk2>${scene}</span>`)} </div> </div>`} ${theme.data.symbols && theme.data.symbols.length > 0 && renderTemplate`<div class="symbols" data-astro-cid-mxaipuk2> <strong data-astro-cid-mxaipuk2>Symbols:</strong> <div class="symbol-list" data-astro-cid-mxaipuk2> ${theme.data.symbols.map((symbol) => renderTemplate`<span class="symbol" data-astro-cid-mxaipuk2>${symbol}</span>`)} </div> </div>`} </div> <div class="content" data-astro-cid-mxaipuk2> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-mxaipuk2": true })} </div> <div class="back-link" data-astro-cid-mxaipuk2> <a href="/themes" data-astro-cid-mxaipuk2>← Back to Themes</a> </div> </div> ` })} `;
}, "/home/jk/dev/HerMajestysDispleasure/src/pages/themes/[slug].astro", void 0);

const $$file = "/home/jk/dev/HerMajestysDispleasure/src/pages/themes/[slug].astro";
const $$url = "/themes/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
