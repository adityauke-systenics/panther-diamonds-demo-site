import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Get base path from environment variable (for GitHub Pages)
// Format: /repository-name (no trailing slash)
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: 'https://www.pantherdiamonds.com',
  base: base,
  integrations: [tailwind(), sitemap()],
});
