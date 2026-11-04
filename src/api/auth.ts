import client from './client';

const BASE_URL="/auth"
export const login = (email: string, password: string) =>
  client.post(BASE_URL+'/login', { email, password });

export const signup = (data: any) => client.post(BASE_URL+'/signup', data);


export const sendActivationCode = () =>
  client.post('/activation');

export const verifyActivationCode = (pin: string) =>
  client.put('/activation', { pin });

export const logout = () => client.post(BASE_URL+'/logout');