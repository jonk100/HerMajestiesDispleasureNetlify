import { c as createComponent, a as createAstro, m as maybeRenderHead, e as renderSlot, b as renderTemplate } from './astro/server_DzFHpl4b.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$Screenplay = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Screenplay;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="screenplay"> ${title && renderTemplate`<h1 class="screenplay-title">${title}</h1>`} ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/home/jk/dev/HerMajestysDispleasure/src/components/screenplay/Screenplay.astro", void 0);

const $$Scene = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="scene">${renderSlot($$result, $$slots["default"])}</div>`;
}, "/home/jk/dev/HerMajestysDispleasure/src/components/screenplay/Scene.astro", void 0);

const $$Action = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="action">${renderSlot($$result, $$slots["default"])}</div>`;
}, "/home/jk/dev/HerMajestysDispleasure/src/components/screenplay/Action.astro", void 0);

const $$Character = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="character">${renderSlot($$result, $$slots["default"])}</div>`;
}, "/home/jk/dev/HerMajestysDispleasure/src/components/screenplay/Character.astro", void 0);

const $$Dialogue = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="dialogue">${renderSlot($$result, $$slots["default"])}</div>`;
}, "/home/jk/dev/HerMajestysDispleasure/src/components/screenplay/Dialogue.astro", void 0);

const $$Parenthetical = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="parenthetical">(${renderSlot($$result, $$slots["default"])})</div>`;
}, "/home/jk/dev/HerMajestysDispleasure/src/components/screenplay/Parenthetical.astro", void 0);

const $$Transition = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="transition">${renderSlot($$result, $$slots["default"])}</div>`;
}, "/home/jk/dev/HerMajestysDispleasure/src/components/screenplay/Transition.astro", void 0);

const $$ActBreak = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="act-break">${renderSlot($$result, $$slots["default"])}</div>`;
}, "/home/jk/dev/HerMajestysDispleasure/src/components/screenplay/ActBreak.astro", void 0);

export { $$ActBreak as $, $$Transition as a, $$Parenthetical as b, $$Dialogue as c, $$Character as d, $$Action as e, $$Scene as f, $$Screenplay as g };
