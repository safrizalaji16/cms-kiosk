export interface Content {
  id: number;
  templateId: number | null;
  title: string;
  type: TypeData;
  url: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

export type Contents = Content[];
