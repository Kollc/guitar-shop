import { ParamsType } from './../../types/types';
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { APIRoutes, COUNT_SHOW_GUITARS_IN_PAGE, TOTAL_COUNT_GUITARS_HEADERS } from '../../consts';
import { GuitarType } from '../../types/types';
import { setCountGuitars, setGuitars } from '../guitars-process/guitars-process';


export const fetchGuitarsWithParamsAction = createAsyncThunk<void, ParamsType, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchGuitarsWithParams',
  async ({start = 0}: ParamsType, {dispatch, extra: api}) => {
    try {
      const { data, headers } = await api.get<GuitarType[]>(APIRoutes.Guitars, {params: {_start: start, _limit: COUNT_SHOW_GUITARS_IN_PAGE}});
      dispatch(setCountGuitars(Number(headers[TOTAL_COUNT_GUITARS_HEADERS])));
      dispatch(setGuitars(data));
    } catch (error) {
      // errorHandle(error, dispatch);
    }
  },
);

