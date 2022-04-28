import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { APIRoutes } from '../../consts';
import { GuitarType } from '../../types/types';
import { setGuitars } from '../guitars-process/guitars-process';


export const fetchGuitarsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchGuitars',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<GuitarType[]>(APIRoutes.Guitars);
      dispatch(setGuitars(data));
    } catch (error) {
      // errorHandle(error, dispatch);
    }
  },
);
