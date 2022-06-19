import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_ADD_COUNT_GUITAR_TO_CART, NameSpace } from '../../consts';
import { CartProcessType } from '../../types/types';

const initialState: CartProcessType = {
  guitarsInCart: {},
};

export const CartProcess = createSlice({
  initialState,
  name: NameSpace.Cart,
  reducers: {
    setGuitarInCart: (state, action) => {
      if(state.guitarsInCart[action.payload.id]) {
        state.guitarsInCart[action.payload.id].count += 1;
      } else {
        state.guitarsInCart[action.payload.id] = {guitar: action.payload, count: DEFAULT_ADD_COUNT_GUITAR_TO_CART};
      }

      localStorage.setItem('guitarsInCart', JSON.stringify(state.guitarsInCart));
    },
    checkSaveCart: (state) => {
      if(localStorage.getItem('guitarsInCart')) {
        state.guitarsInCart = JSON.parse(localStorage.getItem('guitarsInCart') || '');
      }
    },
  },
});

export const { setGuitarInCart, checkSaveCart } = CartProcess.actions;
