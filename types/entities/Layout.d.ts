interface DeviceAttributes {
  name: string;
  type: string;
  location: string;
  installation_date: string;
  createdAt: string;
  updatedAt: string;
  androidId: string;
  status: boolean;
}

interface DeviceData {
  id: number;
  attributes: DeviceAttributes;
}

interface Code {
  type: string;
  children: {
    text: string;
    type: string;
  }[];
}

interface LayoutAttributes {
  title: string;
  code: Code[];
  createdAt: string;
  updatedAt: string;
  device: {
    data: DeviceData;
  };
}

interface Layout {
  id: number;
  attributes: LayoutAttributes;
}

export type Layouts = Layout[];
