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

interface UxuiHeroSection extends SectionBase {
  _type: 'uxuiHeroSection';
  cta: string;
  description: string;
  secondaryTitle: string;
  title: string;
  image?: SanityImage;
  videoUrl: string;
}

interface UxuiPainPromiseSection extends SectionBase {
  _type: 'uxuiPainPromiseSection';
  description: string;
  secondaryTitle: string;
  title: string;
}

interface UxuiServicesSection extends SectionBase {
  _type: 'uxuiServicesSection';
  cards: UxuiServiceCard[];
  secondaryTitle: string;
  title: string;
}

interface UxuiServiceCard {
  _key: string;
  title: string;
  description: string;
  icon: SanityImage;
}

interface CaseStudy {
  _key: string;
  title: string;
  subtitle: string;
  timeOnPage: string;
  bounceRate: string;
  before: {
    bounce: number;
    time: string;
  };
  after: {
    bounce: number;
    time: string;
  };
}
interface UxuiResultsSection extends SectionBase {
  _type: 'uxuiResultsSection';
  caseStudies: CaseStudy[];
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
  | UxuiHeroSection
  | UxuiPainPromiseSection
  | UxuiServicesSection
  | UxuiResultsSection
  | UxuiWhySection
  | UxuiFooterSection;

interface LandingPage extends SanityBase {
  _type: 'landingPage';
  _system: SanitySystem;
  sections?: Section[];
  slug: SanitySlug;
  title: string;
  image?: SanityImage;
  description?: string;
}

export const getSection = <T extends Section['_type']>(
  landingPage: LandingPage | null,
  type: T
): Extract<Section, { _type: T }> | undefined => {
  return landingPage?.sections?.find((section): section is Extract<Section, { _type: T }> =>
    section._type === type
  );
};

export interface SectionData {
  hero: UxuiHeroSection | undefined;
  painPromise: UxuiPainPromiseSection | undefined;
  services: UxuiServicesSection | undefined;
  results: UxuiResultsSection | undefined;
  why: UxuiWhySection | undefined;
  footer: UxuiFooterSection | undefined;
}

export const createSectionData = (landingPage: LandingPage | null): SectionData => ({
  hero: getSection(landingPage, 'uxuiHeroSection'),
  painPromise: getSection(landingPage, 'uxuiPainPromiseSection'),
  services: getSection(landingPage, 'uxuiServicesSection'),
  results: getSection(landingPage, 'uxuiResultsSection'),
  why: getSection(landingPage, 'uxuiWhySection'),
  footer: getSection(landingPage, 'uxuiFooterSection'),
});

export type {
  SanityBase,
  SanityReference,
  SanityImage,
  SanitySlug,
  SanitySystem,
  UxuiHeroSection,
  UxuiPainPromiseSection,
  UxuiServicesSection,
  UxuiResultsSection,
  UxuiWhySection,
  UxuiFooterSection,
  Section,
  LandingPage,
};