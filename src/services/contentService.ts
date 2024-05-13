// queries
import type { AxiosError, AxiosResponse } from "axios";
import type { QueryListResponse } from "../../types/axios/Response";
import type { Content, Contents } from "../../types/entities/Content";
import axios from "axios";
import api from "@/constants/api";

export const contentService = {
  // queries
  getAllContents: async (param: Record<string, unknown>, token: string) => {
    try {
      const { data } = (await axios.get(api.contentsPath(""), {
        headers: {
          Authorization: `${token}`,
        },
      })) as AxiosResponse<QueryListResponse<Contents>, {}>;

      return data;
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  },

  getContent: async (id: string, token: string) => {
    try {
      const { data } = (await axios.get(api.contentsPath(id), {
        headers: {
          Authorization: `${token}`,
        },
      })) as AxiosResponse<QueryListResponse<Content>, {}>;
      return data;
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  },
  createContent: async (param: Record<string, unknown>, token: string) => {
    try {
      const { data } = await axios.post(api.contentsPath(), param, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      return data;
    } catch (e) {
      console.log(e);
    }
  },
  editContent: async (
    id: string,
    param: Record<string, unknown>,
    token: string
  ) => {
    try {
      const data = await axios.put<Content, AxiosResponse<Content>>(
        api.contentsPath(id),
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
