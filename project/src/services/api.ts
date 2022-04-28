import { TIMEOUT_SERVER, BASE_URL } from './../consts';
import axios, { AxiosInstance } from 'axios';

export const createAPI = (): AxiosInstance => {
  const api =  axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT_SERVER,
  });

  return api;
};
