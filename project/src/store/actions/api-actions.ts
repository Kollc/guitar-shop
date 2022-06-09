import { ReviewType, SortParams } from './../../types/types';
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { APIRoutes, TIMEOUT_RESET_ERROR } from '../../consts';
import { GuitarType } from '../../types/types';
import * as guitarProcess from '../guitars-process/guitars-process';
import { errorHandler } from '../../services/error-handler';
import * as guitarDetailProcess from '../guitar-detail-process/guitar-detail-process';
import * as reviewsProcess from '../reviews-process/reviews-process';


export const fetchGuitarsWithParamsAction = createAsyncThunk<void, SortParams, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'dataGuitars/fetchGuitarsWithParamsAction',
  async ({sort, order, priceStart, priceEnd, type, count}, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<GuitarType[]>(APIRoutes.Guitars,
        {
          params: {
            _sort: sort,
            _order: order,
            'price_gte': priceStart,
            'price_lte': priceEnd,
            type,
            count,
          }});
      dispatch(guitarProcess.setCountGuitars(data.length));
      dispatch(guitarProcess.setGuitars(data));
    } catch (error) {
      dispatch(guitarProcess.setErrorMessage(errorHandler(error)));
      setTimeout(() => {
        dispatch(guitarProcess.resetErrorMessage());
      }, TIMEOUT_RESET_ERROR);
    }
  },
);

export const fetchGuitarByIdAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'dataGuitarDetail/fetchGuitarById',
  async (id: number, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get(`${APIRoutes.Guitars}/${id}`);
      dispatch(guitarDetailProcess.setGuitarDetail(data));
    } catch (error) {
      dispatch(guitarDetailProcess.setErrorMessage(errorHandler(error)));
      setTimeout(() => {
        dispatch(guitarDetailProcess.resetErrorMessage());
      }, TIMEOUT_RESET_ERROR);
    }
  },
);

export const fetchReviewsGuitarByIdAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'dataGuitarDetailReviews/fetchReviewsGuitarById',
  async (id: number, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<ReviewType[]>(`${APIRoutes.Guitars}/${id}${APIRoutes.Comments}`);
      dispatch(reviewsProcess.setReviews(data));
    } catch (error) {
      dispatch(reviewsProcess.setErrorMessage(errorHandler(error)));
      setTimeout(() => {
        dispatch(reviewsProcess.resetErrorMessage());
      }, TIMEOUT_RESET_ERROR);
    }
  },
);
