// queries
import type { AxiosError, AxiosResponse } from "axios";
import type { QueryListResponse } from "../../types/axios/Response";
import type { Device } from "../../types/entities/Device";
import axios from "axios";
import qs from "qs";
import api from "@/constants/api";

export const deviceService = {
  // queries
  getAllDevices: async (param: Record<string, unknown>, token?: string) => {
    try {
      const { data } = (await axios.get(api.devicesPath(), {
        headers: {
          Authorization: `${token}`,
        },
      })) as AxiosResponse<QueryListResponse<Device[]>, {}>;

      return data;
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  },
};
