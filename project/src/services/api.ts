import { TIMEOUT_SERVER, BASE_URL, APIRoutes, FETCH_GUITARS_LIMIT } from './../consts';
import axios, { AxiosInstance } from 'axios';
import { AddReviewType, GuitarType } from '../types/types';
import { errorHandler } from './error-handler';

export const createAPI = (): AxiosInstance => {
  const api =  axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT_SERVER,
  });

  return api;
};

export const getAllGuitars = async (setError: (value: string | null) => void) => {
  const api = createAPI();

  try {
    const { data } = await api.get<GuitarType[]>(APIRoutes.Guitars, {params: {_limit: FETCH_GUITARS_LIMIT}});
    return data;
  } catch (error) {
    setError(errorHandler(error));
  }
};

export const getGuitarCommentsCountById = async (id: number, setError: (value: string | null) => void) => {
  const api = createAPI();

  try {
    const { data } = await api.get(`${APIRoutes.Guitars}/${id}${APIRoutes.Comments}`);
    return data.length;
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
