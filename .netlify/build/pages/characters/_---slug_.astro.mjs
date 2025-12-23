import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, e as renderSlot, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DzFHpl4b.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DiHXFRQx.mjs';
import { $ as $$Layout } from '../../chunks/Layout_TenwalEc.mjs';
/* empty css                                     */
import { g as getCharacterStats } from '../../chunks/characterStats_BXaZJQvI.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro();
const $$CharactersLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CharactersLayout;
  const { title } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/jk/dev/HerMajestysDispleasure/src/layout/collections/CharactersLayout.astro", void 0);

const $$Astro$1 = createAstro();
const $$CharacterStats = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CharacterStats;
  const { characterSlug, showSceneDetails = false } = Astro2.props;
  const stats = await getCharacterStats(characterSlug);
  if (!stats) {
    return null;
  }
  const acts = [1, 2, 3];
  return renderTemplate`${stats && renderTemplate`${maybeRenderHead()}<div class="character-stats" data-astro-cid-2xbbjaoq><h3 data-astro-cid-2xbbjaoq>Performance Statistics</h3><div class="stats-grid" data-astro-cid-2xbbjaoq><div class="stat-card highlight" data-astro-cid-2xbbjaoq><div class="stat-label" data-astro-cid-2xbbjaoq>Total Lines</div><div class="stat-value" data-astro-cid-2xbbjaoq>${stats.totalLines}</div></div><div class="stat-card" data-astro-cid-2xbbjaoq><div class="stat-label" data-astro-cid-2xbbjaoq>Scene Appearances</div><div class="stat-value" data-astro-cid-2xbbjaoq>${stats.totalScenes}</div></div>${stats.firstAppearance && renderTemplate`<div class="stat-card" data-astro-cid-2xbbjaoq><div class="stat-label" data-astro-cid-2xbbjaoq>First Appearance</div><div class="stat-value" data-astro-cid-2xbbjaoq><a${addAttribute(`/scenes/${stats.firstAppearance.slug}`, "href")} data-astro-cid-2xbbjaoq>
Act ${stats.firstAppearance.act}, Scene ${stats.firstAppearance.sceneNumber}</a></div><div class="stat-detail" data-astro-cid-2xbbjaoq>${stats.firstAppearance.title}</div></div>`}${stats.lastAppearance && renderTemplate`<div class="stat-card" data-astro-cid-2xbbjaoq><div class="stat-label" data-astro-cid-2xbbjaoq>Last Appearance</div><div class="stat-value" data-astro-cid-2xbbjaoq><a${addAttribute(`/scenes/${stats.lastAppearance.slug}`, "href")} data-astro-cid-2xbbjaoq>
Act ${stats.lastAppearance.act}, Scene ${stats.lastAppearance.sceneNumber}</a></div><div class="stat-detail" data-astro-cid-2xbbjaoq>${stats.lastAppearance.title}</div></div>`}</div><div class="act-breakdown" x-data="{ expandedAct: null }" data-astro-cid-2xbbjaoq><h4 data-astro-cid-2xbbjaoq>Breakdown by Act</h4>${acts.map((act) => {
    const linesByActMap = stats.linesByAct instanceof Map ? stats.linesByAct : new Map(stats.linesByAct);
    const scenesByActMap = stats.scenesByAct instanceof Map ? stats.scenesByAct : new Map(stats.scenesByAct);
    const actLines = linesByActMap.get(act) || 0;
    const actScenes = scenesByActMap.get(act) || 0;
    const actAppearances = stats.sceneAppearances.filter((s) => s.act === act);
    return renderTemplate`<div class="act-section" data-astro-cid-2xbbjaoq><button class="act-header"${addAttribute(`expandedAct = expandedAct === ${act} ? null : ${act}`, "@click")}${addAttribute(`{ 'expanded': expandedAct === ${act} }`, ":class")} data-astro-cid-2xbbjaoq><div class="act-info" data-astro-cid-2xbbjaoq><span class="act-title" data-astro-cid-2xbbjaoq>Act ${act}</span><div class="act-stats-row" data-astro-cid-2xbbjaoq><span class="act-stat" data-astro-cid-2xbbjaoq>${actLines} lines</span><span class="act-stat" data-astro-cid-2xbbjaoq>${actScenes} scenes</span></div></div><svg class="expand-icon"${addAttribute(`{ 'rotated': expandedAct === ${act} }`, ":class")} width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-astro-cid-2xbbjaoq><path d="M4.427 9.573L8 6l3.573 3.573a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708z" data-astro-cid-2xbbjaoq></path></svg></button>${showSceneDetails && actAppearances.length > 0 && renderTemplate`<div class="act-details"${addAttribute(`expandedAct === ${act}`, "x-show")} x-transition:enter="transition ease-out duration-200" x-transition:enter-start="opacity-0 max-h-0" x-transition:enter-end="opacity-100 max-h-screen" x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100 max-h-screen" x-transition:leave-end="opacity-0 max-h-0" data-astro-cid-2xbbjaoq><div class="scene-list" data-astro-cid-2xbbjaoq>${actAppearances.map((scene) => renderTemplate`<div class="scene-item" data-astro-cid-2xbbjaoq><a${addAttribute(`/scenes/${scene.slug}`, "href")} class="scene-link" data-astro-cid-2xbbjaoq><span class="scene-number" data-astro-cid-2xbbjaoq>Scene ${scene.sceneNumber}</span><span class="scene-title" data-astro-cid-2xbbjaoq>${scene.title}</span></a><span class="scene-lines" data-astro-cid-2xbbjaoq>${scene.lines} lines</span></div>`)}</div></div>`}</div>`;
  })}</div></div>`}`;
}, "/home/jk/dev/HerMajestysDispleasure/src/components/CharacterStats.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const characters = await getCollection("characters");
  return characters.map((character) => ({
    params: { slug: character.slug },
    props: { character }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { character } = Astro2.props;
  const { Content } = await character.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$CharactersLayout, { "title": `${character.data.name} - Characters`, "data-astro-cid-qenpyihk": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-qenpyihk> <div class="header" data-astro-cid-qenpyihk> <h1 data-astro-cid-qenpyihk>${character.data.name}</h1> <div class="meta" data-astro-cid-qenpyihk> <span class="role" data-astro-cid-qenpyihk>${character.data.role}</span> <span class="type" data-astro-cid-qenpyihk>${character.data.character_type}</span> </div> </div> <div class="character-info" data-astro-cid-qenpyihk> ${character.data.occupation && renderTemplate`<p data-astro-cid-qenpyihk> <strong data-astro-cid-qenpyihk>Occupation:</strong> ${character.data.occupation} </p>`} ${character.data.age && renderTemplate`<div class="age-info" data-astro-cid-qenpyihk> <strong data-astro-cid-qenpyihk>Age:</strong> ${character.data.age.act_1 && renderTemplate`<span data-astro-cid-qenpyihk>Act 1: ${character.data.age.act_1}</span>`} ${character.data.age.act_2 && renderTemplate`<span data-astro-cid-qenpyihk>Act 2: ${character.data.age.act_2}</span>`} ${character.data.age.act_3 && renderTemplate`<span data-astro-cid-qenpyihk>Act 3: ${character.data.age.act_3}</span>`} </div>`} <!-- {
        character.data.first_appearance && (
          <p>
            <strong>First Appearance:</strong> {character.data.first_appearance}
          </p>
        )
      }

      {
        character.data.last_appearance && (
          <p>
            <strong>Last Appearance:</strong> {character.data.last_appearance}
          </p>
        )
      } --> </div> ${renderComponent($$result2, "CharacterStats", $$CharacterStats, { "characterSlug": character.slug, "showSceneDetails": true, "data-astro-cid-qenpyihk": true })} <div class="content" data-astro-cid-qenpyihk> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-qenpyihk": true })} </div> <div class="back-link" data-astro-cid-qenpyihk> <a href="/characters" data-astro-cid-qenpyihk>← Back to Characters</a> </div> </div> ` })} `;
}, "/home/jk/dev/HerMajestysDispleasure/src/pages/characters/[...slug].astro", void 0);

const $$file = "/home/jk/dev/HerMajestysDispleasure/src/pages/characters/[...slug].astro";
const $$url = "/characters/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
