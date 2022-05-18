import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { ReviewsProcessType } from '../../types/types';

const initialState: ReviewsProcessType = {
  reviews: [],
  isLoadedReviews: false,
  errorMessage: '',
};

export const reviewsDetailProcess = createSlice({
  initialState,
  name: NameSpace.Reviews,
  reducers: {
    setReviews: (state, action) => {
      state.reviews = action.payload;
      state.isLoadedReviews = true;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
      state.isLoadedReviews = true;
    },
    resetErrorMessage: (state) => {
      state.errorMessage ='';
    },
  },
});

export const { setReviews, setErrorMessage, resetErrorMessage } = reviewsDetailProcess.actions;
