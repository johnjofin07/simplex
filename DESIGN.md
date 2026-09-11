---
name: Simplex Aluminium
description: A greige product-company page for an aluminium fabricator; untinted photographs carry every colour, one humanist sans at two weights carries every word.
colors:
  greige: "#e3e3de"
  sheet: "#f1f1ed"
  paper: "#fafaf8"
  white: "#ffffff"
  ink: "#1f201e"
  ink-2: "#5c5e5a"
  line: "#d2d2cc"
  line-dark: "#3a3b38"
  on-ink: "#f4f4f1"
  on-ink-2: "#b9bab5"
typography:
  display:
    fontFamily: "'Source Sans 3 Variable', 'Source Sans Fallback', 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "clamp(42px, 5.3vw, 78px)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "'Source Sans 3 Variable', 'Source Sans Fallback', 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "clamp(32px, 3.7vw, 54px)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.018em"
  title:
    fontFamily: "'Source Sans 3 Variable', 'Source Sans Fallback', 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.005em"
  body:
    fontFamily: "'Source Sans 3 Variable', 'Source Sans Fallback', 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "27px"
    letterSpacing: "normal"
  small:
    fontFamily: "'Source Sans 3 Variable', 'Source Sans Fallback', 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "22px"
    letterSpacing: "normal"
  label:
    fontFamily: "'Source Sans 3 Variable', 'Source Sans Fallback', 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: "18px"
    letterSpacing: "0.09em"
  control:
    fontFamily: "'Source Sans 3 Variable', 'Source Sans Fallback', 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "normal"
rounded:
  sm: "8px"
  md: "14px"
  panel: "24px"
  pill: "999px"
  disc: "50%"
spacing:
  gutter: "24px"
  margin: "48px"
  head-gap: "72px"
  section: "128px"
  nav-h: "80px"
  control-h: "52px"
  control-lg-h: "60px"
  bottombar-h: "64px"
  max: "1440px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    height: "{spacing.control-h}"
    padding: "0 26px"
  button-primary-hover:
    backgroundColor: "{colors.line-dark}"
    textColor: "{colors.on-ink}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    height: "{spacing.control-h}"
    padding: "0 26px"
  button-secondary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    height: "{spacing.control-h}"
    padding: "0 26px"
  button-light-hover:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    height: "{spacing.control-h}"
    padding: "0 14px"
  button-ghost-hover:
    backgroundColor: "rgba(31, 32, 30, 0.07)"
    textColor: "{colors.ink}"
  button-lg:
    height: "{spacing.control-lg-h}"
    padding: "0 32px"
  card-white:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "26px"
  card-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.md}"
    padding: "26px"
  panel-close:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.panel}"
    padding: "24px"
  photo-panel:
    backgroundColor: "{colors.line}"
    rounded: "{rounded.md}"
  caption-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "16px 22px"
  caption-pill:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.small}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  chip-strip:
    backgroundColor: "rgba(255, 255, 255, 0.82)"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  icon-disc:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.disc}"
    size: "48px"
  step-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.disc}"
    size: "44px"
  step-button-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
  nav:
    backgroundColor: "rgba(250, 250, 248, 0.88)"
    textColor: "{colors.ink}"
    height: "{spacing.nav-h}"
---

# Design System: Simplex Aluminium

## Overview

**Creative North Star: "The Product Catalogue for a Room"**

Simplex is presented the way a logistics product company presents its containers: one large, untinted photograph of the glazing itself under a plain headline, then photo-led panels for each service. The page itself is a quiet greige ground with three off-white steps and white cards; it has no accent hue at all. Every chromatic value on the page comes from a photograph, and the photographs are shown as they were taken. The charcoal ink does all the pointing: it is the text, the buttons, the icon discs, one dark card in a row, and the closing panel.

Density is generous and grid-led. Sections are long bands (128px of vertical padding at desktop) headed by a single h2 on the left seven columns and a short paragraph, sometimes with a button or a control, on the right four. There are no eyebrow labels, kickers or section numbers above headings: each zone is named by its literal noun in the heading and nothing else. Hierarchy is carried by one humanist sans, Source Sans 3, at exactly two weights, 600 for anything that names or acts and 400 for anything that explains.

The world rejects the fabricator default it was built against: no dark facade hero, no orange quote button, no icon-tile services, no box-shadows, no gradients except the scrim that makes photo captions legible. Depth is tonal (greige, sheet, paper, white) and linear (1px rules). Motion is a single grammar: content settles upward 18px as it enters, the technical section drawing draws itself along its real path lengths, and under reduced motion everything is simply already there.

**Key Characteristics:**
- Four flat neutral surfaces (greige, sheet, paper, white) and one charcoal ink; photographs supply every other colour.
- One typeface, two weights (600 / 400); tight negative tracking at display sizes, no tracked caps above headings.
- 12-column grid inside a 1440px wrap; section heads split 7 / 4; content sits 72px below the head.
- Rounded photo panels and cards (14px), pill buttons, circular icon discs, a 24px closing panel; no shadows anywhere.
- One 1.5px-stroke line-icon set drawn in a 24px box, always in ink or its inverse.
- One reveal motion (18px settle, 0.9s, spring-out ease) plus a self-drawing technical section; everything settled under reduced motion.

## Colors

A warm neutral ladder from greige to white with a single charcoal ink; there is no primary hue, so the ink plays the primary role and photographs carry all saturation.

### Primary
- **Charcoal Ink** (`{colors.ink}`): all body and heading text, primary buttons, icon discs, the nav underline, the focus outline, text selection, the second card in the Spaces row and the Close panel. It is the only "colour" the page owns.
- **Ink Hover** (`{colors.line-dark}`): primary-button hover fill and the divider inside dark panels (the Close panel's details rule). Never a text colour.

### Neutral
- **Greige Page** (`{colors.greige}`): the body background, the Spaces band and the footer; also the translucent base of the mobile bottom bar (90% over blur). The `theme-color` of the document.
- **Sheet** (`{colors.sheet}`): the Why row and the Section-drawing band; also the light-button hover fill. One step brighter than the page.
- **Paper** (`{colors.paper}`): the hero, Services, Process and Close bands, and the sticky nav (88% over blur). The brightest band; white cards read as objects on it.
- **White** (`{colors.white}`): cards (Spaces, section-drawing card), caption cards and caption pills over photographs, the light button, the inverted icon disc on the dark card, and the h3 inside a photo caption. Never a band.
- **Secondary Text** (`{colors.ink-2}`): explanatory copy under h3s, process step numerals, the scrollbar thumb, the drawing's annotation text.
- **Rule** (`{colors.line}`): every 1px divider on light surfaces (nav bottom, footer top, Why row tops, process step tops, the scroller's track line) and the placeholder fill behind a loading photograph.
- **On-Ink** (`{colors.on-ink}`): text and icons on charcoal; also the caption copy over a photo scrim (at 86% opacity for the paragraph).
- **On-Ink Muted** (`{colors.on-ink-2}`): secondary copy, definition terms and the secondary-button border on charcoal.

### Named Rules
**The Photographs Carry Colour Rule.** The palette has no accent hue. Any saturated colour on the page must come from an untinted photograph; never add a brand accent, tint an image, or colour an icon.

**The Band Ladder Rule.** Bands are greige, sheet or paper and adjacent bands never share a surface. White is reserved for objects sitting on a band (cards, caption cards, pills) and is never itself a band.

**The Ink Object Rule.** Charcoal is applied to objects, never to bands: buttons, discs, one dark card per row, and the rounded Close panel inside its paper band. There is no full-bleed dark section.

## Typography

**Display Font:** Source Sans 3 Variable (self-hosted via `@fontsource-variable/source-sans-3`; fallback "Source Sans Fallback", a size-adjusted local Helvetica Neue / Arial face at 101% with 96% / 26% ascent and descent overrides, then Segoe UI, Helvetica, Arial)
**Body Font:** the same family
**Label Font:** the same family; no monospace, no second face

**Character:** One humanist sans at two weights. Everything that names or acts (headings, wordmark, buttons, nav links, card titles, chip text, step numerals, definition terms) is 600; everything that explains is 400. Display and headline sizes are tracked tight (-0.025em / -0.018em) with line-heights near 1; body sits at 18/27px.

### Hierarchy
- **Display** (600, clamp(42px, 5.3vw, 78px), 1.02, -0.025em): the hero h1 only. Balanced wrapping, left eight columns at desktop.
- **Headline** (600, clamp(32px, 3.7vw, 54px), 1.08, -0.018em): every section h2, and the Close panel's h2 on charcoal. Always alone; nothing sits above it.
- **Title** (600, 22px, 1.2, -0.005em): h3 for Why points, service captions, Spaces cards, process steps. Drops to 20px in the hero caption card and 18px on mobile there.
- **Body** (400, 18px / 27px; 17px / 26px under 720px): section-head paragraphs and process step copy, held to a measure between 24em and 34em.
- **Small** (400, 15px / 22px): supporting copy under h3s, photo caption lines, footer links and the copyright, definition descriptions.
- **Label** (600, 13px / 18px, 0.09em, uppercase): only the process step numerals ("01", "02", "03") and the Close panel's definition terms (Workshop, Hours, Service area, Email). It is not a heading device.
- **Control** (600, 16px, line-height 1): all buttons and nav links; 17px in large buttons, 15px in the compact mobile nav button.
- **Wordmark** (600, 22px, 0.06em, uppercase; 19px mobile, 18px footer): the "/SIMPLEX" mark in nav and footer.

### Named Rules
**The Two Weights Rule.** 600 names and acts; 400 explains. No other weight is loaded or used, and no italic exists.

**The Headline-Alone Rule.** No eyebrow, kicker, slash-label or numeral sits above an h2 or h1 (user decision 2026-09-11). Sections are carried by the heading noun and the paragraph beside it.

**The Tracked-Caps Budget Rule.** Uppercase tracked type appears in exactly three places: the wordmark, the label role (step numerals, definition terms) and the annotations inside the technical drawing. Nowhere else.

## Layout

The page is one column of full-width bands. Inside each band a `.wrap` centres content at a 1440px maximum with 48px side margins (32px under 1100px, 20px under 720px) on a 12-column grid with a 24px gutter (16px under 720px).

**Section head.** Every section opens with the same head: the h2 spans columns 1–7 and an aside of paragraph plus optional button or control spans columns 9–12, bottom-aligned. Under 1100px both stack across eight columns; under 720px both go full width. Content begins 72px below the head at desktop (56–64px under 1100px, 36–48px under 720px).

**Vertical rhythm.** Band padding is 128px (96px under 1100px, 72px under 720px). The hero is not a band: it pads 72px at the top (44px mobile) and one section step at the bottom, with the photo stage 56px below the headline row (44px / 36px on smaller screens). The footer pads 40px / 48px.

**Hero.** Headline left eight columns, aside right four; beneath it a 16:9 photo panel capped at 760px tall inside the margins (not edge-bleed). On mobile the panel becomes 4:5 and reaches to within 8px of the viewport edge.

**Services.** A 12-column photo grid: 7 + 5 wide/narrow pair at 4:3, three 4-column squares, one full-width 21:8 panel. Under 1100px everything is 6 columns and the full panel is 16:9; under 720px every card is full width at 4:3.

**Spaces.** A horizontal snap scroller that bleeds to the viewport edge with its first card aligned to the wrap margin; cards are 318px wide (78vw mobile) with the gutter between them. Its controls (two 44px disc buttons around a 1px track with a 3px ink thumb) live in the section-head aside.

**Process.** Lead photo columns 1–7 spanning two rows (min 560px), the three-step list columns 8–12 in a 56px + 1fr grid, then two 3:2 photos each six columns wide.

**Section drawing.** White card columns 1–8 (40px padding, 20/16px mobile) beside notes in columns 9–12; under 1100px the card goes full width and notes sit in a row. On mobile the drawing pans horizontally at a 900px minimum width with a "Drag to pan" cue.

**Close.** A charcoal panel with a 7fr / 5fr copy-and-photo split, 24px outer padding; stacks under 1100px with the photo first.

**Chrome.** Sticky 80px nav (64px mobile) in a 1fr / auto / 1fr grid: wordmark, four centred links (desktop only), actions right. Under 720px a fixed 64px bottom bar with Call and WhatsApp appears only once the hero's own buttons have scrolled out of view, and the body reserves its height plus the safe-area inset.

**Breakpoints.** 1100px, 720px and a 360px fallback that collapses the Why row to one column.

## Elevation & Depth

This system has no shadows. There is no `box-shadow` anywhere in the build, at rest or on hover. Depth is conveyed by tonal stepping between the four surfaces (greige under sheet under paper under white), by 1px rules in `{colors.line}` on light surfaces and `{colors.line-dark}` on charcoal, and by the photographs' own depth. The only gradient is the caption scrim: a bottom-up fade from `rgba(20,21,19,0.72)` to transparent over the lower 62% of a photo panel, present only where text sits on a photograph.

Translucency is used for chrome that floats over scrolling content: the sticky nav (paper at 88% with `saturate(140%) blur(12px)`), the mobile bottom bar (greige at 90% with `blur(12px)`) and the hero's strip chips (white at 82% with `blur(8px)`). Nothing else is translucent.

### Named Rules
**The No-Shadow Rule.** Surfaces never cast shadows, in any state. If an element needs to separate from its ground, step its surface one rung up the ladder or draw a 1px rule.

**The Scrim-Only Gradient Rule.** The single permitted gradient is the caption scrim under text on a photograph. No gradient is decorative.

**The Floating Chrome Rule.** Backdrop blur is reserved for elements that overlay scrolling content (nav, bottom bar, chips on the hero photo). Cards and bands are opaque.

## Shapes

Softly rounded rectangles with one large-panel exception and two circular forms. Photo panels and cards use a 14px radius; small caption cards and the focus outline use 8px; every button, the caption pill on process photos, the hero chips and the skip link are full pills (999px); icon discs (48px) and scroller step buttons (44px) are circles. The Close panel alone is rounder, at 24px (14px + 10px), holding a 14px photo inside it with a 24px inset so the two radii read as concentric.

Borders are 1px. Buttons always carry a 1px border, transparent or matching their fill, so variants share one box. Rules are horizontal only (top of nav content, bottom of nav, top of footer, top of Why points and process steps). Photographs are clipped by their rounded panel with `isolation: isolate` and fill it with `object-fit: cover`. Icons are 1.5px round-capped strokes in a 24px box, drawn in currentColor.

Focus is a 2px ink outline offset 3px, rounded 8px (pill on buttons).

## Components

### Buttons
Calm pills that do not move except a 1px press. Icon (18px line icon) left of a 600-weight label, 10px gap, 52px tall with 26px side padding; the large size is 60px tall, 32px padding, 17px text. Transitions of fill, text, border and transform run 0.18s ease.
- **Shape:** full pill (999px), 1px border always present.
- **Primary:** charcoal fill, on-ink text and border (`{components.button-primary}`); hover shifts the fill to `{colors.line-dark}`. Used for Call in nav, hero and bottom bar, and for "Send us a photo of the room".
- **Secondary:** transparent with a 1px ink border; hover inverts to ink fill. On the dark Close panel it takes on-ink text with an `{colors.on-ink-2}` border and inverts to white on hover.
- **Light:** white fill on charcoal grounds (Close panel Call, mobile bottom-bar WhatsApp); hover to sheet.
- **Ghost:** no fill or border, 14px side padding, hover a 7% ink wash. Only the desktop nav WhatsApp.
- **Active / Focus:** `translateY(1px)` on press; focus-visible is the global 2px ink outline in pill shape.
- **Mobile:** nav buttons compact to 42px / 18px padding / 15px text; hero buttons stretch to fill the row at 54px; bottom-bar buttons are 48px and block-width.

### Chips
- **Style:** the hero strip only. White at 82% over an 8px blur, 14px 600 text tracked 0.04em, 8px 14px padding, pill; 6px between chips, right-aligned at the photo's bottom-right. Hidden under 720px.
- **State:** static, non-interactive.

### Cards / Containers
- **Corner Style:** 14px.
- **Background:** white on any band. One card in the Spaces row (Kitchens, index 1) is charcoal with on-ink text and an inverted white disc; the section-drawing card is white with 40px padding.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** none.
- **Internal Padding:** 26px (22px mobile); Spaces cards are 318px wide, minimum 300px tall, disc top, title and small muted copy bottom with a 56px gap.

### Photo Panel
The page's signature container: a 14px-rounded panel with a `{colors.line}` placeholder fill, a cover-fit image, and either (a) a scrim plus caption at 24px inset with a white h3 and on-ink small copy (Services), (b) a white caption pill at 16px inset (Process), or (c) a white caption card at 24px inset with a 20px title and small muted line (hero). When the panel is a link, hover and focus scale the image to 1.03 over 1.2s on the spring ease; reduced motion disables the scale.

### Inputs / Fields
None. The page has no form; conversion is click-to-call and WhatsApp deep links.

### Navigation
- Sticky, 80px, paper at 88% over blur, 1px rule beneath. Wordmark "/SIMPLEX" 22px 600 tracked caps at left; four 16px 600 links centred, 36px apart, each with a 2px ink underline that scales in from the left over 0.25s on hover and focus; ghost WhatsApp and primary Call pills at right, 8px apart.
- Mobile: 64px, links and ghost button hidden, wordmark 19px, a compact Call pill; a fixed bottom bar (greige 90% over blur, 1px rule above, 8px padding, Call primary and WhatsApp light, block-width 48px) slides up over 0.35s once the hero CTA leaves the viewport.
- Footer: greige, 1px rule above, wordmark 18px, 600 small links that underline at 4px offset on hover, copyright note right-aligned.

### Icon Disc and Step Button
48px charcoal circle holding a 22px line icon in on-ink (white disc with ink icon on the dark card). The scroller's step buttons are 44px circles with a 1px ink border holding an 18px arrow; hover fills ink, disabled fades to 30%.

### Section Drawing (signature)
A technical plan and sill section of a two-track sliding window, drawn as SVG in the white card: 1.25px ink strokes with non-scaling stroke, white cut-outs, and annotations in ink-2 at 600 weight, 0.08em tracked caps. On entry each stroke draws along its measured length at 1600 SVG units per second, overlapping 30%, compressed into a 2.2s budget, with labels appearing at the end; reduced motion shows the finished drawing.

### Definition List (Close panel)
Three columns above a `{colors.line-dark}` rule inside the charcoal panel: label-role terms in `{colors.on-ink-2}` with 8px below, small on-ink descriptions.

## Do's and Don'ts

### Do:
- **Do** let the photographs be the only colour; keep the page to greige, sheet, paper, white and charcoal ink.
- **Do** open every section with the same head: h2 in columns 1–7, paragraph and optional action in columns 9–12, content 72px below.
- **Do** step surfaces up the ladder (greige, sheet, paper, white) when something needs to separate; adjacent bands must differ.
- **Do** use Source Sans 3 at 600 for anything that names or acts and 400 for anything that explains, with -0.025em / -0.018em tracking on display and headline sizes.
- **Do** keep charcoal to objects (buttons, discs, one card per row, the Close panel) and keep the Close panel's 24px radius concentric with its 14px photo at a 24px inset.
- **Do** use the one reveal (opacity plus 18px settle, 0.9s, `cubic-bezier(0.16, 1, 0.3, 1)`, staggered by `--d`) for entering content and render it already settled under reduced motion.
- **Do** put text over photographs only with the scrim (dark captions) or on a white caption card or pill.
- **Do** draw icons as 1.5px round-capped line strokes in a 24px box in currentColor.

### Don't:
- **Don't** add a box-shadow to anything, in any state.
- **Don't** add a gradient other than the caption scrim, or tint, duotone or overlay a photograph.
- **Don't** place an eyebrow, kicker, slash-label, numeral or any tracked-caps line above an h1 or h2.
- **Don't** introduce a brand accent, a second typeface, a third weight, or a monospace face.
- **Don't** make a full-bleed dark band; charcoal sits inside a light band as an object.
- **Don't** use hard corners or a radius other than 8px, 14px, 24px (Close panel only), a pill or a circle.
- **Don't** add blur or translucency to cards or bands; it is reserved for chrome that overlays scrolling content.
- **Don't** add a second motion grammar (parallax, marquee, bouncing CTAs); the settle reveal, the self-drawing section, the 1.03 photo hover and the bottom-bar slide are the entire vocabulary.
