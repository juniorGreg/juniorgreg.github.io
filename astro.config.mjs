import { defineConfig } from 'astro/config';

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://juniorgreg.github.io",
  integrations: [vue(), tailwind()]
});