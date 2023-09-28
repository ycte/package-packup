import { getToken } from "./token";
import { http } from "./http";

const Ahttp = http;
const token = getToken();
Ahttp.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
})

export {Ahttp}
