import client from './client';
interface GetDoctorsParams {
  page: number;
  size: number;
  specialty?: string;
}

export const getDoctors = (params:GetDoctorsParams) =>
  client.get('/doctors', { params });