// Reads the CMS-managed photo collections and shapes them for the components.
import { getCollection } from 'astro:content';
import type { ImageMetadata } from 'astro';

export type GalleryPhoto = { src: ImageMetadata; alt: string; caption: string };
export type Span = 'wide' | 'narrow' | 'third' | 'full';

const byOrder = <T extends { data: { order: number }; id: string }>(a: T, b: T) =>
  a.data.order - b.data.order || a.id.localeCompare(b.id);

const toPhoto = (p: { image: ImageMetadata; caption: string; alt?: string }): GalleryPhoto => ({
  src: p.image,
  alt: p.alt || p.caption,
  caption: p.caption,
});

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
  const entries = (await getCollection('services')).sort(byOrder).filter((e) => {
    if (e.data.photos.length > 0) return true;
    console.warn(`[gallery] "${e.data.title}" (src/content/services/${e.id}.yml) has no photos; the card is hidden.`);
    return false;
  });
  const shape = spans(entries.length);
  return entries.map((e, i) => {
    const album = e.data.photos.map(toPhoto);
    return { key: e.id, title: e.data.title, text: e.data.text, span: shape[i], cover: album[0], album };
  });
}

export async function designPhotos() {
  return (await getCollection('designs')).sort(byOrder).map((e) => toPhoto(e.data));
}
