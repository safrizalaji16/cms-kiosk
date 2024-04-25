export interface Device {
  id: string;
  name: string;
  status: boolean;
  lastOnline: Date;
  lastOffline: Date;
  instalationDate: Date;
  templateId: number;
  locationId: number;
  updatedAt: Date;
  createdAt: Date;
}

export type Devices = Device[];
