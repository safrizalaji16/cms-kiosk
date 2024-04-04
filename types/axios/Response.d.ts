export type QueryListResponse<T> = {
  page: number;
  limit: number;
  count: number;
  data: T[];
};
