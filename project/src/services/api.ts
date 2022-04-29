import { TIMEOUT_SERVER, BASE_URL, APIRoutes } from './../consts';
import axios, { AxiosInstance } from 'axios';

export const createAPI = (): AxiosInstance => {
  const api =  axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT_SERVER,
  });

  return api;
};

export const getGuitarById = async (id: number) => {
  const api = createAPI();

  try {
    const { data } = await api.get(`${APIRoutes.Guitars}/${id}`);
    return data;
  } catch (error) {
    // console.log(error);
  }
};
