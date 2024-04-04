// queries
import type { AxiosError, AxiosResponse } from "axios";
import type { QueryListResponse } from "../../types/axios/Response";
import type { Layout } from "../../types/entities/Layout";
import axios from "axios";
import qs from "qs";
import api from "@/constants/api";

export const layoutService = {
  // queries
  getAllLayouts: async (param: Record<string, unknown>) => {
    try {
      const query = qs.stringify(param, { encodeValuesOnly: true });

      const { data } = (await axios.get(
        api.layoutsPath("", query)
      )) as AxiosResponse<QueryListResponse<Layout>, {}>;

      return data;
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  },
};
