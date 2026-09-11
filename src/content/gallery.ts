// Reads the CMS-managed photo collections and shapes them for the components.
import { getCollection, type CollectionEntry } from 'astro:content';
import type { ImageMetadata } from 'astro';
import { site, type ServiceKey } from './site';

export type GalleryPhoto = { src: ImageMetadata; alt: string; caption: string };

const byOrder = <T extends { data: { order: number }; id: string }>(a: T, b: T) =>
  a.data.order - b.data.order || a.id.localeCompare(b.id);

const toPhoto = (e: CollectionEntry<'work'> | CollectionEntry<'designs'>): GalleryPhoto => ({
  src: e.data.image,
  alt: e.data.alt || e.data.caption,
  caption: e.data.caption,
});

/** Each service card with its cover and album, in site.ts order. Services with no photos are left out. */
export async function serviceAlbums() {
  const all = (await getCollection('work')).sort(byOrder);
  return site.services.items.flatMap((s) => {
    const entries = all.filter((e) => e.data.service === s.key);
    if (entries.length === 0) {
      console.warn(`[gallery] No work photos tagged "${s.key}"; the "${s.title}" card is hidden.`);
      return [];
    }
    const coverEntry = entries.find((e) => e.data.cover) ?? entries[0];
    return [{ ...s, key: s.key as ServiceKey, cover: toPhoto(coverEntry), album: entries.map(toPhoto) }];
  });
}

export async function designPhotos() {
  return (await getCollection('designs')).sort(byOrder).map(toPhoto);
}
