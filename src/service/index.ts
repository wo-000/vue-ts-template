import axios from "axios";
// 环境获取
import { isDevelopment, isFat, isProduction, baseUrl } from "@/untils/getSDE";
console.log(isDevelopment, isFat, isProduction, baseUrl);
axios.defaults.withCredentials = true; // 请求跨域是否需要凭证

const baseURL = baseUrl;
const service = axios.create({
  baseURL,
  timeout: 10000,
});

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    // 统一添加token
    const token = "myToken";
    config.headers = {
      Authorzation: token,
      myToken: token,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      return res;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
