interface SanityBase {
  _id: string;
  _type: string;
  _key?: string;
  _createdAt?: string;
  _updatedAt?: string;
  _rev?: string;
  _originalId?: string;
}

interface SanityReference {
  _ref: string;
  _type: 'reference';
}

interface SanityImage {
  _type: 'image';
  asset: SanityReference;
}

interface SanitySlug {
  _type: 'slug';
  current: string;
}

interface SanitySystem {
  base: {
    id: string;
    rev: string;
  };
}

interface SectionBase extends SanityBase {
  _key: string;
}

interface HeroSection extends SectionBase {
  _type: 'heroSection';
  cta: string;
  description: string;
  secondaryTitle: string;
  title: string;
}

interface UxuiPainPromiseSection extends SectionBase {
  _type: 'uxuiPainPromiseSection';
  description: string;
  secondaryTitle: string;
  title: string;
}

interface UxuiServicesSection extends SectionBase {
  _type: 'uxuiServicesSection';
  cards: any[];
  secondaryTitle: string;
  title: string;
}

interface UxuiResultsSection extends SectionBase {
  _type: 'uxuiResultsSection';
  caseStudies: any[];
  description: string;
  secondaryTitle: string;
  title: string;
}

interface UxuiWhySection extends SectionBase {
  _type: 'uxuiWhySection';
  details: string[];
  secondaryTitle: string;
  title: string;
}

interface UxuiFooterSection extends SectionBase {
  _type: 'uxuiFooterSection';
  address: string;
  addressTag: string;
  cta: string;
  description: string;
  title1: string;
  title2: string;
}

type Section =
  | HeroSection
  | UxuiPainPromiseSection
  | UxuiServicesSection
  | UxuiResultsSection
  | UxuiWhySection
  | UxuiFooterSection;

interface LandingPage extends SanityBase {
  _type: 'landingPage';
  _system: SanitySystem;
  sections: Section[];
  slug: SanitySlug;
  title: string;
  image?: SanityImage;
  description?: string;
}