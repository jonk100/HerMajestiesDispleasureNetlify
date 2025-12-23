import { c as createComponent, a as createAstro, d as addAttribute, e as renderSlot, p as renderHead, b as renderTemplate, m as maybeRenderHead, r as renderComponent } from './astro/server_DzFHpl4b.mjs';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Head;
  const title = Astro2.props;
  return renderTemplate`<head><title>${title}</title><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderSlot($$result, $$slots["default"])}${renderHead()}</head>`;
}, "/home/jk/dev/HerMajestysDispleasure/src/layout/Head.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-200"> <nav class="flex justify-center gap-4 p-4"> <a href="/beats">Beats</a> <a href="/characters">Characters</a> <a href="/dialogue">Dialogue</a> <a href="/scenes">Scenes</a> <a href="/locations">Locations</a> <a href="/research">Research</a> <a href="/themes">Themes</a> </nav> </footer>`;
}, "/home/jk/dev/HerMajestysDispleasure/src/layout/Footer.astro", void 0);

const $$NavigationHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-gray-200"> <nav class="flex justify-center gap-4 p-4"> <a href="/beats">Beats</a> <a href="/characters">Characters</a> <a href="/dialogue">Dialogue</a> <a href="/scenes">Scenes</a> <a href="/locations">Locations</a> <a href="/research">Research</a> <a href="/themes">Themes</a> </nav> </header>`;
}, "/home/jk/dev/HerMajestysDispleasure/src/layout/NavigationHeader.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> ${renderComponent($$result, "Head", $$Head, { "title": title })}${maybeRenderHead()}<body> ${renderComponent($$result, "NavigationHeader", $$NavigationHeader, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/jk/dev/HerMajestysDispleasure/src/layout/Layout.astro", void 0);

export { $$Layout as $ };
