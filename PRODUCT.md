# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (owner confirmed 2026-09-11; "astra" in the brief read as Astro). Static
output, one page. Repo lives at `Junkyard/simplex/`; `Junkyard/` is a plain
folder of side projects, not a repo.

## Users

Primary: homeowners, flat owners and small business owners who need aluminium
work done on a real space — a window that must be sealed, a door, a cupboard,
a kitchen or shop interior — and are comparing one or two local fabricators
before calling. They arrive on a phone, often from a WhatsApp forward, a
Google Maps card or a word-of-mouth link. They are not specifiers; they want
to see the work, believe it will be neat, and reach a person fast.

Secondary (unconfirmed): interior designers and contractors who subcontract
aluminium work and want a fabricator who finishes cleanly.

## Product Purpose

A one-page site that makes Simplex Aluminium look like the premium, careful
choice among aluminium fabricators and turns that impression into a call or a
WhatsApp message. Success is a visitor who scrolls the page and taps Call or
WhatsApp.

## Positioning

Simplex does the whole interior in aluminium, not only frames: windows and
doors with proper sealing, cupboards and wardrobes, and full interior fit-outs
(owner's words: "windows door sealings, cubbords, interior designs — all can
be done using aluminium"). The claim a neighbouring window-and-door shop
cannot make is "one material, one fabricator, the whole room". Everything
else about the positioning (years in business, region, named projects,
finishes offered) is UNCONFIRMED and must not be invented as fact.

## Operating Context

- Work is measured on site, fabricated in a workshop and installed on site.
- The visitor's real scene is a room with a problem: a leaking window, an old
  wooden cupboard, a shop interior that needs to look clean and last.
- Contact happens by phone and WhatsApp; there is no quote form, no CRM and
  no form backend in scope.

## Capabilities and Constraints

- One page. No CMS, no blog, no login, no multi-language (English only for
  now).
- Primary and only conversion: click-to-call and WhatsApp deep link. Phone
  number, WhatsApp number, address and service area are PLACEHOLDERS until
  the owner supplies them.
- Content is demo content for now; owner will supply real copy and photos
  later. Every placeholder must be obviously marked in source so it can be
  swapped without a redesign.
- Must be fast on a mid-range Android phone on mobile data (static Astro,
  minimal JS, optimised images).

## Brand Commitments

- Name: Simplex Aluminium. No logo exists yet; a wordmark is acceptable until
  one is supplied.
- Owner's binding visual constraints (2026-09-11): modern and premium; simple
  and elegant; minimal colours; a few genuine "wow" moments.
- Revised 2026-09-11 (redesign brief): the page is photo-led, modelled on the
  /AXION reference; large photographs carry all the colour. Rounded corners
  (12px cards, pill buttons) are adopted to match the reference, replacing the
  earlier "sharp edges, minimal images" note. The reference's slash-prefixed
  section labels were dropped the same day at the user's decision; only the
  wordmark keeps its slash.
- Soft, non-binding references the owner "liked" (2026-09-11), copied to
  `.impeccable/ref/owner-ref-1-socrates.png` and
  `.impeccable/ref/owner-ref-2-axion.png`:
  1. Socrates landing page: light warm ground, quiet panels, one small warm
     accent, large calm display type, marquee of short quotes.
  2. /AXION logistics page: one large product photograph dominating the
     hero, slash-prefixed mono section labels (`/WHY CHOOSE US`), headline
     left with a short paragraph right, four-up icon rows, greige ground.
  Take the calm, the photograph's scale and the label grammar from them,
  not their rounded pills, bold weights or card grids.

## Evidence on Hand

- No real photographs, testimonials, project list, client names, certificates
  or numbers exist in the repo yet. None may be fabricated as fact. Demo
  material must be authored at full fidelity and labelled synthetic in source
  (a `TODO(owner)` comment or a `placeholders.ts` map) so the owner can
  replace it.
- Owner reference screenshots in `.impeccable/ref/owner-ref-*.png`
  (inspiration only, never assets).

## Product Principles

1. The work is the argument. Show fabricated aluminium doing its job before
   describing the company.
2. One tap to a human. Call and WhatsApp are reachable from every viewport
   without hunting.
3. Restraint reads as quality. Few colours, few images, exact alignment, no
   decoration that a workshop would not recognise as craft.
4. Honest until the owner says otherwise. Placeholders are visibly
   placeholders; no invented years, counts or client logos.
5. Fast on the phone the customer actually holds.

## Accessibility & Inclusion

WCAG 2.2 AA as the floor: 4.5:1 text contrast, visible focus, tap targets of
at least 44px, reduced-motion respected for every "wow" element, all
information conveyed without colour alone.
