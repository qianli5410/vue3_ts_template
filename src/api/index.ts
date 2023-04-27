import axios from 'axios'

const baseURL = `http://jsonplaceholder.typicode.com`;
const timeout = 10000
const headers = { 'X-Custom-Header': 'foobar' }

export const instance = axios.create({ baseURL, timeout, headers });

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  return config;
});

// 添加响应拦截器
instance.interceptors.response.use((response) => {
  return response.data;
});