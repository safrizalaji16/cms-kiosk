// queries
import type { AxiosError, AxiosResponse } from "axios";
import type { QueryListResponse } from "../../types/axios/Response";
import type { Template, Templates } from "../../types/entities/Template";
import axios from "axios";
import api from "@/constants/api";

export const templateService = {
  // queries
  getAllTemplates: async (param: Record<string, unknown>, token?: string) => {
    try {
      const { data } = (await axios.get(api.templatesPath(), {
        headers: {
          Authorization: `${token}`,
        },
      })) as AxiosResponse<QueryListResponse<Templates>, {}>;

      return data;
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  },
  getTemplate: async (id: string, token: string) => {
    try {
      const { data } = (await axios.get(api.templatesPath(id), {
        headers: {
          Authorization: `${token}`,
        },
      })) as AxiosResponse<QueryListResponse<Template>, {}>;
      return data;
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  },
  createTemplate: async (param: Record<string, unknown>, token: string) => {
    try {
      const response = await axios.post(api.templatesPath(), param, {
        headers: {
          Authorization: `${token}`,
        },
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  },
  editTemplate: async (
    id: string,
    param: Record<string, unknown>,
    token: string
  ) => {
    try {
      const data = await axios.put<Template, AxiosResponse<Template>>(
        api.templatesPath(id),
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
