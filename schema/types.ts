// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeDesigner {
  id: string;
  body: { value: string; summary?: string };
  education: string;
  path: string;
  photo: { url: string; alt: string; width: number; height: number };
  role: string;
  specialty: string;
  title: string;
  yearsExperience: number;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredItemsTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeProductLine {
  id: string;
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  materials: string[];
  path: string;
  pieceCount: number;
  priceRange: string;
  style: string;
  tagline: string;
  title: string;
}

export interface NodeRoomInspiration {
  id: string;
  body: { value: string; summary?: string };
  budgetRange: string;
  colorPalette: string;
  designStyle: string;
  featuredPieces: string[];
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  roomType: string;
  title: string;
}
