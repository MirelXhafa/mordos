import axios, { AxiosRequestConfig } from "axios";

type TAxiosRequestConfig = AxiosRequestConfig<any> | undefined;

class BaseApi {
  get(url: string, config?: TAxiosRequestConfig) {
    return axios.get(url, config);
  }

  post(url: string, data: any, config?: TAxiosRequestConfig) {
    return axios.post(url, data, config);
  }

  put(url: string, data: any, config?: TAxiosRequestConfig) {
    return axios.put(url, data, config);
  }

  delete(url: string, config?: TAxiosRequestConfig) {
    return axios.delete(url, config);
  }
}

export default BaseApi;
