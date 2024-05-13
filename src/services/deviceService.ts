// queries
import type { AxiosError, AxiosResponse } from "axios";
import type { QueryListResponse } from "../../types/axios/Response";
import type { Device, Devices } from "../../types/entities/Device";
import axios from "axios";
import api from "@/constants/api";

export const deviceService = {
  // queries
  getAllDevices: async (param: Record<string, unknown>, token?: string) => {
    try {
      const { data } = (await axios.get(api.devicesPath(), {
        headers: {
          Authorization: `${token}`,
        },
      })) as AxiosResponse<QueryListResponse<Devices>, {}>;

      return data;
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  },
  getDevice: async (id: string, token: string) => {
    try {
      const { data } = (await axios.get(api.devicesPath(id), {
        headers: {
          Authorization: `${token}`,
        },
      })) as AxiosResponse<QueryListResponse<Device>, {}>;
      return data;
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  },
  createDevice: async (param: Record<string, unknown>, token: string) => {
    try {
      const { data } = await axios.post(api.devicesPath(), param, {
        headers: {
          Authorization: `${token}`,
        },
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  },

  editDevice: async (
    id: string,
    param: Record<string, unknown>,
    token: string
  ) => {
    try {
      const { data } = await axios.put<Device, AxiosResponse<Device>>(
        api.devicesPath(id),
        param,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      return data;
    } catch (e) {
      console.error((e as AxiosError).request);
      throw e;
    }
  },
};
