export interface Device {
  id: number;
  attributes: {
    name: string;
    type: string;
    location: string;
    installation_date: string; // Perbaikan penulisan
    createdAt: string;
    updatedAt: string;
    androidId: string;
    status: boolean;
  };
}

export type Devices = Device[];
