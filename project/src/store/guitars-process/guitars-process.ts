import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { GuitarsProcessType } from '../../types/types';

const initialState: GuitarsProcessType = {
  guitars: [],
  isLoadedGuitars: false,
  countGuitars: 0,
  errorMessage: '',
};

export const guitarsProcess = createSlice({
  initialState,
  name: NameSpace.Guitars,
  reducers: {
    setGuitars: (state, action) => {
      state.guitars = action.payload;
      state.isLoadedGuitars = true;
    },
    setCountGuitars: (state, action) => {
      state.countGuitars = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
      state.isLoadedGuitars = true;
    },
    resetErrorMessage: (state) => {
      state.errorMessage ='';
    },
  },
});

export const {setGuitars, setCountGuitars, setErrorMessage, resetErrorMessage} = guitarsProcess.actions;
