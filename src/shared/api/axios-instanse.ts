import axios from 'axios';
export const controller = new AbortController();
const instance = axios.create({
  baseURL: 'http://pabp.gw.lab2.pepeshka.ru',
  timeout: 30000,
});

instance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('access_token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
