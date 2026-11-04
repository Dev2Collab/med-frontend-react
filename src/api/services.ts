import client from './client';
interface GetServicesParams {
  page: number;
  size: number;
  specialty?: string;
}

export const getServices = (params: GetServicesParams) =>
  client.get('/services', { params });
