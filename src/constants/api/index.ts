const baseAPI = process.env.baseUrlAPI;

const api = {
  userPath(endpoint?: string, param?: string) {
    return `${baseAPI}/users/login${
      endpoint && param
        ? `/${endpoint}?${param}`
        : endpoint
        ? `/${endpoint}`
        : param
        ? `?${param}`
        : ""
    }`;
  },
  devicesPath: (endpoint?: string, param?: string) =>
    `${baseAPI}/devices${
      endpoint && param
        ? `/${endpoint}?${param}`
        : endpoint
        ? `/${endpoint}`
        : param
        ? `?${param}`
        : ""
    }`,

  contentsPath: (endpoint?: string, param?: string) =>
    `${baseAPI}/contents${
      endpoint && param
        ? `/${endpoint}?${param}`
        : endpoint
        ? `/${endpoint}`
        : param
        ? `?${param}`
        : ""
    }`,

  layoutsPath: (endpoint?: string | number, param?: string) =>
    `${baseAPI}/layouts${
      endpoint && param
        ? `/${endpoint}?${param}`
        : endpoint
        ? `/${endpoint}`
        : param
        ? `?${param}`
        : ""
    }`,

  locationsPath: (endpoint?: string, param?: string) =>
    `${baseAPI}/locations${
      endpoint && param
        ? `/${endpoint}?${param}`
        : endpoint
        ? `/${endpoint}`
        : param
        ? `?${param}`
        : ""
    }`,

  templatesPath: (endpoint?: string, param?: string) =>
    `${baseAPI}/templates${
      endpoint && param
        ? `/${endpoint}?${param}`
        : endpoint
        ? `/${endpoint}`
        : param
        ? `?${param}`
        : ""
    }`,
};

export default api;
