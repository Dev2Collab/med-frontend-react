import axios from 'axios';

export const BASE_URL = true?'http://3.236.166.9:8080/api': 'http://localhost:8080/api';

const client = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  timeout: 15000,
});

client.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    await new Promise((r) => setTimeout(r, 3000));
    
    return config;
  },
  (error) => Promise.reject(error)
);

client.interceptors.response.use(
  (res) => res.data, 
  async (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
    }
    return Promise.reject(error);
  }
);

export default client;