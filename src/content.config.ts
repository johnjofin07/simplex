// Content collections managed from the phone through Sveltia CMS at /admin.
// Each entry is one YAML file holding a photo path, a caption and its order.
// `image` paths are root-relative (/src/assets/photos/...), which is what the
// CMS writes and what Astro's image() helper resolves.
import { defineCollection, type SchemaContext } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { serviceKeys } from './content/site';

const photoEntry = ({ image }: SchemaContext) => ({
  image: image(),
  caption: z.string(),
  order: z.number().default(50),
  alt: z.string().optional(),
});

/** Photographs shown in the Work section, one album per service. */
const work = defineCollection({
  loader: glob({ pattern: '*.yml', base: './src/content/work' }),
  schema: (ctx) =>
    z.object({
      ...photoEntry(ctx),
      service: z.enum(serviceKeys),
      cover: z.boolean().default(false),
    }),
});

/** 3D designs shown in the horizontal row under "You see it finished". */
const designs = defineCollection({
  loader: glob({ pattern: '*.yml', base: './src/content/designs' }),
  schema: (ctx) => z.object(photoEntry(ctx)),
});

export const collections = { work, designs };
