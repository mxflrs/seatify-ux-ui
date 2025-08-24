interface SanityBase {
  _id: string;
  _type: string;
  _key?: string;
  _createdAt?: string;
  _updatedAt?: string;
  _rev?: string;
  _originalId?: string;
  image: SanityImage;
  description: string;
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