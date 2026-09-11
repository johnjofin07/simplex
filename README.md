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

Built. All copy, numbers and photographs are **placeholders** until the owner
supplies real ones.

- Every placeholder lives in `src/content/site.ts` and is marked
  `TODO(owner)`. There are **32** of them. Swap the values; nothing else on
  the page needs to change.
- Photographs are demo images from Unsplash, mapped by key in
  `src/content/photos.ts`. Source, photographer and licence for each are
  recorded in `src/assets/photos/PROVENANCE.md` and
  `src/assets/plates/PROVENANCE.md`, and embedded in each JPEG's comment
  block. Replace them with real photographs of finished work (daylight,
  straight on), keeping the key in `photos.ts` and changing the file.
  Unused spares (`kitchen-detail.jpg`, `plate-03/04/06.jpg`) are kept as
  alternates.
- Nothing on the page states a founding year, a project count, a client name
  or a quotation. Do not add any until the owner confirms them.

## Layout of the source

```
src/
  pages/index.astro        composes the sections in order
  layouts/Base.astro       head, font, tokens, skip link, JSON-LD LocalBusiness
  components/              Nav, Hero, WhyRow, Services, Spaces, Process,
                           SectionDrawing, Close, Footer, BottomBar, Button, Icon
  styles/tokens.css        colour, type, layout, shape and motion tokens
  styles/global.css        reset, type scale, grid, bands, photo panel, reveal
  scripts/register.ts      the page's one script: reveal on entry, drawing draw-in,
                           horizontal card scroller arrows
  content/site.ts          every placeholder
  content/photos.ts        photo key → file map (swap files here)
  assets/photos/           sourced demo photographs + PROVENANCE.md
  assets/plates/           earlier demo photographs + PROVENANCE.md
```

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
