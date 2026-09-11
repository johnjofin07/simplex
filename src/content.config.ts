// Content collections managed from the phone through Sveltia CMS at /admin.
// `image` paths are root-relative (/src/assets/photos/...), which is what the
// CMS writes. They are kept as plain strings here and resolved to image
// modules in gallery.ts, so a photo that was deleted from the repo while an
// entry still points at it drops out of the site with a build warning instead
// of failing the whole build (Astro's image() helper would throw).
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const photo = () =>
  z.object({
    image: z.string(),
    caption: z.string(),
    alt: z.string().optional(),
  });

/**
 * One entry per card in the Work section. Each card's photos live in their
 * own folder, src/assets/photos/<entry id>/, and the first photo is the cover.
 */
const services = defineCollection({
  loader: glob({ pattern: '*.yml', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    text: z.string(),
    order: z.number().default(50),
    photos: z.array(photo()).default([]),
  }),
});

/** 3D designs shown in the horizontal row under "You see it finished". Files live in src/assets/photos/designs/. */
const designs = defineCollection({
  loader: glob({ pattern: '*.yml', base: './src/content/designs' }),
  schema: photo().extend({ order: z.number().default(50) }),
});

export const collections = { services, designs };
