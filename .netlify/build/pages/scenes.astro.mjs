import { c as createComponent, a as createAstro, m as maybeRenderHead, b as renderTemplate, d as addAttribute, r as renderComponent, s as spreadAttributes } from '../chunks/astro/server_DzFHpl4b.mjs';
import { g as getCollection } from '../chunks/_astro_content_DiHXFRQx.mjs';
import { $ as $$Layout } from '../chunks/Layout_TenwalEc.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ScreentimeCalculator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ScreentimeCalculator;
  const {
    showCumulative = true,
    actFilter
  } = Astro2.props;
  const scenes = await getCollection("scenes");
  const sortedScenes = scenes.sort((a, b) => {
    if (a.data.act !== b.data.act) return a.data.act - b.data.act;
    if (a.data.sequence !== b.data.sequence)
      return a.data.sequence - b.data.sequence;
    return a.data.scene_number - b.data.scene_number;
  });
  function calculateScreentime(scenes2) {
    const scenesByAct = /* @__PURE__ */ new Map();
    const actTotals = /* @__PURE__ */ new Map();
    const cumulativeByAct = /* @__PURE__ */ new Map();
    scenes2.forEach((scene) => {
      const act = scene.data.act;
      const pageCount = scene.data.page_count || 0;
      if (!scenesByAct.has(act)) {
        scenesByAct.set(act, []);
      }
      scenesByAct.get(act).push(scene);
      const currentTotal = actTotals.get(act) || 0;
      actTotals.set(act, currentTotal + pageCount);
    });
    let runningTotal = 0;
    Array.from(actTotals.keys()).sort((a, b) => a - b).forEach((act) => {
      runningTotal += actTotals.get(act) || 0;
      cumulativeByAct.set(act, runningTotal);
    });
    return {
      scenesByAct,
      actTotals,
      cumulativeByAct,
      totalScreentime: runningTotal
    };
  }
  const stats = calculateScreentime(sortedScenes);
  function formatTime(minutes) {
    if (minutes < 60) {
      return `${minutes}m`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
  }
  return renderTemplate`${maybeRenderHead()}<div class="screentime-calculator" x-data="{ expandedActs: new Set() }" data-astro-cid-qdn4rh7e> <!-- Collapsible Act Sections --> <section class="act-sections" data-astro-cid-qdn4rh7e> <h3 data-astro-cid-qdn4rh7e>Screentime by Act</h3> ${Array.from(stats.scenesByAct.entries()).sort(([a], [b]) => a - b).filter(([act]) => !actFilter || act === actFilter).map(([act, actScenes]) => {
    const actTotal = stats.actTotals.get(act) || 0;
    const cumulativeTotal = stats.cumulativeByAct.get(act) || 0;
    return renderTemplate`<div class="act-section" x-data="{ isExpanded: false }" data-astro-cid-qdn4rh7e> <button class="act-header" @click="isExpanded = !isExpanded" :class="{ 'expanded': isExpanded }" data-astro-cid-qdn4rh7e> <div class="act-info" data-astro-cid-qdn4rh7e> <span class="act-title" data-astro-cid-qdn4rh7e>Act ${act}</span> <span class="act-stats" data-astro-cid-qdn4rh7e> ${formatTime(actTotal)} ${showCumulative && renderTemplate`<span class="cumulative-note" data-astro-cid-qdn4rh7e>
(cumulative: ${formatTime(cumulativeTotal)})
</span>`} </span> </div> <svg class="expand-icon" :class="{ 'rotated': isExpanded }" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-astro-cid-qdn4rh7e> <path d="M4.427 9.573L8 6l3.573 3.573a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708z" data-astro-cid-qdn4rh7e></path> </svg> </button> <div class="act-scenes" x-show="isExpanded" x-transition:enter="transition ease-out duration-200" x-transition:enter-start="opacity-0 max-h-0" x-transition:enter-end="opacity-100 max-h-screen" x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100 max-h-screen" x-transition:leave-end="opacity-0 max-h-0" data-astro-cid-qdn4rh7e> <div class="scene-list" data-astro-cid-qdn4rh7e> ${actScenes.map((scene) => renderTemplate`<div class="scene-item" data-astro-cid-qdn4rh7e> <span class="scene-info" data-astro-cid-qdn4rh7e>
Scene ${scene.data.scene_number}: ${scene.data.title} </span> <span class="screentime" data-astro-cid-qdn4rh7e> ${formatTime(scene.data.page_count || 0)} </span> </div>`)} </div> </div> </div>`;
  })} </section> <!-- Total Screentime --> <section class="total-screentime" data-astro-cid-qdn4rh7e> <div class="total-item" data-astro-cid-qdn4rh7e> <span class="total-label" data-astro-cid-qdn4rh7e>Total Screenplay Runtime</span> <span class="screentime total" data-astro-cid-qdn4rh7e>${formatTime(stats.totalScreentime)}</span> </div> </section> </div> `;
}, "/home/jk/dev/HerMajestysDispleasure/src/components/ScreentimeCalculator.astro", void 0);

const $$SceneFilter = createComponent(async ($$result, $$props, $$slots) => {
  const scenes = await getCollection("scenes");
  const acts = [...new Set(scenes.map((scene) => scene.data.act))].sort((a, b) => a - b);
  const sequences = [...new Set(scenes.map((scene) => scene.data.sequence))].sort((a, b) => a - b);
  const allLocations = scenes.flatMap((scene) => {
    if (Array.isArray(scene.data.location)) {
      return scene.data.location.map((loc) => {
        if (typeof loc === "string") {
          return loc;
        } else if (loc && typeof loc === "object" && "id" in loc) {
          return loc.id;
        } else {
          return String(loc);
        }
      });
    }
    const singleLoc = scene.data.location;
    if (singleLoc) {
      if (typeof singleLoc === "string") {
        return [singleLoc];
      } else if (singleLoc && typeof singleLoc === "object" && "id" in singleLoc) {
        return [singleLoc.id];
      } else {
        return [String(singleLoc)];
      }
    }
    return [];
  });
  const locations = [...new Set(allLocations)].sort();
  const allCharacters = scenes.flatMap((scene) => {
    return scene.data.characters ? scene.data.characters.map((char) => {
      if (typeof char === "string") {
        return char;
      } else if (char && typeof char === "object" && "id" in char) {
        return char.id;
      } else {
        return String(char);
      }
    }) : [];
  });
  const characters = [...new Set(allCharacters)].sort();
  const actFilters = {
    all: "All Acts",
    ...Object.fromEntries(acts.map((act) => [`act-${act}`, `Act ${act}`]))
  };
  const sequenceFilters = {
    all: "All Sequences",
    ...Object.fromEntries(sequences.map((seq) => [`sequence-${seq}`, `Sequence ${seq}`]))
  };
  const locationFilters = {
    all: "All Locations",
    ...Object.fromEntries(locations.map((loc) => [
      loc.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase(),
      loc.replace("locations/", "").replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
    ]))
  };
  const characterFilters = {
    all: "All Characters",
    ...Object.fromEntries(characters.map((char) => {
      const key = char.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
      const label = char.replace(/^(characters\/|royalty\/|band\/|supporting\/)/, "").replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
      return [key, label];
    }))
  };
  return renderTemplate`${maybeRenderHead()}<div class="scene-filter-container"${addAttribute(`{
    activeFilterType: 'act',
    activeFilter: 'all',
    filterTypes: {
      act: ${JSON.stringify(actFilters)},
      sequence: ${JSON.stringify(sequenceFilters)},
      location: ${JSON.stringify(locationFilters)},
      character: ${JSON.stringify(characterFilters)}
    },
    
    /**
     * Sets the active filter type and resets to 'all'
     * @param {string} type - The filter type to activate
     */
    setFilterType(type) {
      this.activeFilterType = type;
      this.activeFilter = 'all';
      this.filterItems();
    },
    
    /**
     * Sets the active filter within the current type
     * @param {string} filter - The filter key to activate
     */
    setFilter(filter) {
      this.activeFilter = filter;
      this.filterItems();
    },
    
    /**
     * Filters scene items based on the active filter type and value
     */
    filterItems() {
      const items = document.querySelectorAll('.scene-item');
      let visibleCount = 0;
      
      items.forEach(item => {
        let shouldShow = false;
        
        if (this.activeFilter === 'all') {
          shouldShow = true;
        } else {
          switch (this.activeFilterType) {
            case 'act':
              shouldShow = item.getAttribute('data-act') === this.activeFilter;
              break;
            case 'sequence':
              shouldShow = item.getAttribute('data-sequence') === this.activeFilter;
              break;
            case 'location':
              const locations = item.getAttribute('data-locations') || '';
              shouldShow = locations.includes(this.activeFilter);
              break;
            case 'character':
              const characters = item.getAttribute('data-characters') || '';
              shouldShow = characters.includes(this.activeFilter);
              break;
          }
        }
        
        if (shouldShow) {
          item.style.display = 'block';
          item.classList.remove('filter-hidden');
          visibleCount++;
        } else {
          item.style.display = 'none';
          item.classList.add('filter-hidden');
        }
      });
      
      // Update result count
      const resultCount = document.querySelector('.filter-result-count');
      if (resultCount) {
        const label = visibleCount === 1 ? 'scene' : 'scenes';
        resultCount.textContent = 'Showing ' + visibleCount + ' ' + label;
      }
    }
  }`, "x-data")} data-astro-cid-ilcf54yd> <div class="filter-header" data-astro-cid-ilcf54yd> <h3 data-astro-cid-ilcf54yd>Filter Scenes</h3> <div class="filter-result-count" data-astro-cid-ilcf54yd>Showing all scenes</div> </div> <!-- Filter Type Selector --> <div class="filter-type-selector" data-astro-cid-ilcf54yd> <button @click="setFilterType('act')" :class="{ active: activeFilterType === 'act' }" class="filter-type-btn" data-astro-cid-ilcf54yd>
By Act
</button> <button @click="setFilterType('sequence')" :class="{ active: activeFilterType === 'sequence' }" class="filter-type-btn" data-astro-cid-ilcf54yd>
By Sequence
</button> <button @click="setFilterType('location')" :class="{ active: activeFilterType === 'location' }" class="filter-type-btn" data-astro-cid-ilcf54yd>
By Location
</button> <button @click="setFilterType('character')" :class="{ active: activeFilterType === 'character' }" class="filter-type-btn" data-astro-cid-ilcf54yd>
By Character
</button> </div> <!-- Filter Options --> <div class="filter-options" data-astro-cid-ilcf54yd> <template x-for="(label, key) in filterTypes[activeFilterType]" :key="key" data-astro-cid-ilcf54yd> <button @click="setFilter(key)" :class="{ active: activeFilter === key }" class="filter-btn" x-text="label" data-astro-cid-ilcf54yd></button> </template> </div> </div> `;
}, "/home/jk/dev/HerMajestysDispleasure/src/components/SceneFilter.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const scenes = await getCollection("scenes");
  const sortedScenes = scenes.sort((a, b) => {
    if (a.data.act !== b.data.act) return a.data.act - b.data.act;
    if (a.data.sequence !== b.data.sequence)
      return a.data.sequence - b.data.sequence;
    return a.data.scene_number - b.data.scene_number;
  });
  function formatTime(minutes) {
    if (minutes < 60) {
      return `${minutes}m`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
  }
  function formatLocation(location) {
    if (Array.isArray(location)) {
      const locationNames = location.map((loc) => {
        if (typeof loc === "string") {
          return loc.replace("locations/", "").replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
        } else if (loc && typeof loc === "object" && "id" in loc) {
          return loc.id.replace("locations/", "").replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
        } else {
          return String(loc);
        }
      });
      return locationNames.join(", ");
    } else if (location) {
      if (typeof location === "string") {
        return location.replace("locations/", "").replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
      } else if (location && typeof location === "object" && "id" in location) {
        return location.id.replace("locations/", "").replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
      } else {
        return String(location);
      }
    }
    return "Unknown location";
  }
  function formatCharacters(characters) {
    if (!characters || characters.length === 0) return "";
    const characterNames = characters.map((char) => {
      if (typeof char === "string") {
        return char.replace(/^(characters\/|royalty\/|band\/|supporting\/)/, "").replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
      } else if (char && typeof char === "object" && "id" in char) {
        return char.id.replace(/^(characters\/|royalty\/|band\/|supporting\/)/, "").replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
      } else {
        return String(char);
      }
    });
    return characterNames.join(", ");
  }
  function getFilterAttributes(scene) {
    const locations = Array.isArray(scene.data.location) ? scene.data.location.map((loc) => {
      let locStr;
      if (typeof loc === "string") {
        locStr = loc;
      } else if (loc && typeof loc === "object" && "id" in loc) {
        locStr = loc.id;
      } else {
        locStr = String(loc);
      }
      return locStr.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
    }).join(" ") : scene.data.location ? (() => {
      const singleLoc = scene.data.location;
      let locStr;
      if (typeof singleLoc === "string") {
        locStr = singleLoc;
      } else if (singleLoc && typeof singleLoc === "object" && "id" in singleLoc) {
        locStr = singleLoc.id;
      } else {
        locStr = String(singleLoc);
      }
      return locStr.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
    })() : "";
    const characters = scene.data.characters ? scene.data.characters.map((char) => {
      let charStr;
      if (typeof char === "string") {
        charStr = char;
      } else if (char && typeof char === "object" && "id" in char) {
        charStr = char.id;
      } else {
        charStr = String(char);
      }
      return charStr.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
    }).join(" ") : "";
    return {
      "data-act": `act-${scene.data.act}`,
      "data-sequence": `sequence-${scene.data.sequence}`,
      "data-locations": locations,
      "data-characters": characters
    };
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Scenes - Her Majesty's Displeasure", "data-astro-cid-yz2onu7b": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-yz2onu7b> <h1 data-astro-cid-yz2onu7b>Scenes</h1> <p data-astro-cid-yz2onu7b>Individual scenes with structure and content</p> ${renderComponent($$result2, "SceneFilter", $$SceneFilter, { "data-astro-cid-yz2onu7b": true })} <div class="items-grid" data-astro-cid-yz2onu7b> ${sortedScenes.map((scene) => renderTemplate`<div class="item-card scene-item"${spreadAttributes(getFilterAttributes(scene))} data-astro-cid-yz2onu7b> <h3 data-astro-cid-yz2onu7b> <a${addAttribute(`/scenes/${scene.slug}`, "href")} data-astro-cid-yz2onu7b>${scene.data.title}</a> </h3> <div class="meta" data-astro-cid-yz2onu7b> <span class="act" data-astro-cid-yz2onu7b>Act ${scene.data.act}</span> <span class="sequence" data-astro-cid-yz2onu7b>Seq ${scene.data.sequence}</span> <span class="scene-num" data-astro-cid-yz2onu7b>Scene ${scene.data.scene_number}</span> <span class="screentime" data-astro-cid-yz2onu7b> ${formatTime(scene.data.page_count || 0)} </span> </div> <div class="scene-details" data-astro-cid-yz2onu7b> <p data-astro-cid-yz2onu7b> <strong data-astro-cid-yz2onu7b>Location:</strong>${" "} ${formatLocation(scene.data.location)} </p> <p data-astro-cid-yz2onu7b> <strong data-astro-cid-yz2onu7b>Time:</strong>${" "} ${Array.isArray(scene.data.time_of_day) ? scene.data.time_of_day.join(" \u2192 ") : scene.data.time_of_day} </p> <p data-astro-cid-yz2onu7b> <strong data-astro-cid-yz2onu7b>Purpose:</strong> ${scene.data.purpose} </p> ${scene.data.characters && scene.data.characters.length > 0 && renderTemplate`<p data-astro-cid-yz2onu7b> <strong data-astro-cid-yz2onu7b>Characters:</strong>${" "} ${formatCharacters(scene.data.characters)} </p>`} </div> </div>`)} </div> ${renderComponent($$result2, "ScreentimeCalculator", $$ScreentimeCalculator, { "data-astro-cid-yz2onu7b": true })} <div class="back-link" data-astro-cid-yz2onu7b> <a href="/" data-astro-cid-yz2onu7b>← Back to Collections</a> </div> </div> ` })} `;
}, "/home/jk/dev/HerMajestysDispleasure/src/pages/scenes/index.astro", void 0);

const $$file = "/home/jk/dev/HerMajestysDispleasure/src/pages/scenes/index.astro";
const $$url = "/scenes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
