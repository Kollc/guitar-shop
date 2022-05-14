import { TIMEOUT_SERVER, BASE_URL, APIRoutes } from './../consts';
import axios, { AxiosInstance } from 'axios';
import { AddReviewType } from '../types/types';
import { errorHandler } from './error-handler';

export const createAPI = (): AxiosInstance => {
  const api =  axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT_SERVER,
  });

  return api;
};

export const getGuitarCommentsById = async (id: number, setError: (value: string | null) => void) => {
  const api = createAPI();

  try {
    const { data } = await api.get(`${APIRoutes.Guitars}/${id}${APIRoutes.Comments}`);
    return data;
  } catch (error) {
    setError(errorHandler(error));
  }
};


export const addNewReview = async (review: AddReviewType, setError: (value: string | null) => void) => {
  const api = createAPI();

  try {
    const {data} = await api.post(APIRoutes.Comments, review);
    return data;
  } catch (error) {
    setError(errorHandler(error));
  }
};
