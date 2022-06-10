import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { GuitarsProcessType } from '../../types/types';

const initialState: GuitarsProcessType = {
  originalGuitars: [],
  guitars: [],
  isLoadedGuitars: false,
  countGuitars: 0,
  errorMessage: '',
  maxPriceGuitar: 0,
  minPriceGuitar: 0,
};

export const guitarsProcess = createSlice({
  initialState,
  name: NameSpace.Guitars,
  reducers: {
    setOriginalGuitars: (state, action) => {
      state.originalGuitars = action.payload;
    },
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
    setMaxPriceGuitar: (state, action) => {
      state.maxPriceGuitar = action.payload;
    },
    setMinPriceGuitar: (state, action) => {
      state.minPriceGuitar = action.payload;
    },
  },
});

export const {setGuitars, setCountGuitars, setErrorMessage, resetErrorMessage, setMinPriceGuitar, setMaxPriceGuitar, setOriginalGuitars} = guitarsProcess.actions;
