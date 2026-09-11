// @ts-check
import { defineConfig } from 'astro/config';

// Primary host: Cloudflare Pages at https://simplexkdlr.com (see README, "Hosting").
// Until that domain is live, the GitHub Actions workflow also publishes a mirror
// at https://johnjofin07.github.io/simplex/ by building with GITHUB_PAGES=true.
// TODO(owner): once simplexkdlr.com is live, delete .github/workflows/deploy.yml
// and the GITHUB_PAGES branch below.
const githubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: githubPages ? 'https://johnjofin07.github.io' : 'https://simplexkdlr.com',
  base: githubPages ? '/simplex' : undefined,
  output: 'static',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
});
