// Photo registry. Keys are referenced from site.ts. All files are stock
// placeholders (see PROVENANCE.md next to each folder). TODO(owner): replace
// each with a photograph of Simplex's own work; keep the key, change the file.
import type { ImageMetadata } from 'astro';
import plate01 from '../assets/plates/plate-01.jpg';
import plate02 from '../assets/plates/plate-02.jpg';
import plate05 from '../assets/plates/plate-05.jpg';
import hero from '../assets/photos/hero.jpg';
import wardrobe from '../assets/photos/wardrobe-open.jpg';
import partition from '../assets/photos/partition.jpg';
import balcony from '../assets/photos/mesh-balcony.jpg';
import profiles from '../assets/photos/profiles.jpg';
import workshop from '../assets/photos/workshop-cut.jpg';
import fitting from '../assets/photos/fitting.jpg';
import windowDetail from '../assets/photos/window-detail.jpg';

export type Photo = { src: ImageMetadata; alt: string };

export const photos: Record<string, Photo> = {
  hero: { src: hero, alt: 'Floor-to-ceiling aluminium-framed sliding glass wall opening onto a garden with a large tree' },
  windows: { src: plate01, alt: 'Floor-to-ceiling gridded aluminium window wall in a bright empty room' },
  doors: { src: plate02, alt: 'Black aluminium sliding door opening from an empty room onto a courtyard' },
  wardrobes: { src: wardrobe, alt: 'Built-in wardrobe with a slim-framed sliding mirror door, one side open showing hanging clothes' },
  kitchens: { src: plate05, alt: 'Modern kitchen with flat-front handleless cabinets' },
  partitions: { src: partition, alt: 'Office corridor with black slim-framed glass partitions' },
  balcony: { src: balcony, alt: 'Black aluminium sliding door opening onto a balcony with a sea view' },
  profiles: { src: profiles, alt: 'Stack of silver aluminium extrusion profiles' },
  workshop: { src: workshop, alt: 'Aluminium part being machined on a CNC mill in the workshop' },
  fitting: { src: fitting, alt: 'Gloved hand marking a panel against a tape measure' },
  close: { src: windowDetail, alt: 'Dark aluminium window frame set in a granite-clad wall' },
};
