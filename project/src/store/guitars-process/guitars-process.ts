import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { GuitarsProcessType } from '../../types/types';

const initialState: GuitarsProcessType = {
  guitars: [],
  isLoadedGuitars: false,
};

export const guitarsProcess = createSlice({
  initialState,
  name: NameSpace.Guitars,
  reducers: {
    setGuitars: (state, action) => {
      state.guitars = action.payload;
      state.isLoadedGuitars = true;
    },
  },
});

export const {setGuitars} = guitarsProcess.actions;
