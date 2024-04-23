export interface Device {
  id: string;
  name: string;
  status: boolean;
  activeTemplate: boolean;
  lastOnline: Date;
  lastOffline: Date;
  instalationDate: Date;
  locationId: number;
  updatedAt: Date;
  createdAt: Date;
}

export type Devices = Device[];
