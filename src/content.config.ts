// Content collections managed from the phone through Sveltia CMS at /admin.
// `image` paths are root-relative (/src/assets/photos/...), which is what the
// CMS writes and what Astro's image() helper resolves.
import { defineCollection, type SchemaContext } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const photo = ({ image }: SchemaContext) =>
  z.object({
    image: image(),
    caption: z.string(),
    alt: z.string().optional(),
  });

/**
 * One entry per card in the Work section. Each card's photos live in their
 * own folder, src/assets/photos/<entry id>/, and the first photo is the cover.
 */
const services = defineCollection({
  loader: glob({ pattern: '*.yml', base: './src/content/services' }),
  schema: (ctx) =>
    z.object({
      title: z.string(),
      text: z.string(),
      order: z.number().default(50),
      photos: z.array(photo(ctx)).default([]),
    }),
});

/** 3D designs shown in the horizontal row under "You see it finished". Files live in src/assets/photos/designs/. */
const designs = defineCollection({
  loader: glob({ pattern: '*.yml', base: './src/content/designs' }),
  schema: (ctx) => photo(ctx).extend({ order: z.number().default(50) }),
});

export const collections = { services, designs };
