import axios from 'axios';
export const controller = new AbortController();
const instance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 30000,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
