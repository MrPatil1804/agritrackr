import axios from 'axios';

const BASE = import.meta.env.VITE_API_URL || '';
console.log('API URL:', BASE);

const API = axios.create({
  baseURL: BASE,
  withCredentials: true,
});

export default API;
