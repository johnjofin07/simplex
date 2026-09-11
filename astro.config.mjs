// @ts-check
import { defineConfig } from 'astro/config';

// Hosted on GitHub Pages at https://johnjofin07.github.io/simplex/.
// TODO(owner): when a custom domain is added, set site to that domain and remove base.
export default defineConfig({
  site: 'https://johnjofin07.github.io',
  base: '/simplex',
  output: 'static',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
});
