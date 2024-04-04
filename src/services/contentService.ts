// queries
import type { AxiosError, AxiosResponse } from "axios";
import type { QueryListResponse } from "../../types/axios/Response";
import type { Content } from "../../types/entities/Content";
import axios from "axios";
import qs from "qs";
import api from "@/constants/api";

export const contentService = {
  // queries
  getAllContents: async (param: Record<string, unknown>) => {
    try {
      const query = qs.stringify(param, { encodeValuesOnly: true });

      const { data } = (await axios.get(
        api.contentsPath("", query)
      )) as AxiosResponse<QueryListResponse<Content>, {}>;

      return data;
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  },
};
