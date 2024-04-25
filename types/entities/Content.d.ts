export interface Format {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
}

export interface AssetData {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      large: Format;
      small: Format;
      medium: Format;
      thumbnail: Format;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    createdAt: string;
    updatedAt: string;
  };
}

export interface TypeData {
  data: any | null;
}

export interface Content {
  createdAt: Date;
  id: number;
  templateId: number | null;
  title: string;
  type: TypeData;
  updatedAt: Date;
  url: string;
  userId: number;
}

export type Contents = Content[];
