const baseAPI = process.env.baseUrlAPI;

const api = {
  devicesPath: (endpoint?: string, param?: string) =>
    `${baseAPI}/devices${endpoint ? `/${endpoint}` : param ? `?${param}` : ""}`,

  contentsPath: (endpoint?: string, param?: string) =>
    `${baseAPI}/contents${
      endpoint ? `/${endpoint}` : param ? `?${param}` : ""
    }`,

  layoutsPath: (endpoint?: string, param?: string) =>
    `${baseAPI}/layouts${endpoint ? `/${endpoint}` : param ? `?${param}` : ""}`,

  ownersPath: (endpoint?: string, param?: string) =>
    `${baseAPI}/owners${endpoint ? `/${endpoint}` : param ? `?${param}` : ""}`,

  templatesPath: (endpoint?: string, param?: string) =>
    `${baseAPI}/templates${
      endpoint ? `/${endpoint}` : param ? `?${param}` : ""
    }`,

  typesPath: (endpoint?: string, param?: string) =>
    `${baseAPI}/types${endpoint ? `/${endpoint}` : param ? `?${param}` : ""}`,

  usersPath: (endpoint?: string, param?: string) =>
    `${baseAPI}/users${endpoint ? `/${endpoint}` : param ? `?${param}` : ""}`,
};

export default api;
