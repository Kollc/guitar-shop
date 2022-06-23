import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_ADD_COUNT_GUITAR_TO_CART, NameSpace } from '../../consts';
import { CartProcessType } from '../../types/types';

const initialState: CartProcessType = {
  guitarsInCart: {},
  isLoadedCartCoupon: false,
  errorMessage: '',
  discount: 0,
  coupon: '',
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
    increaseProductCount: (state, action) => {
      state.guitarsInCart[action.payload.id].count += 1;
      localStorage.setItem('guitarsInCart', JSON.stringify(state.guitarsInCart));
    },
    decreaseProductCount: (state, action) => {
      state.guitarsInCart[action.payload.id].count -= 1;
      localStorage.setItem('guitarsInCart', JSON.stringify(state.guitarsInCart));
    },
    setCountGuitarInCart: (state, action) => {
      state.guitarsInCart[action.payload.guitar.id].count = action.payload.count;
      localStorage.setItem('guitarsInCart', JSON.stringify(state.guitarsInCart));
    },
    deleteGuitarInCart: (state, action) => {
      delete state.guitarsInCart[action.payload.id];
      localStorage.setItem('guitarsInCart', JSON.stringify(state.guitarsInCart));
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
      state.isLoadedCartCoupon = true;
    },
    resetErrorMessage: (state) => {
      state.errorMessage ='';
    },
    setDiscount: (state, action) => {
      state.discount = action.payload;
      state.isLoadedCartCoupon = true;
    },
    setCoupon: (state, action) => {
      state.coupon = action.payload;
    },
    clearCart: (state) => {
      Object.assign(state, initialState);
      localStorage.removeItem('guitarsInCart');
    },
  },
});

export const { clearCart, setCoupon, setDiscount, setGuitarInCart, checkSaveCart, decreaseProductCount, increaseProductCount, setCountGuitarInCart, deleteGuitarInCart, setErrorMessage, resetErrorMessage } = CartProcess.actions;
