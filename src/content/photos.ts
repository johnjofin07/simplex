// Fixed photos referenced by key from site.ts: the hero layers, the process
// lead photo and the contact panel. Everything in the Work albums and the 3D
// design row is CMS-managed instead (src/content/work/, src/content/designs/).
// Apart from the hero sky and building (stock, see PROVENANCE.md), every file
// is a photograph or 3D render of Simplex's own work, supplied by the owner.
import type { ImageMetadata } from 'astro';
import heroSky from '../assets/photos/hero-sky.jpg';
import heroBuilding from '../assets/photos/hero-building.png';
import facadeHospital from '../assets/photos/facade-hospital.jpg';
import renderFins from '../assets/photos/render-fins.jpg';

export type Photo = { src: ImageMetadata; alt: string };

export const photos: Record<string, Photo> = {
  hero: { src: heroSky, alt: '' },
  heroBuilding: { src: heroBuilding, alt: 'Sawtooth roofline of a glass-and-aluminium curtain wall' },
  hospital: { src: facadeHospital, alt: 'Hospital entrance with a curved structural-glazing front between ACP-clad walls' },
  renderFins: { src: renderFins, alt: '3D design of a two-storey building with sculpted vertical ACP fins over a glazed ground floor' },
};
