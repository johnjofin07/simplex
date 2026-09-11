// @ts-check
import { defineConfig } from 'astro/config';

// TODO(owner): replace with the real domain once hosting is decided.
export default defineConfig({
  site: 'https://simplex-aluminium.example',
  output: 'static',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
});
