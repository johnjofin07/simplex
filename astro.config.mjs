// @ts-check
import { defineConfig } from 'astro/config';

// Hosted on GitHub Pages at https://simplexkdlr.com (see README, "Hosting").
export default defineConfig({
  site: 'https://simplexkdlr.com',
  output: 'static',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
});
