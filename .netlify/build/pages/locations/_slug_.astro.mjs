import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DzFHpl4b.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DiHXFRQx.mjs';
import { $ as $$Layout } from '../../chunks/Layout_TenwalEc.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const locations = await getCollection("locations");
  return locations.map((location) => ({
    params: { slug: location.slug },
    props: { location }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { location } = Astro2.props;
  const { Content } = await location.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${location.data.name} - Locations`, "data-astro-cid-g54tvpik": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-g54tvpik> <div class="header" data-astro-cid-g54tvpik> <h1 data-astro-cid-g54tvpik>${location.data.name}</h1> <div class="meta" data-astro-cid-g54tvpik> <span class="type" data-astro-cid-g54tvpik>${location.data.type}</span> ${location.data.mood && renderTemplate`<span class="mood" data-astro-cid-g54tvpik>${location.data.mood}</span>`} </div> </div> <div class="location-info" data-astro-cid-g54tvpik> <p data-astro-cid-g54tvpik><strong data-astro-cid-g54tvpik>Description:</strong> ${location.data.description}</p> ${location.data.visual_notes && renderTemplate`<p data-astro-cid-g54tvpik><strong data-astro-cid-g54tvpik>Visual Notes:</strong> ${location.data.visual_notes}</p>`} ${location.data.practical_notes && renderTemplate`<p data-astro-cid-g54tvpik><strong data-astro-cid-g54tvpik>Practical Notes:</strong> ${location.data.practical_notes}</p>`} ${location.data.scenes_used && location.data.scenes_used.length > 0 && renderTemplate`<div class="scenes-section" data-astro-cid-g54tvpik> <strong data-astro-cid-g54tvpik>Used in Scenes:</strong> <div class="scenes" data-astro-cid-g54tvpik> ${location.data.scenes_used.map((scene) => renderTemplate`<span class="scene" data-astro-cid-g54tvpik>${scene}</span>`)} </div> </div>`} ${location.data.reference_images && location.data.reference_images.length > 0 && renderTemplate`<div class="images-section" data-astro-cid-g54tvpik> <strong data-astro-cid-g54tvpik>Reference Images:</strong> <div class="images" data-astro-cid-g54tvpik> ${location.data.reference_images.map((image) => renderTemplate`<span class="image" data-astro-cid-g54tvpik>${image}</span>`)} </div> </div>`} </div> <div class="content" data-astro-cid-g54tvpik> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-g54tvpik": true })} </div> <div class="back-link" data-astro-cid-g54tvpik> <a href="/locations" data-astro-cid-g54tvpik>← Back to Locations</a> </div> </div> ` })} `;
}, "/home/jk/dev/HerMajestysDispleasure/src/pages/locations/[slug].astro", void 0);

const $$file = "/home/jk/dev/HerMajestysDispleasure/src/pages/locations/[slug].astro";
const $$url = "/locations/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
