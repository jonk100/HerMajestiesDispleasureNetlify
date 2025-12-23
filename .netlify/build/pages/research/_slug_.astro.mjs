import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, e as renderSlot, m as maybeRenderHead } from '../../chunks/astro/server_DzFHpl4b.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DiHXFRQx.mjs';
import { $ as $$Layout } from '../../chunks/Layout_TenwalEc.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ResearchLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ResearchLayout;
  const { title } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/jk/dev/HerMajestysDispleasure/src/layout/collections/ResearchLayout.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const research = await getCollection("research");
  return research.map((item) => ({
    params: { slug: item.slug },
    props: { item }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { item } = Astro2.props;
  const { Content } = await item.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$ResearchLayout, { "title": `${item.data.title} - Research`, "data-astro-cid-xazq6mwn": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-xazq6mwn> <div class="header" data-astro-cid-xazq6mwn> <h1 data-astro-cid-xazq6mwn>${item.data.title}</h1> <div class="meta" data-astro-cid-xazq6mwn> <span class="category" data-astro-cid-xazq6mwn>${item.data.category}</span> <span class="reliability" data-astro-cid-xazq6mwn>${item.data.reliability}</span> </div> </div> <div class="research-info" data-astro-cid-xazq6mwn> ${item.data.date_range && renderTemplate`<p data-astro-cid-xazq6mwn> <strong data-astro-cid-xazq6mwn>Period:</strong> ${item.data.date_range} </p>`} ${item.data.source && renderTemplate`<p data-astro-cid-xazq6mwn> <strong data-astro-cid-xazq6mwn>Source:</strong> ${item.data.source} </p>`} <p data-astro-cid-xazq6mwn><strong data-astro-cid-xazq6mwn>Relevance:</strong> ${item.data.relevance}</p> ${item.data.tags && item.data.tags.length > 0 && renderTemplate`<div class="tags-section" data-astro-cid-xazq6mwn> <strong data-astro-cid-xazq6mwn>Tags:</strong> <div class="tags" data-astro-cid-xazq6mwn> ${item.data.tags.map((tag) => renderTemplate`<span class="tag" data-astro-cid-xazq6mwn>${tag}</span>`)} </div> </div>`} </div> <div class="content" data-astro-cid-xazq6mwn> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-xazq6mwn": true })} </div> <div class="back-link" data-astro-cid-xazq6mwn> <a href="/research" data-astro-cid-xazq6mwn>← Back to Research</a> </div> </div> ` })} `;
}, "/home/jk/dev/HerMajestysDispleasure/src/pages/research/[slug].astro", void 0);

const $$file = "/home/jk/dev/HerMajestysDispleasure/src/pages/research/[slug].astro";
const $$url = "/research/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
