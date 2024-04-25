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

    console.log(param, token, "response here");
    try {
      const response = await axios.post(api.layoutsPath(), param, {
        headers: {
          Authorization: `${token}`,
        },
      });
      return response;
    } catch (e) {
      console.log(e);
      // console.log((e as AxiosError).request);
      // throw null;
    }
  },
  editLayout: async (param: Record<string, unknown>, token: string) => {
    try {
      const response = await axios.put(
        api.layoutsPath(param.id.toString()),
        param, {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      return response;
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  },
};
