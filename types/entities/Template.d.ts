export interface Template {
  id: number;
  name: string;
  htmlCode: string;
  coverImage: string;
  totalContents: string;
  updatedAt: Date;
  createdAt: Date;
}

export type Templates = Template[];
