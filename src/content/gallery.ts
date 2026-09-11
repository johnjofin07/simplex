// Reads the CMS-managed photo collections and shapes them for the components.
import { getCollection } from 'astro:content';
import type { ImageMetadata } from 'astro';

export type GalleryPhoto = { src: ImageMetadata; alt: string; caption: string };
export type Span = 'wide' | 'narrow' | 'third' | 'full';

const byOrder = <T extends { data: { order: number }; id: string }>(a: T, b: T) =>
  a.data.order - b.data.order || a.id.localeCompare(b.id);

/**
 * Every image under src/assets/photos, keyed by the root-relative path the CMS
 * writes into the YAML (/src/assets/photos/<folder>/<file>).
 */
const images = import.meta.glob<ImageMetadata>('/src/assets/photos/**/*.{jpg,jpeg,png,webp,avif,gif}', {
  eager: true,
  import: 'default',
});

/**
 * Resolves one YAML photo to its image module. Returns null, with a build
 * warning, when the file is gone: an image deleted from the Assets tab or on
 * GitHub while an entry still lists it should hide that photo, not break the
 * site.
 */
const toPhoto = (p: { image: string; caption: string; alt?: string }, where: string): GalleryPhoto | null => {
  const key = p.image.startsWith('/') ? p.image : `/${p.image}`;
  const src = images[key];
  if (!src) {
    console.warn(`[gallery] ${where} lists "${p.image}" but that file is not in the repo; the photo is skipped.`);
    return null;
  }
  return { src, alt: p.alt || p.caption, caption: p.caption };
};

const present = <T>(x: T | null): x is T => x !== null;

/**
 * Grid shape for the Work cards: a wide+narrow pair, three squares, one
 * full-width banner, repeated. The tail for a count that is not a multiple of
 * six is chosen so no row is left with a hole.
 */
const ROW = ['wide', 'narrow', 'third', 'third', 'third', 'full'] as const;
const TAIL: Record<number, readonly Span[]> = {
  1: ['full'],
  2: ['wide', 'narrow'],
  3: ['third', 'third', 'third'],
  4: ['third', 'third', 'third', 'full'],
  5: ['wide', 'narrow', 'third', 'third', 'third'],
};
export function spans(n: number): Span[] {
  const out: Span[] = [];
  for (let left = n; left > 0; ) {
    const chunk = left >= ROW.length ? ROW : TAIL[left];
    out.push(...chunk);
    left -= chunk.length;
  }
  return out;
}

/**
 * Each Work card with its cover and album, in `order`. The cover is the first
 * photo in the entry's list. Cards with no photos are left out.
 */
export async function serviceAlbums() {
  const entries = (await getCollection('services'))
    .sort(byOrder)
    .map((e) => {
      const file = `src/content/services/${e.id}.yml`;
      const album = e.data.photos.map((p) => toPhoto(p, file)).filter(present);
      if (album.length === 0) console.warn(`[gallery] "${e.data.title}" (${file}) has no photos; the card is hidden.`);
      return { e, album };
    })
    .filter(({ album }) => album.length > 0);
  const shape = spans(entries.length);
  return entries.map(({ e, album }, i) => ({
    key: e.id,
    title: e.data.title,
    text: e.data.text,
    span: shape[i],
    cover: album[0],
    album,
  }));
}

export async function designPhotos() {
  return (await getCollection('designs'))
    .sort(byOrder)
    .map((e) => toPhoto(e.data, `src/content/designs/${e.id}.yml`))
    .filter(present);
}
