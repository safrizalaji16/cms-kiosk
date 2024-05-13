export interface Layout {
  id: number;
  status: boolean;
  templateId: number;
  contentIds: number[];
  deviceId: string;
  updatedAt: Date;
  createdAt: Date;
}

export type Layouts = Layout[];
