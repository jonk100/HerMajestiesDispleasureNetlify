import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_DzFHpl4b.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DiHXFRQx.mjs';
import { $ as $$Layout } from '../../chunks/Layout_TenwalEc.mjs';
/* empty css                                     */
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const dialogue = await getCollection("dialogue");
  return dialogue.map((item) => ({
    params: { slug: item.slug },
    props: { item }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { item } = Astro2.props;
  const { Content } = await item.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${item.data.title} - Dialogue`, "data-astro-cid-qo2bfik7": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-qo2bfik7> <div class="header" data-astro-cid-qo2bfik7> <h1 data-astro-cid-qo2bfik7>${item.data.title}</h1> <div class="meta" data-astro-cid-qo2bfik7> ${item.data.characters && item.data.characters.length > 0 && renderTemplate`<span class="speaker" data-astro-cid-qo2bfik7> ${item.data.characters.map((char, index) => {
    const charPath = typeof char === "string" ? char : char.id;
    const charName = charPath.split("/").pop()?.replace(/-/g, " ");
    return renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-qo2bfik7": true }, { "default": async ($$result3) => renderTemplate`${charName}${index < item.data.characters.length - 1 ? ", " : ""}` })}`;
  })} </span>`} ${item.data.context && renderTemplate`<span class="context" data-astro-cid-qo2bfik7>${item.data.context}</span>`} </div> </div> <div class="dialogue-info" data-astro-cid-qo2bfik7> ${item.data.emotion && renderTemplate`<div class="emotion" data-astro-cid-qo2bfik7> <strong data-astro-cid-qo2bfik7>Emotion:</strong> ${item.data.emotion} </div>`} ${item.data.subtext && renderTemplate`<div class="subtext" data-astro-cid-qo2bfik7> <strong data-astro-cid-qo2bfik7>Subtext:</strong> ${item.data.subtext} </div>`} ${item.data.scene_reference && renderTemplate`<div class="scene-ref" data-astro-cid-qo2bfik7> <strong data-astro-cid-qo2bfik7>Scene Reference:</strong> ${item.data.scene_reference} </div>`} ${item.data.tags && item.data.tags.length > 0 && renderTemplate`<div class="tags-section" data-astro-cid-qo2bfik7> <strong data-astro-cid-qo2bfik7>Tags:</strong> <div class="tags" data-astro-cid-qo2bfik7> ${item.data.tags.map((tag) => renderTemplate`<span class="tag" data-astro-cid-qo2bfik7>${tag}</span>`)} </div> </div>`} </div> <div class="content" data-astro-cid-qo2bfik7> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-qo2bfik7": true })} </div> <div class="back-link" data-astro-cid-qo2bfik7> <a href="/dialogue" data-astro-cid-qo2bfik7>← Back to Dialogue</a> </div> </div> ` })} `;
}, "/home/jk/dev/HerMajestysDispleasure/src/pages/dialogue/[slug].astro", void 0);

const $$file = "/home/jk/dev/HerMajestysDispleasure/src/pages/dialogue/[slug].astro";
const $$url = "/dialogue/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
