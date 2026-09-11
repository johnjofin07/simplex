> **SUPERSEDED (2026-09-11).** This plan describes the original plate-section
> world. The site was redesigned the same day on the /AXION photo-led
> reference; see `.impeccable/surfaces/src-pages-index-astro.md` and
> `DESIGN.md` for the current world. Kept for history.

# Simplex Aluminium — one-page site plan

Status: PLANNED, not built. Written 2026-09-11 for an Opus build session.
Product truth lives in `PRODUCT.md`. The locked visual direction lives in
`.impeccable/surfaces/src-pages-index-astro.md` (the direction contract).
Read both before touching code. This file is the build order.

## 0. What was decided, in one screen

| Decision | Value |
| --- | --- |
| Company | Simplex Aluminium, aluminium fabricator: windows, doors and sealing, cupboards/wardrobes, full aluminium interiors |
| Surface | One page, Persuade mode. The visitor taps **Call** or **WhatsApp**. No form, no backend. |
| Stack | Astro (7.x at time of writing), static output, vanilla CSS with custom properties, no Tailwind, no UI framework, one tiny inline script. `pnpm` only. |
| Visual world | **Design annual plate section** on uncoated near-white stock. Chosen by the owner on the impeccable decision page over the assigned "Measurement Sheet" and the "Sliding Sash" pick. Seed key `1dacb6be`. |
| Craft bar | `.impeccable/ref/design-annual-hero.png` and `design-annual-board.png`. Finish level and commitment, never a layout to copy. |
| Content | Demo copy and demo photographs for now; the owner supplies real ones later. Every placeholder is registered in one file (§5) so swapping needs no redesign. |
| Colours | Four, total: ground, ink, hairline, one periwinkle seal. Photography untinted. No green WhatsApp button, no orange. |
| Edges | 0-radius everywhere. 1px rules. No shadows, no glass, no gradients as decoration (the ground's warm/cool drift is the paper, not a veil). |

## 1. Visual system (from the direction contract, made concrete)

**Ground.** `#F5F4F6`, drifting to `#FAF6F5` at the top-left corner and `#EEF3EF`
at the bottom-right via two very large, very soft radial fields on `body`.
The drift must be almost invisible: the point is that the sheet reads as
paper, not `#fff`. Voids (empty grid cells, the space beside the headline)
carry an 8px dot matrix in hairline colour that fades out within ~160px of
the pointer.

**Ink.** `#16181A`, never pure black. **Hairline** `#C9C7C4` at 1px.
**Seal** `#DCDDF3`, used once per viewport at most: the stamp, and the
active state of nothing else.

**Type.** One grotesque, one mono, self-hosted via Fontsource (no Google
Fonts request).
- Display and body: **Schibsted Grotesk** at 400 only. Display
  `clamp(44px, 6.4vw, 92px)`, letter-spacing `-0.02em`, line-height 1.0.
  Body 17px / 24px. No italics, no bold: hierarchy comes from size, case
  and rules.
- Labels: **Fragment Mono**, 11px, uppercase, letter-spacing `0.14em`.
  Plate numbers, captions, nav tokens, button text (12px, `0.12em`).
- If either face is unavailable, rank alternatives with
  `impeccable font-match` rather than falling back to Inter or Space Grotesk.

**Grid.** 12 columns, 40px gutters, 40px outer margin on desktop; 4 columns,
20px gutters and 20px margin under 720px. Everything sits on the grid;
nothing is centred by eye.

**Registration furniture.** Crosshair marks (two 1px strokes, 12px long,
with a 3px gap at the centre) at every plate corner. Hairlines divide the
credits rows. Dots fill voids. That furniture is the whole decorative budget.

**Controls.**
- Primary: filled ink rectangle, mono caps, 48px tall, 0 radius. On hover
  and focus the fill and text invert in 0.1s ease. Visible 2px focus ring in
  ink, offset 2px.
- Secondary: 1px ink outline rectangle, same size and type.
- Nav arrows (plates strip): 44px circles, 1px outline. The only circles on
  the page besides the stamp.

**Stamp.** An SVG `textPath` ring, 132px, seal fill, ink text
"MEASURED · MADE · FITTED · SIMPLEX ALUMINIUM ·", rotating 25s linear
infinite, lifting 4px on hover over 0.6s `cubic-bezier(.19,1,.22,1)`. It sits
half off the hero plate's bottom-left corner and once more in the footer.

**Motion grammar (orchestrated once, in `src/scripts/register.ts`).**
- Crosshairs register first: each plate's four marks draw in along their
  own length when the plate enters the viewport, then the photograph prints
  in (opacity only, no scale, no blur, 0.4s).
- Hairlines grow along their length, left to right, when their row enters.
- Plate hover: caption row inverts 0.1s.
- Plates strip steps one column per arrow press at the 0.6s curve.
- `prefers-reduced-motion: reduce` renders every mark drawn, every line
  full length, every photograph visible, stamp static. Test this state.

**Responsive.** Fluid columns, no fixed-pixel layout that wraps at 1280.
The hero holds at 1280, 1440 and 1600. Under 720px the hero stacks
(headline, sub, buttons, then the plate), the credits row becomes 2×2, the
plates strip becomes a horizontal scroll with scroll-snap, and a sticky
bottom bar carries CALL and WHATSAPP.

### What the owner's two reference screenshots contribute

Both are in `.impeccable/ref/owner-ref-*.png`. They are vibe, not authority;
the direction contract wins every conflict.

| Keep | From | How it lands in this world |
| --- | --- | --- |
| One photograph at real scale owning the hero | AXION | Plate 01 spans 7 of 12 columns and bleeds to the right margin; no second image competes with it |
| Slash-prefixed section labels | AXION | Every sheet label is `/PLATES 01 – 06`, `/SECTION`, `/HOW WE WORK`, `/CONTACT` in 11px mono |
| Headline left, short paragraph right | AXION | Sheets 5 and 8 use this two-column rhythm on the 12-col grid |
| Four-up icon + label + two lines | AXION, Socrates | The credits row (sheet 3), with hairline dividers instead of open space |
| Marquee strip of short items | Socrates | The offerings marquee (sheet 7) |
| Large, calm display type | Socrates | 92px grotesque at 400 |

Reject from both: rounded pill buttons, rounded image cards, bold display
weight, drop shadows, the greige container-card grid, any tinted photograph.

## 2. Page structure, top to bottom

Each section is a separate "sheet": a hard 1px hairline top edge and real
vertical space (120px desktop / 72px mobile) between sheets. Section labels
are literal nouns in mono caps. No clever headings.

1. **Token bar** (sticky, 72px, ground with a 1px bottom hairline).
   Left: `SIMPLEX ALUMINIUM` in mono. Centre: `/WORK  /SECTION  /PROCESS
   /CONTACT` as anchor links. Right: `CALL` (primary rect) and a WhatsApp
   glyph button (secondary rect). On mobile: wordmark and a single CALL rect;
   the bottom bar carries both actions.
2. **Hero sheet.** As the contract's FIRST VIEWPORT block. Headline
   (demo): "Windows, doors and whole rooms, made in aluminium." Sub (demo):
   "Measured on site, fabricated in our workshop, fitted clean. One material,
   one team, from the window frame to the wardrobe." Buttons: `CALL NOW →`
   and `WHATSAPP`. Right: Plate 01 (a fitted sliding window, daylight) with
   crosshairs and the stamp.
3. **Credits row.** Four-up, dashed hairline dividers, line icon 32px + mono
   label + two short lines. `WINDOWS` · `DOORS` · `CUPBOARDS` · `INTERIORS`.
   Icons are hand-drawn 1px-stroke SVG in ink: a window elevation, a door
   leaf, a wardrobe front, a room corner. No icon library.
4. **Plates sheet** (`id="work"`, label `PLATES 01 – 06`). Six plates, four
   visible at a time on desktop with the 44px arrows, all six as a snapping
   strip on mobile. Each plate: crosshairs, photograph 4:5, caption row in
   mono: `PLATE 03 · SLIDING WINDOW · 1800 × 1200 MM · SATIN ANODISED`. The
   millimetre line is the one "measurement" idea kept from the assigned
   direction; captions carry it, nothing else does.
5. **Section sheet** (the first wow moment, label `PLATE 00 · SECTION`).
   A full-width inline SVG technical drawing of an aluminium sliding-window
   cross-section: outer frame, sash, interlock, glass line, gasket, drain
   slot, all 1px ink hairlines, with mono dimension labels. It draws itself
   on scroll (stroke-dashoffset along real path lengths). Beside it, three
   short lines in body type on what sealing means and why aluminium does not
   warp. This is authored by hand in SVG, at real proportions; it is a
   drawing, not an icon.
6. **Process row** (label `HOW WE WORK`). Three-up credits row: `01 MEASURE`
   (we come to you with a tape), `02 FABRICATE` (cut and assembled in our
   workshop), `03 FIT` (installed and sealed in a day, site left clean).
   Demo copy; no durations or counts as facts.
7. **Offerings marquee.** A single hairline-bounded strip, mono caps,
   scrolling left at reading speed, paused on hover and under reduced
   motion (then it wraps to two static lines): `SLIDING WINDOWS · CASEMENT
   WINDOWS · SLIDING DOORS · WEATHER SEALING · WARDROBES · KITCHEN SHUTTERS ·
   OFFICE PARTITIONS · SHOP INTERIORS · ...`. This replaces a testimonial
   marquee, which cannot be truthfully filled yet.
8. **Close sheet** (`id="contact"`). Left: 92px "Call us. We measure on
   site." Right: the same two rectangles at full width, then a mono block:
   phone, WhatsApp number, address, hours, service area. All placeholders.
   The stamp sits half off the sheet's bottom-right corner.
9. **Footer credits row.** Mono tokens: `© SIMPLEX ALUMINIUM`, `PLATES:
   DEMO IMAGES, TO BE REPLACED`, anchor links, and nothing else.
10. **Mobile bottom bar** (`position: sticky; bottom: 0`), ground with top
    hairline, `CALL` primary and `WHATSAPP` secondary at 50% each, 56px tall,
    hidden above 720px.

## 3. Wow moments (bounded, each earns its place)

1. The section drawing that draws itself (sheet 5).
2. Crosshairs registering before each photograph prints in.
3. The rotating text-ring stamp.
4. The pointer-local dot-matrix fade in the hero void.
5. The 0.1s inversion on every control.

Nothing else moves. No parallax, no scale-on-hover on photographs, no
scroll-jacking, no cursor replacement.

## 4. Repository layout

```
simplex/
  PRODUCT.md              product truth (done)
  PLAN.md                 this file
  README.md
  DESIGN.md               written at finish by the impeccable documenter, not before
  astro.config.mjs        output: 'static', site: placeholder URL
  package.json            pnpm; scripts: dev, build, preview, check
  public/
    favicon.svg           "S" in a 0-radius ink square
  src/
    pages/index.astro     composes the sections in §2 order
    layouts/Base.astro    <head>, fonts, tokens.css, skip link, JSON-LD LocalBusiness (placeholders)
    components/
      TokenBar.astro  Hero.astro  CreditsRow.astro  Plate.astro  PlatesStrip.astro
      SectionDrawing.astro  ProcessRow.astro  Marquee.astro  Close.astro
      Footer.astro  BottomBar.astro  Stamp.astro  Crosshairs.astro  Button.astro
    styles/tokens.css     the custom properties in §1, and only those
    styles/global.css     reset, grid, type scale, dot matrix, motion + reduced-motion
    scripts/register.ts   IntersectionObserver for crosshairs/hairlines/drawing, pointer dot fade, strip arrows
    content/site.ts       EVERY placeholder (see §5)
    assets/plates/        six demo photographs + PROVENANCE.md
```

## 5. Placeholders and provenance (owner will replace)

`src/content/site.ts` exports one object. Every field that is demo carries
`// TODO(owner)` and the whole file starts with a banner comment saying so.

- `phone`, `whatsapp` (E.164, used in `tel:` and `https://wa.me/<number>`),
  `whatsappPrefill` ("Hi Simplex, I'd like a site measurement for ...").
- `address`, `hours`, `serviceArea`, `siteUrl`, `email` (optional).
- `headline`, `sub`, `credits[4]`, `process[3]`, `offerings[]`.
- `plates[6]`: `{ n, src, alt, kind, widthMm, heightMm, finish }`.

Photographs: source six demo images of real aluminium windows, sliding
doors, wardrobes and clean interiors from a licence-clear source (Unsplash
or Pexels). Verify each URL resolves before downloading, download into
`src/assets/plates/`, and record source URL, photographer and licence in
`src/assets/plates/PROVENANCE.md`. Prefer daylight, straight-on, neutral
rooms; reject anything warm-tinted, HDR or with people. Run them through
`astro:assets` (`<Image>` with `widths` and `format="avif"`/webp fallback).
Do not tint them. If a suitable photograph cannot be found for a slot,
leave the plate as a hairline rectangle with `PLATE 0N · AWAITING PHOTOGRAPH`
in mono; never draw around a missing asset.

Nothing on the page may state a year founded, a project count, a client
name or a quote until the owner supplies it.

## 6. Build order for the Opus session

Run from `/Users/jofin/Junkyard/simplex`. Do not commit unless the owner asks.

1. `pnpm create astro@latest . -- --template minimal --typescript strict --no-install --no-git`
   (or scaffold by hand if the wizard fights the non-empty directory), then
   `pnpm add @fontsource-variable/schibsted-grotesk @fontsource/fragment-mono`
   and `pnpm install`. Set `output: 'static'`. Keep `astro check` in scripts.
2. Run `/Users/jofin/.claude/skills/impeccable/scripts/impeccable context --target src/pages/index.astro`
   once, then load `.claude/skills/impeccable/reference/craft-floor.md`
   (under `~/.claude/skills/impeccable/`) immediately before writing UI.
   Reread the OWN-WORLD block of the surface brief before the first line of CSS.
3. Write `tokens.css`, `global.css`, `site.ts` with all placeholders, then
   `Base.astro`.
4. Source the six photographs and write `PROVENANCE.md` (§5). Draw the four
   credits icons and the section drawing SVG by hand at real proportions.
5. Build the hero sheet first at 1440 wide, exactly as the FIRST VIEWPORT
   block, then the remaining sheets in §2 order, then `register.ts`, then
   responsive down to 390px.
6. One batched inspection: capture `.impeccable/review/desktop.png` (1440,
   full page, entrance motion settled) and `.impeccable/review/mobile.png`
   (390). Fix everything in one batch, confirm with one more capture. Stop.
7. Run `impeccable detect --json src` once, fix the mechanical findings.
8. Spawn `impeccable-finish-reviewer` with the request, the surface brief,
   the screenshots, the detector output, the craft-floor path and the two
   reference images in `.impeccable/ref/` (no approved comp: this is a
   code-led build). Act on its disposition word. Then spawn
   `impeccable-documenter` to write `DESIGN.md`.
9. `pnpm run build && pnpm run preview`; check Lighthouse on the mobile
   preset: Performance ≥ 95, Accessibility 100, no layout shift from fonts
   (use `font-display: swap` with size-adjust metrics or `optional`).

## 7. Acceptance gates

- Four colours on the page, counted. Ink is `#16181A`, never `#000`.
- Every corner radius is 0 except the stamp and the two strip arrows.
- Only two font families load; no weight other than 400 for the grotesque.
- CALL and WHATSAPP reachable without scrolling at 390px and 1440px.
- `tel:` and `wa.me` links work with the placeholder numbers.
- Reduced motion: page fully legible with animations disabled.
- Keyboard: skip link, visible focus on every control, strip arrows operable.
- Contrast: body and labels on ground ≥ 4.5:1 (hairline colour is never used for text).
- No text wraps mid-word in the token bar at 320px.
- `grep -c "TODO(owner)" src/content/site.ts` matches the placeholder count in the README.
- Finish reviewer disposition recorded; `DESIGN.md` exists and describes the built page.

## 8. Out of scope for v1

Quote form, CMS, multiple languages, blog, gallery lightbox, map embed,
analytics (nothing from this repo goes to PostHog), cookie banner, dark
mode (the world is a printed sheet; there is one theme).

## 9. Open decisions for the owner

- Real phone, WhatsApp number, address, hours and service area.
- Real photographs of finished work (six, daylight, straight-on).
- Domain / hosting target (Cloudflare Pages or Netlify both suit static Astro).
- Whether a logo exists; until then the mono wordmark stands.
