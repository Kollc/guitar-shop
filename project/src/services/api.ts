import { TIMEOUT_SERVER, BASE_URL, APIRoutes } from './../consts';
import axios, { AxiosInstance } from 'axios';
import { addReviewType } from '../types/types';

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

export const getGuitarCommentsById = async (id: number) => {
  const api = createAPI();

  try {
    const { data } = await api.get(`${APIRoutes.Guitars}/${id}${APIRoutes.Comments}`);
    return data;
  } catch (error) {
    // console.log(error);
  }
};


export const addNewReview = async (review: addReviewType) => {
  const api = createAPI();

  try {
    const {data} = await api.post(APIRoutes.Comments, review);
    return data;
  } catch (error) {
    // errorHandle(error, dispatch);
  }
};
