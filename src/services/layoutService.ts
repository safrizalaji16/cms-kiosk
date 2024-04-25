// queries
import type { AxiosError, AxiosResponse } from "axios";
import type { QueryListResponse } from "../../types/axios/Response";
import type { Layout } from "../../types/entities/Layout";
import axios from "axios";
import qs from "qs";
import api from "@/constants/api";

export const layoutService = {
  // queries
  getAllLayouts: async (param: Record<string, unknown>, token?: string) => {
    try {
      const { data } = (await axios.get(api.layoutsPath(), {
        headers: {
          Authorization: `${token}`,
        },
      })) as AxiosResponse<QueryListResponse<Layout[]>, {}>;

      return data;
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  },
  getLayout: async (id: string, token: string) => {
    try {
      const { data } = (await axios.get(api.layoutsPath(id), {
        headers: {
          Authorization: `${token}`,
        },
      })) as AxiosResponse<QueryListResponse<Layout>, {}>;
      return data;
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  },
  createLayout: async (param: Record<string, unknown>, token: string) => {
    try {
      const response = await axios.post(api.layoutsPath(), param, {
        headers: {
          Authorization: `${token}`,
        },
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  },
  editLayout: async (
    id: string,
    param: Record<string, unknown>,
    token: string
  ) => {
    try {
      const data = await axios.put<Layout, AxiosResponse<Layout>>(
        api.layoutsPath(id),
        param,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      console.log(data, "asfasf");

      return data;
    } catch (e) {
      console.error((e as AxiosError).request);
      throw e;
    }
  },
};
