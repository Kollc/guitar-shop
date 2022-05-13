import { GuitarDetailProcessType } from './../../types/types';
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';

const initialState: GuitarDetailProcessType = {
  errorMessage: '',
  isLoadedGuitarDetail: false,
  guitarDetail: null,
};

export const guitarsDetailProcess = createSlice({
  initialState,
  name: NameSpace.GuitarDetail,
  reducers: {
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
      state.isLoadedGuitarDetail = true;
    },
    resetErrorMessage: (state) => {
      state.errorMessage ='';
    },
    setGuitarDetail: (state, action) => {
      state.guitarDetail = action.payload;
      state.isLoadedGuitarDetail = true;
    },
  },
});

export const {setErrorMessage, resetErrorMessage, setGuitarDetail} = guitarsDetailProcess.actions;
