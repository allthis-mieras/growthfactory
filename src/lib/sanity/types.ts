// TypeScript types for Sanity content
// These types will be used when integrating with Sanity CMS

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  caption?: string;
}

export interface TeamMember {
  _id: string;
  _type: 'teamMember';
  name: string;
  role: string;
  bio?: string;
  image?: SanityImage;
  linkedinUrl?: string;
  orderRank?: string;
}

export interface ProcessStep {
  _id: string;
  _type: 'processStep';
  number: number;
  title: string;
  description: string;
  icon?: SanityImage;
  orderRank?: string;
}

export interface Testimonial {
  _id: string;
  _type: 'testimonial';
  quote: string;
  author: string;
  company?: string;
  role?: string;
  image?: SanityImage;
  rating?: number;
  featured?: boolean;
  category?: string;
  orderRank?: string;
}

// Block type interfaces
export interface HeroBlock {
  _type: 'heroBlock';
  _key: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: SanityImage;
  variant?: 'default' | 'centered' | 'split';
}

export interface ListBlock {
  _type: 'listBlock';
  _key: string;
  title: string;
  items: string[];
  variant?: 'recognition' | 'features' | 'benefits';
  description?: string;
  layout?: 'list' | 'grid' | 'cards';
  ctaText?: string;
  ctaLink?: string;
  image?: SanityImage;
  imagePosition?: 'left' | 'right';
}

export interface TestimonialBlock {
  _type: 'testimonialBlock';
  _key: string;
  title?: string;
  testimonials?: Testimonial[];
  displayMode?: 'random' | 'all' | 'featured';
  layout?: 'single' | 'two-column' | 'carousel';
  showRating?: boolean;
  showImage?: boolean;
}

export interface ProcessBlock {
  _type: 'processBlock';
  _key: string;
  title: string;
  subtitle: string;
  steps: ProcessStep[];
  layout?: 'horizontal' | 'vertical' | 'timeline';
}

export interface TeamBlock {
  _type: 'teamBlock';
  _key: string;
  title: string;
  description: string;
  members: TeamMember[];
  ctaText?: string;
  ctaLink?: string;
}


export interface ContactBlock {
  _type: 'contactBlock';
  _key: string;
  title: string;
  subtitle: string;
  formFields?: Array<{
    name: string;
    label: string;
    type: string;
    required: boolean;
  }>;
}

export interface CtaBlock {
  _type: 'ctaBlock';
  _key: string;
  title: string;
  description?: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundStyle?: 'default' | 'gradient' | 'image';
  backgroundImage?: SanityImage;
}

export interface ContentBlock {
  _type: 'contentBlock';
  _key: string;
  title: string;
  content: any[]; // Portable text
  image?: SanityImage;
  imagePosition?: 'left' | 'right' | 'top' | 'bottom';
}

// Union type for all blocks
export type PageBlock =
  | HeroBlock
  | ListBlock
  | TestimonialBlock
  | ProcessBlock
  | TeamBlock
  | ContactBlock
  | CtaBlock
  | ContentBlock;

export interface Homepage {
  _id: string;
  _type: 'homepage';
  pageBlocks: PageBlock[];
}

// Utility types for component props
export interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export interface RecognitionProps {
  title: string;
  items: string[];
  solutionText: string;
  ctaText: string;
  ctaHref: string;
}

export interface WhatYouGetProps {
  title: string;
  items: string[];
}

export interface TestimonialProps {
  quote: string;
  author: string;
}

export interface ProcessProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

export interface TeamProps {
  title: string;
  description: string;
  members: TeamMember[];
  ctaText: string;
  ctaHref: string;
}

export interface WhyItWorksProps {
  title: string;
  items: string[];
}

export interface ContactFormProps {
  title: string;
  subtitle: string;
}
