import { User } from '../types/user';
import client from './client';
const BASE_URL = '/users';
export const getUser = () =>
  client.get(BASE_URL);

export const updateUser = (form:User) =>
  client.put(BASE_URL,form);

export const updatePassword = (data: any) => client.put(BASE_URL+'/update-password', data);


