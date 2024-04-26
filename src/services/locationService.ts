// queries
import type { AxiosError, AxiosResponse } from "axios";
import type { QueryListResponse } from "../../types/axios/Response";
import type { Location } from "../../types/entities/Location";
import axios from "axios";
import api from "@/constants/api";

export const locationService = {
  // queries
  getAllLocations: async (param: Record<string, unknown>, token?: string) => {
    try {
      const { data } = (await axios.get(api.locationsPath(), {
        headers: {
          Authorization: `${token}`,
        },
      })) as AxiosResponse<QueryListResponse<Location[]>, {}>;

      return data;
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  },
  getLocation: async (id: string, token: string) => {
    try {
      const { data } = (await axios.get(api.locationsPath(id), {
        headers: {
          Authorization: `${token}`,
        },
      })) as AxiosResponse<QueryListResponse<Location>, {}>;
      return data;
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  },
  createLocation: async (param: Record<string, unknown>, token: string) => {
    try {
      const response = await axios.post(api.locationsPath(), param, {
        headers: {
          Authorization: `${token}`,
        },
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  },

  editLocation: async (
    id: string,
    param: Record<string, unknown>,
    token: string
  ) => {
    try {
      const data = await axios.put<Location, AxiosResponse<Location>>(
        api.locationsPath(id),
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
