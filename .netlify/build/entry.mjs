import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DKRKkt6L.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/acts/_act_.astro.mjs');
const _page1 = () => import('./pages/beats/_slug_.astro.mjs');
const _page2 = () => import('./pages/beats.astro.mjs');
const _page3 = () => import('./pages/characters.astro.mjs');
const _page4 = () => import('./pages/characters/_---slug_.astro.mjs');
const _page5 = () => import('./pages/dialogue/_slug_.astro.mjs');
const _page6 = () => import('./pages/dialogue.astro.mjs');
const _page7 = () => import('./pages/locations/_slug_.astro.mjs');
const _page8 = () => import('./pages/locations.astro.mjs');
const _page9 = () => import('./pages/research/_slug_.astro.mjs');
const _page10 = () => import('./pages/research.astro.mjs');
const _page11 = () => import('./pages/rss.xml.astro.mjs');
const _page12 = () => import('./pages/scenes.astro.mjs');
const _page13 = () => import('./pages/scenes/_---slug_.astro.mjs');
const _page14 = () => import('./pages/sequences/_sequence_.astro.mjs');
const _page15 = () => import('./pages/stats/character-stats.astro.mjs');
const _page16 = () => import('./pages/themes/_slug_.astro.mjs');
const _page17 = () => import('./pages/themes.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/acts/[act].astro", _page0],
    ["src/pages/beats/[slug].astro", _page1],
    ["src/pages/beats/index.astro", _page2],
    ["src/pages/characters/index.astro", _page3],
    ["src/pages/characters/[...slug].astro", _page4],
    ["src/pages/dialogue/[slug].astro", _page5],
    ["src/pages/dialogue/index.astro", _page6],
    ["src/pages/locations/[slug].astro", _page7],
    ["src/pages/locations/index.astro", _page8],
    ["src/pages/research/[slug].astro", _page9],
    ["src/pages/research/index.astro", _page10],
    ["src/pages/rss.xml.js", _page11],
    ["src/pages/scenes/index.astro", _page12],
    ["src/pages/scenes/[...slug].astro", _page13],
    ["src/pages/sequences/[sequence].astro", _page14],
    ["src/pages/stats/character-stats.astro", _page15],
    ["src/pages/themes/[slug].astro", _page16],
    ["src/pages/themes/index.astro", _page17],
    ["src/pages/index.astro", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3077b57a-6f28-40b8-9485-890f905db03f"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
