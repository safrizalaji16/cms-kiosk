export interface Location {
  id: number;
  name: string;
  parentId?: number;
  updatedAt: Date;
  createdAt: Date;
}

export type Locations = Location[];
