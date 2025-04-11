import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
// import github from '@astrojs/github';

export default defineConfig({
  integrations: [tailwind(), mdx()],
  // adapter: github(),
  site: 'https://yuval728.github.io',
  base: '/',
  output: 'static',
});