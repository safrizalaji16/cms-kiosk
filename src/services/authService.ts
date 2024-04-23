// queries
import type { AxiosError, AxiosResponse } from "axios";
import type { QueryListResponse } from "../../types/axios/Response";
import axios from "axios";
import qs from "qs";
import api from "@/constants/api";
import { User } from "../../types/entities/user";

export const authService = {
  // queries
  login: async (param: Record<string, unknown>) => {
    try {
    
      const { data } = (await axios.post(
        api.userPath(),{
          ...param
        }
      )) as AxiosResponse<QueryListResponse<User>, {}>;
      return data;
    } catch (e) {
      console.log((e as AxiosError).request);
      throw null;
    }
  },
};
