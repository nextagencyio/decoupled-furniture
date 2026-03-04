
export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface DrupalNode {
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

export interface DrupalArticle extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  image?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{
      name: string
      url: string
      width: number
      height: number
    }>
  }
}

export interface ArticleTeaserData {
  nodeArticles: {
    nodes: DrupalArticle[]
  }
}

export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  featuresTitle?: string
  featuresSubtitle?: string
  featuresItems?: DrupalFeature[]
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface DrupalFeature {
  id: string
  title: string
  description?: {
    processed: string
  }
  icon?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
export interface DrupalProductLine {
  id: string
  title: string
  path?: string
  body?: { processed: string; summary?: string }
  tagline?: string
  priceRange?: string
  materials?: string
  style?: string
  pieceCount?: number
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
}

export interface ProductLinesData {
  nodeProductLines: {
    nodes: DrupalProductLine[]
  }
}

export interface DrupalRoomInspiration {
  id: string
  title: string
  path?: string
  body?: { processed: string; summary?: string }
  roomType?: string
  designStyle?: string
  budgetRange?: string
  featuredPieces?: string
  colorPalette?: string
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
}

export interface RoomInspirationsData {
  nodeRoomInspirations: {
    nodes: DrupalRoomInspiration[]
  }
}

export interface DrupalDesigner {
  id: string
  title: string
  path?: string
  body?: { processed: string; summary?: string }
  role?: string
  specialty?: string
  yearsExperience?: number
  education?: string
  photo?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
}

export interface DesignersData {
  nodeDesigners: {
    nodes: DrupalDesigner[]
  }
}
