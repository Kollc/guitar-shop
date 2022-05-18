import { testComments } from './../../mock/mock';
import { reviewsDetailProcess, setReviews, resetErrorMessage, setErrorMessage } from './reviews-process';

describe('Reducer: reviews detail process', () => {
  it('without additional parameters should return initial state', () => {
    expect(reviewsDetailProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        reviews: [],
        isLoadedReviews: false,
        errorMessage: '',
      });
  });

  it('Add reviews work is success', () => {
    const state = {
      reviews: [],
      isLoadedReviews: false,
      errorMessage: '',
    };

    expect(reviewsDetailProcess.reducer(state, setReviews(testComments))).toEqual({
      reviews: testComments,
      isLoadedReviews: true,
      errorMessage: '',
    });
  });

  it('Add error message work is success', () => {
    const state = {
      reviews: [],
      isLoadedReviews: false,
      errorMessage: '',
    };

    expect(reviewsDetailProcess.reducer(state, setErrorMessage('some error'))).toEqual({
      reviews: [],
      isLoadedReviews: true,
      errorMessage: 'some error',
    });
  });

  it('Reset error message work is success', () => {
    const state = {
      reviews: [],
      isLoadedReviews: false,
      errorMessage: 'some error',
    };

    expect(reviewsDetailProcess.reducer(state, resetErrorMessage())).toEqual({
      reviews: [],
      isLoadedReviews: false,
      errorMessage: '',
    });
  });
});
