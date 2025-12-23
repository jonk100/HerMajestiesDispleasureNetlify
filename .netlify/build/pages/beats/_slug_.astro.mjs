import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DzFHpl4b.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DiHXFRQx.mjs';
import { $ as $$Layout } from '../../chunks/Layout_TenwalEc.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const beats = await getCollection("beats");
  return beats.map((beat) => ({
    params: { slug: beat.slug },
    props: { beat }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { beat } = Astro2.props;
  const { Content } = await beat.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${beat.data.title} - Story Beats`, "data-astro-cid-sdi3xzx7": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-sdi3xzx7> <div class="header" data-astro-cid-sdi3xzx7> <h1 data-astro-cid-sdi3xzx7>${beat.data.title}</h1> <div class="meta" data-astro-cid-sdi3xzx7> <span class="act" data-astro-cid-sdi3xzx7>Act ${beat.data.act}</span> <span class="type" data-astro-cid-sdi3xzx7>${beat.data.beat_type}</span> </div> </div> <div class="beat-info" data-astro-cid-sdi3xzx7> <div class="description" data-astro-cid-sdi3xzx7> <strong data-astro-cid-sdi3xzx7>Description:</strong> ${beat.data.description} </div> ${beat.data.page_target && renderTemplate`<div class="page-target" data-astro-cid-sdi3xzx7> <strong data-astro-cid-sdi3xzx7>Target Pages:</strong> ${beat.data.page_target} </div>`} ${beat.data.notes && renderTemplate`<div class="notes" data-astro-cid-sdi3xzx7> <strong data-astro-cid-sdi3xzx7>Notes:</strong> ${beat.data.notes} </div>`} ${beat.data.characters_involved && beat.data.characters_involved.length > 0 && renderTemplate`<div class="characters" data-astro-cid-sdi3xzx7> <strong data-astro-cid-sdi3xzx7>Characters Involved:</strong> <div class="character-list" data-astro-cid-sdi3xzx7> ${beat.data.characters_involved.map((character) => renderTemplate`<span class="character" data-astro-cid-sdi3xzx7>${character}</span>`)} </div> </div>`} ${beat.data.themes && beat.data.themes.length > 0 && renderTemplate`<div class="themes" data-astro-cid-sdi3xzx7> <strong data-astro-cid-sdi3xzx7>Themes:</strong> <div class="theme-list" data-astro-cid-sdi3xzx7> ${beat.data.themes.map((theme) => renderTemplate`<span class="theme" data-astro-cid-sdi3xzx7>${theme}</span>`)} </div> </div>`} </div> <div class="content" data-astro-cid-sdi3xzx7> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-sdi3xzx7": true })} </div> <div class="back-link" data-astro-cid-sdi3xzx7> <a href="/beats" data-astro-cid-sdi3xzx7>← Back to Story Beats</a> </div> </div> ` })} `;
}, "/home/jk/dev/HerMajestysDispleasure/src/pages/beats/[slug].astro", void 0);

const $$file = "/home/jk/dev/HerMajestysDispleasure/src/pages/beats/[slug].astro";
const $$url = "/beats/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
