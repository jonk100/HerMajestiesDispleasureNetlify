import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DzFHpl4b.mjs';
import { $ as $$Layout } from '../../chunks/Layout_TenwalEc.mjs';
import { c as calculateAllCharacterStats } from '../../chunks/characterStats_BXaZJQvI.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DiHXFRQx.mjs';
/* empty css                                              */
export { renderers } from '../../renderers.mjs';

const $$CharacterStats = createComponent(async ($$result, $$props, $$slots) => {
  const allStats = await calculateAllCharacterStats();
  const characters = await getCollection("characters");
  const characterStatsArray = Object.values(allStats).filter((stat) => stat.totalScenes > 0).map((stat) => {
    const character = characters.find((c) => c.slug === stat.characterSlug);
    return {
      characterSlug: stat.characterSlug,
      characterName: stat.characterName,
      totalLines: stat.totalLines,
      totalScenes: stat.totalScenes,
      linesByAct: Array.from(stat.linesByAct.entries()),
      scenesByAct: Array.from(stat.scenesByAct.entries()),
      sceneAppearances: stat.sceneAppearances,
      firstAppearance: stat.firstAppearance,
      lastAppearance: stat.lastAppearance,
      role: character?.data.role || "unknown",
      characterType: character?.data.character_type || "unknown"
    };
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Character Statistics", "data-astro-cid-gzrex7zv": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stats-page" data-astro-cid-gzrex7zv> <div class="page-header" data-astro-cid-gzrex7zv> <h1 data-astro-cid-gzrex7zv>Character Statistics</h1> <p class="subtitle" data-astro-cid-gzrex7zv>Performance analytics for all characters in the screenplay</p> </div> <div class="stats-container"${addAttribute(`{
      characters: ${JSON.stringify(characterStatsArray)},
      sortBy: 'totalLines',
      sortDirection: 'desc',
      filterRole: 'all',
      filterAct: 'all',
      get filteredAndSortedCharacters() {
        let filtered = this.characters;
        
        if (this.filterRole !== 'all') {
          filtered = filtered.filter(c => c.role === this.filterRole);
        }
        
        if (this.filterAct !== 'all') {
          const act = parseInt(this.filterAct);
          filtered = filtered.filter(c => c.scenesByAct.some(([a]) => a === act));
        }
        
        filtered.sort((a, b) => {
          let aVal = a[this.sortBy];
          let bVal = b[this.sortBy];
          
          if (this.sortBy === 'characterName') {
            aVal = aVal.toLowerCase();
            bVal = bVal.toLowerCase();
          }
          
          if (this.sortDirection === 'asc') {
            return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
          } else {
            return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
          }
        });
        
        return filtered;
      }
    }`, "x-data")} data-astro-cid-gzrex7zv> <div class="controls" data-astro-cid-gzrex7zv> <div class="control-group" data-astro-cid-gzrex7zv> <label for="sort-by" data-astro-cid-gzrex7zv>Sort by:</label> <select id="sort-by" x-model="sortBy" data-astro-cid-gzrex7zv> <option value="totalLines" data-astro-cid-gzrex7zv>Total Lines</option> <option value="totalScenes" data-astro-cid-gzrex7zv>Scene Appearances</option> <option value="characterName" data-astro-cid-gzrex7zv>Character Name</option> </select> </div> <div class="control-group" data-astro-cid-gzrex7zv> <label for="sort-direction" data-astro-cid-gzrex7zv>Direction:</label> <select id="sort-direction" x-model="sortDirection" data-astro-cid-gzrex7zv> <option value="desc" data-astro-cid-gzrex7zv>Descending</option> <option value="asc" data-astro-cid-gzrex7zv>Ascending</option> </select> </div> <div class="control-group" data-astro-cid-gzrex7zv> <label for="filter-role" data-astro-cid-gzrex7zv>Role:</label> <select id="filter-role" x-model="filterRole" data-astro-cid-gzrex7zv> <option value="all" data-astro-cid-gzrex7zv>All Roles</option> <option value="protagonist" data-astro-cid-gzrex7zv>Protagonist</option> <option value="antagonist" data-astro-cid-gzrex7zv>Antagonist</option> <option value="supporting" data-astro-cid-gzrex7zv>Supporting</option> <option value="minor" data-astro-cid-gzrex7zv>Minor</option> </select> </div> <div class="control-group" data-astro-cid-gzrex7zv> <label for="filter-act" data-astro-cid-gzrex7zv>Act:</label> <select id="filter-act" x-model="filterAct" data-astro-cid-gzrex7zv> <option value="all" data-astro-cid-gzrex7zv>All Acts</option> <option value="1" data-astro-cid-gzrex7zv>Act 1</option> <option value="2" data-astro-cid-gzrex7zv>Act 2</option> <option value="3" data-astro-cid-gzrex7zv>Act 3</option> </select> </div> </div> <div class="stats-summary" data-astro-cid-gzrex7zv> <div class="summary-card" data-astro-cid-gzrex7zv> <div class="summary-label" data-astro-cid-gzrex7zv>Total Characters</div> <div class="summary-value" x-text="filteredAndSortedCharacters.length" data-astro-cid-gzrex7zv></div> </div> <div class="summary-card" data-astro-cid-gzrex7zv> <div class="summary-label" data-astro-cid-gzrex7zv>Total Lines</div> <div class="summary-value" x-text="filteredAndSortedCharacters.reduce((sum, c) => sum + c.totalLines, 0)" data-astro-cid-gzrex7zv></div> </div> <div class="summary-card" data-astro-cid-gzrex7zv> <div class="summary-label" data-astro-cid-gzrex7zv>Avg Lines/Character</div> <div class="summary-value" x-text="Math.round(filteredAndSortedCharacters.reduce((sum, c) => sum + c.totalLines, 0) / filteredAndSortedCharacters.length || 0)" data-astro-cid-gzrex7zv></div> </div> </div> <div class="character-table" data-astro-cid-gzrex7zv> <table data-astro-cid-gzrex7zv> <thead data-astro-cid-gzrex7zv> <tr data-astro-cid-gzrex7zv> <th @click="sortBy = 'characterName'; sortDirection = sortDirection === 'asc' ? 'desc' : 'asc'" class="sortable" data-astro-cid-gzrex7zv>
Character
<span class="sort-indicator" x-show="sortBy === 'characterName'" x-text="sortDirection === 'asc' ? '▲' : '▼'" data-astro-cid-gzrex7zv></span> </th> <th data-astro-cid-gzrex7zv>Role</th> <th @click="sortBy = 'totalLines'; sortDirection = sortDirection === 'asc' ? 'desc' : 'asc'" class="sortable" data-astro-cid-gzrex7zv>
Total Lines
<span class="sort-indicator" x-show="sortBy === 'totalLines'" x-text="sortDirection === 'asc' ? '▲' : '▼'" data-astro-cid-gzrex7zv></span> </th> <th @click="sortBy = 'totalScenes'; sortDirection = sortDirection === 'asc' ? 'desc' : 'asc'" class="sortable" data-astro-cid-gzrex7zv>
Scenes
<span class="sort-indicator" x-show="sortBy === 'totalScenes'" x-text="sortDirection === 'asc' ? '▲' : '▼'" data-astro-cid-gzrex7zv></span> </th> <th data-astro-cid-gzrex7zv>Act 1</th> <th data-astro-cid-gzrex7zv>Act 2</th> <th data-astro-cid-gzrex7zv>Act 3</th> <th data-astro-cid-gzrex7zv>First/Last</th> </tr> </thead> <tbody data-astro-cid-gzrex7zv> <template x-for="char in filteredAndSortedCharacters" :key="char.characterSlug" data-astro-cid-gzrex7zv> <tr data-astro-cid-gzrex7zv> <td data-astro-cid-gzrex7zv> <a :href="\`/characters/\${char.characterSlug}\`" class="character-link" x-text="char.characterName" data-astro-cid-gzrex7zv></a> </td> <td data-astro-cid-gzrex7zv> <span class="role-badge" :class="\`role-\${char.role}\`" x-text="char.role" data-astro-cid-gzrex7zv></span> </td> <td class="numeric-cell" data-astro-cid-gzrex7zv> <span class="highlight-value" x-text="char.totalLines" data-astro-cid-gzrex7zv></span> </td> <td class="numeric-cell" x-text="char.totalScenes" data-astro-cid-gzrex7zv></td> <td class="numeric-cell" data-astro-cid-gzrex7zv> <span x-text="char.linesByAct.find(([act]) => act === 1)?.[1] || 0" data-astro-cid-gzrex7zv></span> <span class="scene-count" x-text="\`(\${char.scenesByAct.find(([act]) => act === 1)?.[1] || 0})\`" data-astro-cid-gzrex7zv></span> </td> <td class="numeric-cell" data-astro-cid-gzrex7zv> <span x-text="char.linesByAct.find(([act]) => act === 2)?.[1] || 0" data-astro-cid-gzrex7zv></span> <span class="scene-count" x-text="\`(\${char.scenesByAct.find(([act]) => act === 2)?.[1] || 0})\`" data-astro-cid-gzrex7zv></span> </td> <td class="numeric-cell" data-astro-cid-gzrex7zv> <span x-text="char.linesByAct.find(([act]) => act === 3)?.[1] || 0" data-astro-cid-gzrex7zv></span> <span class="scene-count" x-text="\`(\${char.scenesByAct.find(([act]) => act === 3)?.[1] || 0})\`" data-astro-cid-gzrex7zv></span> </td> <td class="appearance-cell" data-astro-cid-gzrex7zv> <template x-if="char.firstAppearance" data-astro-cid-gzrex7zv> <div data-astro-cid-gzrex7zv> <div class="appearance-info" data-astro-cid-gzrex7zv> <span class="appearance-label" data-astro-cid-gzrex7zv>First:</span> <a :href="\`/scenes/\${char.firstAppearance.slug}\`" x-text="\`\${char.firstAppearance.act}.\${char.firstAppearance.sceneNumber}\`" data-astro-cid-gzrex7zv></a> </div> <div class="appearance-info" x-show="char.lastAppearance && char.firstAppearance.slug !== char.lastAppearance.slug" data-astro-cid-gzrex7zv> <span class="appearance-label" data-astro-cid-gzrex7zv>Last:</span> <a :href="\`/scenes/\${char.lastAppearance.slug}\`" x-text="\`\${char.lastAppearance.act}.\${char.lastAppearance.sceneNumber}\`" data-astro-cid-gzrex7zv></a> </div> </div> </template> </td> </tr> </template> </tbody> </table> </div> </div> </div> ` })} `;
}, "/home/jk/dev/HerMajestysDispleasure/src/pages/stats/character-stats.astro", void 0);

const $$file = "/home/jk/dev/HerMajestysDispleasure/src/pages/stats/character-stats.astro";
const $$url = "/stats/character-stats";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CharacterStats,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
