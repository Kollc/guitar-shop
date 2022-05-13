import { ParamsType } from './../../types/types';
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { APIRoutes, COUNT_SHOW_GUITARS_IN_PAGE, TIMEOUT_RESET_ERROR, TOTAL_COUNT_GUITARS_HEADERS } from '../../consts';
import { GuitarType } from '../../types/types';
import * as guitarProcess from '../guitars-process/guitars-process';
import { errorHandle } from '../../services/error-handler';
import * as guitarDetailProcess from '../guitar-detail-process/guitar-detail-process';


export const fetchGuitarsWithParamsAction = createAsyncThunk<void, ParamsType, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'dataGuitars/fetchGuitarsWithParams',
  async ({start = 0}: ParamsType, {dispatch, extra: api}) => {
    try {
      const { data, headers } = await api.get<GuitarType[]>(APIRoutes.Guitars, {params: {_start: start, _limit: COUNT_SHOW_GUITARS_IN_PAGE}});
      dispatch(guitarProcess.setCountGuitars(Number(headers[TOTAL_COUNT_GUITARS_HEADERS])));
      dispatch(guitarProcess.setGuitars(data));
    } catch (error) {
      dispatch(guitarProcess.setErrorMessage(errorHandle(error)));
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
      dispatch(guitarDetailProcess.setErrorMessage(errorHandle(error)));
      setTimeout(() => {
        dispatch(guitarDetailProcess.resetErrorMessage());
      }, TIMEOUT_RESET_ERROR);
    }
  },
);
