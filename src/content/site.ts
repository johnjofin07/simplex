// =====================================================================
// DEMO CONTENT — NOTHING IN THIS FILE IS CONFIRMED BY THE OWNER.
//
// Every line marked `TODO(owner)` is a placeholder written so the page can be
// built and reviewed at full fidelity. Replace each one with the real value;
// nothing else on the site needs to change. Do not add a founding year, a
// project count, a client name or a quotation here until the owner supplies it.
// Photographs are stock placeholders; see src/assets/photos/PROVENANCE.md and
// src/assets/plates/PROVENANCE.md, and the `photo` keys in src/content/photos.ts.
// =====================================================================

export type IconName = 'tape' | 'workshop' | 'seal' | 'broom' | 'home' | 'kitchen' | 'shop' | 'office' | 'balcony' | 'phone' | 'whatsapp' | 'arrow' | 'arrow-left';

export const site = {
  name: 'Simplex Aluminium',
  wordmark: '/Simplex',
  siteUrl: 'https://simplex-aluminium.example', // TODO(owner) real domain
  /** E.164, used in tel: links. */
  phone: '+15555550100', // TODO(owner) real phone number in E.164
  /** How the number is printed on the page. */
  phoneDisplay: '+1 555 555 0100', // TODO(owner) real phone number as printed
  /** Digits only, no plus, used in https://wa.me/<number>. */
  whatsapp: '15555550100', // TODO(owner) real WhatsApp number, digits only
  whatsappDisplay: '+1 555 555 0100', // TODO(owner) real WhatsApp number as printed
  whatsappPrefill: "Hi Simplex, I'd like a site measurement for ", // TODO(owner) opening line of the WhatsApp message
  email: '', // TODO(owner) optional; leave empty to hide
  address: ['Workshop address, line one', 'Town, postcode'], // TODO(owner) real workshop address
  hours: 'Opening hours to confirm', // TODO(owner) real opening hours
  serviceArea: 'Town and surrounding districts', // TODO(owner) real service area

  nav: [
    { href: '#work', label: 'Work' },
    { href: '#why', label: 'Why us' },
    { href: '#process', label: 'Process' },
    { href: '#contact', label: 'Contact' },
  ],

  hero: {
    headline: 'Windows, doors and whole rooms, made in aluminium.', // TODO(owner) headline
    sub: 'Measured on site, fabricated in our workshop and fitted clean. One material and one team, from the window frame to the wardrobe.', // TODO(owner) sub-line
    photo: 'hero',
    caption: { title: 'Sliding glass wall', line: 'Powder-coated frame · demo photograph' }, // TODO(owner) real project caption
    strip: ['Windows', 'Doors', 'Wardrobes', 'Kitchens', 'Interiors'], // TODO(owner) confirm
  },

  why: {
    headline: 'One material, one fabricator, the whole room.', // TODO(owner)
    sub: 'A window shop makes frames. We make the frames, the doors, the cupboards and the partitions, so every edge in the room is cut by the same hands and lines up.', // TODO(owner)
    points: [
      { icon: 'tape', title: 'Measured on site', text: 'We check every opening with a tape before anything is cut.' },
      { icon: 'workshop', title: 'Made in our workshop', text: 'Cut and assembled off site, so your home stays quiet and clean.' },
      { icon: 'seal', title: 'Sealed against weather', text: 'Gaskets, pile seals and drained sills. Wind and rain have no straight path in.' },
      { icon: 'broom', title: 'Fitted clean', text: 'Installed, sealed and swept. The room is left as we found it.' },
    ] as { icon: IconName; title: string; text: string }[], // TODO(owner) confirm all four
  },

  services: {
    headline: 'Aluminium for every part of the room', // TODO(owner)
    sub: 'From a single leaking window to a full shop interior. Every job is measured, made and fitted by Simplex.', // TODO(owner)
    items: [
      { photo: 'windows', title: 'Windows', text: 'Sliding and casement windows, sealed against weather.', span: 'wide' },
      { photo: 'doors', title: 'Doors', text: 'Sliding, hinged and folding doors, fitted to the opening.', span: 'narrow' },
      { photo: 'wardrobes', title: 'Wardrobes and cupboards', text: 'Sliding-door wardrobes and storage that never warps or swells.', span: 'third' },
      { photo: 'kitchens', title: 'Kitchen shutters', text: 'Flat-front aluminium shutters for kitchens that see steam every day.', span: 'third' },
      { photo: 'partitions', title: 'Partitions and shopfronts', text: 'Glass and aluminium partitions for offices, shops and showrooms.', span: 'third' },
      { photo: 'balcony', title: 'Balcony enclosures and mosquito mesh', text: 'Enclose a balcony or add mesh to any opening without changing the look of the frame.', span: 'full' },
    ] as { photo: string; title: string; text: string; span: 'wide' | 'narrow' | 'third' | 'full' }[], // TODO(owner) confirm services
  },

  spaces: {
    headline: 'Built for the space you are in', // TODO(owner)
    sub: 'Every room asks something different of the metal. We size the profile, the finish and the sealing to the space, not the other way round.', // TODO(owner)
    items: [
      { icon: 'home', title: 'Homes and flats', text: 'Windows that seal, doors that glide, wardrobes that last.' },
      { icon: 'kitchen', title: 'Kitchens', text: 'Shutters and frames that shrug off steam, heat and daily wiping.' },
      { icon: 'shop', title: 'Shops and showrooms', text: 'Shopfronts, display partitions and counters in one clean finish.' },
      { icon: 'office', title: 'Offices', text: 'Glass partitions and doors that keep light in and noise out.' },
      { icon: 'balcony', title: 'Balconies', text: 'Enclosures and mesh that open the view and keep the weather out.' },
    ] as { icon: IconName; title: string; text: string }[], // TODO(owner) confirm
  },

  process: {
    headline: 'Measured, made, fitted.', // TODO(owner)
    sub: 'Three visits at most: one to measure, one to fit, and one more only if you want a second opinion on the finish.', // TODO(owner)
    steps: [
      { n: '01', title: 'Measure', text: 'We come to you with a tape and check every opening before anything is cut. You choose the finish from real samples, not a chart.' },
      { n: '02', title: 'Fabricate', text: 'Profiles are cut, joined and glazed in our workshop, so the site stays quiet and clean while the work is made.' },
      { n: '03', title: 'Fit', text: 'Installed, sealed and adjusted on site. Then we sweep up and leave the room as we found it.' },
    ], // TODO(owner) process copy
    photos: [
      { photo: 'profiles', caption: 'Aluminium extrusion, ready for cutting' },
      { photo: 'workshop', caption: 'Machined in the workshop, not on site' },
      { photo: 'fitting', caption: 'Measured before anything is cut' },
    ], // TODO(owner) real workshop and site photographs
  },

  section: {
    headline: 'Where the weather stops', // TODO(owner)
    lines: [
      'Sealing is the gap that is not there. The sash meets the frame on a continuous gasket, and the two sashes meet each other at an interlock with a pile seal, so wind and rain have no straight path in.',
      'Water that does get past the outer sash lands in the sill track and leaves through drain slots, not into the wall.',
      'Aluminium does not drink water. A frame or a wardrobe made from it stays the size it was cut to, in the monsoon and in the dry season.',
    ], // TODO(owner) section sheet copy
  },

  close: {
    headline: 'Call us. We measure on site.', // TODO(owner) closing headline
    sub: 'Tell us the room and the problem. We will come, measure and give you a price before anything is cut.', // TODO(owner)
    photo: 'close',
  },
} as const;

export const telHref = `tel:${site.phone}`;
export const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappPrefill)}`;
