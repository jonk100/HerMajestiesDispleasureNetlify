import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, b as renderTemplate } from './astro/server_DzFHpl4b.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$BaseFilter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseFilter;
  const { title, filters, resultLabel } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="filter-container"${addAttribute(`{
    activeFilter: 'all',
    filters: ${JSON.stringify(filters)},
    resultLabel: '${resultLabel}',
    
    /**
     * Sets the active filter and triggers filtering
     * @param {string} filter - The filter key to activate
     */
    setFilter(filter) {
      this.activeFilter = filter;
      this.filterItems();
    },
    
    /**
     * Filters items based on the active filter
     * Shows/hides items based on their data-category attribute
     */
    filterItems() {
      const items = document.querySelectorAll('[data-category]');
      
      items.forEach(item => {
        if (this.activeFilter === 'all') {
          item.style.display = 'block';
          item.classList.remove('filter-hidden');
        } else {
          const category = item.getAttribute('data-category');
          if (category === this.activeFilter) {
            item.style.display = 'block';
            item.classList.remove('filter-hidden');
          } else {
            item.style.display = 'none';
            item.classList.add('filter-hidden');
          }
        }
      });
      
      // Update results count
      const visibleItems = document.querySelectorAll('[data-category]:not(.filter-hidden)');
      const countElement = document.querySelector('.results-count');
      if (countElement) {
        const count = visibleItems.length;
        const filterName = this.filters[this.activeFilter];
        const itemText = count === 1 ? this.resultLabel.slice(0, -1) : this.resultLabel;
        countElement.textContent = count + ' ' + itemText + (this.activeFilter === 'all' ? '' : ' in ' + filterName);
      }
    }
  }`, "x-data")} x-init="filterItems()" data-astro-cid-sb76nsjl> <div class="filter-header" data-astro-cid-sb76nsjl> <h2 class="filter-title" data-astro-cid-sb76nsjl>${title}</h2> <div class="results-count" data-astro-cid-sb76nsjl></div> </div> <div class="filter-buttons" data-astro-cid-sb76nsjl> <template x-for="(label, key) in filters" :key="key" data-astro-cid-sb76nsjl> <button type="button" class="filter-btn" :class="{ 'active': activeFilter === key }" @click="setFilter(key)" x-text="label" data-astro-cid-sb76nsjl></button> </template> </div> </div> `;
}, "/home/jk/dev/HerMajestysDispleasure/src/components/BaseFilter.astro", void 0);

export { $$BaseFilter as $ };
