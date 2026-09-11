# Simplex Aluminium

One-page marketing site for Simplex Aluminium, an aluminium fabricator
(windows, doors and sealing, cupboards, full aluminium interiors). Built on
Astro 7, static output, vanilla CSS, one small script. `pnpm` only.

- `PRODUCT.md` — product truth (users, positioning, constraints, evidence).
- `PLAN.md` — the original build plan (plate-section world, superseded by the
  2026-09-11 photo-led redesign; kept for history).
- `DESIGN.md` — the design system as built (written by the finish pass).
- `.impeccable/surfaces/` — the locked visual direction contract.
- `.impeccable/ref/` — craft-bar reference images for the chosen world.

```sh
pnpm install
pnpm run dev       # http://localhost:4321
pnpm run build     # static output in dist/
pnpm run preview
pnpm run check     # astro check
```

## Status

Built with the owner's verified content and photographs (2026-09-11).

- Company facts on the page (since 1993, Kodungallur, all Kerala, 1000+
  sites, 30+ team, 2000 sq ft workshop, Eurobond / Aludecor / Viva, free site
  visit and quotation, 3D design, lifetime support) were supplied by the
  owner. Everything lives in `src/content/site.ts`.
- Contact details supplied by the owner (2026-09-11): James Thiyyadi
  (primary for calls) and Amal Jose (primary for WhatsApp), both on calls and
  WhatsApp; email simplexkdlr@gmail.com; address Near AR Hospital,
  Chandapura, Kodungallur, Thrissur; Instagram @simplexaluminium.
- Logo: the owner's mark is kept at `src/assets/brand/logo-original.png` and
  redrawn as a stroked SVG in `components/Logo.astro` (also the favicon and
  `public/logo.png` for Open Graph / JSON-LD).
- Still a placeholder, marked `TODO(owner)` in `site.ts`: opening hours
  (hidden while empty). Domain: simplexkdlr.com.
- Photographs and 3D renders are Simplex's own and listed in
  `src/assets/photos/PROVENANCE.md`. The hero, process and contact photos are
  keyed in `src/content/photos.ts`; the Work albums and the 3D design row are
  one YAML file per photo in `src/content/work/` and `src/content/designs/`,
  edited from the phone at `/admin` (see below).

## Layout of the source

```
src/
  pages/index.astro        composes the sections in order
  layouts/Base.astro       head, font, tokens, skip link, JSON-LD LocalBusiness
  components/              Nav, Hero, WhyRow, Services, Lightbox, Process,
                           Design, Close, Footer, BottomBar, Button, Icon, Logo
  styles/tokens.css        colour, type, layout, shape and motion tokens
  styles/global.css        reset, type scale, grid, bands, photo panel, reveal
  scripts/register.ts      the page's one script: reveal on entry,
                           horizontal card scroller arrows
  content/site.ts          all page copy, service cards, contact details
  content/photos.ts        fixed photos (hero, process, contact) key → file
  content/work/*.yml       Work album photos: image, caption, service, cover, order
  content/designs/*.yml    3D design row: image, caption, order
  content/gallery.ts       reads the two collections for Services and Design
  content.config.ts        collection schemas (astro:content)
  assets/photos/           Simplex's own photographs and renders + PROVENANCE.md
public/admin/              Sveltia CMS (index.html + config.yml), the phone admin
```

## Hosting

GitHub Pages, built by `.github/workflows/deploy.yml`. Every push to `main`
runs `pnpm build` in GitHub Actions and publishes `dist` to
https://simplexkdlr.com within a couple of minutes. Nothing else is involved:
no Cloudflare, no Netlify, no login server.

Repo settings (already applied): Settings → Pages → Source "GitHub Actions",
custom domain `simplexkdlr.com`, "Enforce HTTPS" on. `public/CNAME` repeats
the domain so a manual deploy cannot drop it.

DNS is on Hostinger (the domain's nameservers are Hostinger's). Records:

```
A      @    185.199.108.153
A      @    185.199.109.153
A      @    185.199.110.153
A      @    185.199.111.153
CNAME  www  johnjofin07.github.io
```

If the site ever moves, change these records and the custom domain in the
Pages settings; the workflow does not care where the domain points.

## Updating photos from a phone

Open https://simplexkdlr.com/admin. Anyone who should upload needs a GitHub
account with write access to the repo (Settings → Collaborators). Two
collections:

- **Work photos**: one entry per photo. Pick the photo, write a one-line
  caption, choose the service card it belongs to, and save. Tick "Use as the
  card cover" on the one photo that should front the card. "Order" sorts the
  album, low numbers first.
- **3D designs**: photo, caption, order.

Saving commits the YAML entry and the image into the repo, which triggers the
GitHub Pages build. Phone photos are resized to 2400 px WebP in the browser
before upload (`media_libraries` in `public/admin/config.yml`), and Astro
makes the responsive sizes at build time as it does for every other photo.

Signing in, once per device: on the /admin login screen choose "sign in with
a personal access token". The link there opens GitHub's token page with the
right settings prefilled; if you create one by hand, use a fine-grained token
limited to the `simplex` repository with **Contents: Read and write**. Paste
the token into the admin and it is remembered by that browser. Fine-grained
tokens expire after at most a year, so make a new one when the admin says
the login stopped working.

## Notes for whoever builds next

- `cookie` and `sharp` are listed as project dependencies on purpose. Astro
  imports both from the build output directory, and a stray `~/node_modules`
  on this machine was shadowing Astro's own copies. Keeping them local makes
  the build deterministic.
- The one font is self-hosted through Fontsource (Source Sans 3 variable,
  weights 400 and 600 used). No Google Fonts request. A size-adjusted local
  fallback face is declared in `global.css` so a late swap does not reflow.
- Images go through `astro:assets` (`<Image>` with `widths`/`sizes`, WebP);
  `sharp` does the resizing at build time.
- The redesign of 2026-09-11 follows the /AXION reference in
  `.impeccable/ref/owner-ref-2-axion.png`: photo-led, greige and charcoal,
  rounded panels and pill buttons. The direction contract is in
  `.impeccable/surfaces/src-pages-index-astro.md`.
