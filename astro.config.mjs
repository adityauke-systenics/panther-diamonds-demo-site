import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// This is a **project** GitHub Pages site:
//   https://adityauke-systenics.github.io/panther-diamonds-demo-site/
// so all asset URLs must include the repo name as base.
export default defineConfig({
  site: 'https://adityauke-systenics.github.io/panther-diamonds-demo-site',
  base: '/panther-diamonds-demo-site/',
  integrations: [tailwind(), sitemap()],
  output: 'static',
  build: {
    assets: '_assets',
  },
});
