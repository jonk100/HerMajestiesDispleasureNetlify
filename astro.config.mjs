import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import { remarkScreenplay } from "./src/plugins/remark-screenplay.ts";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    alpinejs(),
    mdx({
      components: {
        Screenplay: "./src/components/screenplay/Screenplay.astro",
        Scene: "./src/components/screenplay/Scene.astro",
        Action: "./src/components/screenplay/Action.astro",
        Character: "./src/components/screenplay/Character.astro",
        Dialogue: "./src/components/screenplay/Dialogue.astro",
        Parenthetical: "./src/components/screenplay/Parenthetical.astro",
        Transition: "./src/components/screenplay/Transition.astro",
        ActBreak: "./src/components/screenplay/ActBreak.astro",
      },
      remarkPlugins: [remarkScreenplay],
    }),
  ],
});
