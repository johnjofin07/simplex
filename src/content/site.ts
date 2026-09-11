// =====================================================================
// SITE CONTENT — verified by the owner on 2026-09-11 unless marked
// `TODO(owner)`. Contact details, address, email and Instagram were supplied
// by the owner on 2026-09-11. Still open: opening hours.
// Fixed photographs (hero, process, contact) are keyed in photos.ts. The Work
// cards (title, text, photos) and the 3D design row are CMS-managed: see
// src/content/services/, src/content/designs/ and public/admin/config.yml.
// =====================================================================

export type IconName =
  | 'tape'
  | 'workshop'
  | 'seal'
  | 'broom'
  | 'cube'
  | 'wrench'
  | 'home'
  | 'kitchen'
  | 'shop'
  | 'office'
  | 'building'
  | 'porch'
  | 'balcony'
  | 'phone'
  | 'whatsapp'
  | 'mail'
  | 'instagram'
  | 'arrow'
  | 'arrow-left'
  | 'close'
  | 'photos'
  | 'menu';

export const site = {
  name: 'Simplex Aluminium',
  legalName: 'Simplex Aluminium Fabricators',
  wordmark: 'Simplex',
  siteUrl: 'https://simplexkdlr.com/',
  founded: 1993,
  /**
   * Both people take calls and WhatsApp. The first is the primary number for
   * calls, the second the primary number for WhatsApp; the footer lists both.
   */
  contacts: [
    { name: 'James Thiyyadi', phone: '+919447513658', display: '+91 94475 13658' },
    { name: 'Amal Jose', phone: '+919946272555', display: '+91 99462 72555' },
  ],
  /** E.164, used in tel: links. */
  phone: '+919447513658',
  /** How the number is printed on the page. */
  phoneDisplay: '+91 94475 13658',
  /** Digits only, no plus, used in https://wa.me/<number>. */
  whatsapp: '919946272555',
  whatsappDisplay: '+91 99462 72555',
  whatsappPrefill: "Hi Simplex, I'd like a free site visit for ",
  email: 'simplexkdlr@gmail.com',
  instagram: 'https://www.instagram.com/simplexaluminium',
  instagramHandle: '@simplexaluminium',
  /** Printed one line per entry. */
  address: ['Near AR Hospital, Chandapura', 'Kodungallur, Thrissur', 'Kerala'],
  hours: '', // TODO(owner) opening hours; leave empty to hide
  serviceArea: 'All of Kerala',

  nav: [
    { href: '#why', label: 'Why us' },
    { href: '#work', label: 'Gallery' },
    { href: '#process', label: 'Process' },
    { href: '#design', label: '3D design' },
    { href: '#contact', label: 'Contact' },
  ],

  hero: {
    headline: 'Interior and exterior aluminium solutions.',
    sub: 'Fabricated and fitted across Kerala since 1993. Outside: structural glazing, ACP cladding, windows, doors and car porches. Inside: kitchens, wardrobes and partitions. Free site visit, free quotation and 3D images before we start.',

    photo: 'hero',
    building: 'heroBuilding',
  },

  why: {
    headline: 'Thirty-three years, one thousand sites, one team.',
    sub: 'Simplex has fabricated aluminium in Kerala since 1993, from a single window to a whole glazed facade. The people who measure your site are the people who make and fit the work.',
    stats: [
      { value: '33', unit: 'years', text: 'in business since 1993' },
      { value: '1000+', unit: 'sites', text: 'completed across Kerala' },
      { value: '30+', unit: 'people', text: 'on the active team' },
      { value: '2000', unit: 'sq ft', text: 'live workshop in Kodungallur' },
    ],
    points: [
      { icon: 'tape', title: 'Free site visit and quotation', text: 'We come to the site anywhere in Kerala, measure, and give you an itemised quotation. No charge for either.' },
      { icon: 'cube', title: '3D images before work starts', text: 'You see the finished job as 3D images first. Sit with us as many times as you like until it is right.' },
      { icon: 'workshop', title: 'Made in our own workshop', text: 'Fabricated in our 2000 sq ft workshop by a team we trained ourselves. Over a thousand people have learned the trade here.' },
      { icon: 'wrench', title: 'Lifetime support and maintenance', text: 'Once we hand over, we stay responsible. Call us for adjustments, sealing or service for as long as the work stands.' },
    ] as { icon: IconName; title: string; text: string }[],
    materials: {
      label: 'Materials',
      text: 'High-grade aluminium, glass and ACP sourced directly from the industry’s first brands.',
      brands: ['Eurobond', 'Aludecor', 'Viva'],
    },
  },

  services: {
    headline: 'Every kind of aluminium work, large scale and small',
    sub: 'From one window to a whole building front. Glass, ACP and aluminium, measured, made and fitted by Simplex.',
    /** The cards themselves (title, text, photos) live in src/content/services/, one file per card. */
  },

  process: {
    headline: 'Site visit, design, quotation, then our responsibility till the end.',
    sub: 'The same five steps on every job, whether it is one window or a three-storey front.',
    steps: [
      { n: '01', title: 'Free site visit', text: 'We come to you anywhere in Kerala, measure the site and listen to what you need.' },
      { n: '02', title: 'Discussion and 3D design', text: 'We prepare 3D images of the finished work and sit with you as many times as it takes. Unlimited sittings, free consultation.' },
      { n: '03', title: 'Free quotation', text: 'An itemised quotation with the materials and brands named. No charge, no obligation.' },
      { n: '04', title: 'Contract and fabrication', text: 'On approval we sign a full contract and take complete responsibility until the work is finished. Profiles are cut and assembled in our workshop.' },
      { n: '05', title: 'Fitting, handover and lifetime support', text: 'Our own team installs, seals and hands over. After that, support and maintenance for life.' },
    ],
    photos: [
      { photo: 'kitchenGreen', caption: 'Sage green modular kitchen' },
    ] as { photo: string; caption: string }[],
  },

  design: {
    headline: 'You see it finished before we begin.',
    sub: 'Every project starts as a 3D design. We model the building or the room, place the glazing, cladding and cupboards, and show you the images. Change anything, as often as you need. Work starts only when you approve.',
    /** The designs themselves live in src/content/designs/. */
  },

  close: {
    headline: 'Call us for a free site visit.',
    sub: 'Tell us the site and what you have in mind. We will come, measure, design it in 3D and give you a quotation before anything is cut.',
    photo: 'renderFins',
  },
} as const;

export const telHref = `tel:${site.phone}`;
export const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappPrefill)}`;
