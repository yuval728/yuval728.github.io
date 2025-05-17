import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
// import github from '@astrojs/github';

export default defineConfig({
  integrations: [tailwind(), mdx(), sitemap()],
  // adapter: github(),
  site: 'https://yuval728.github.io',
  // base: '/',
  output: 'static',
});