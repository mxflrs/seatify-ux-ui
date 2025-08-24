// import type { SanityImage } from "./landing-page.interface";


export interface BrandConfig {
  _type: "brandConfig";
  companyName: string;
  slogan: string;
  favicon: SanityImage;
  lightLogo: SanityImage;
  socialMedia: [
    {
      title: string;
      url: string;
      lightLogo: SanityImage;
      darkLogo: SanityImage;
    }
  ]
}
