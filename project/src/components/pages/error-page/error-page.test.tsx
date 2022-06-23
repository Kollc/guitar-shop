import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { testComments, testGuitars } from '../../../mock/mock';
import ErrorPage from './error-page';

describe('ErrorPage component', () => {
  const mockStore = configureMockStore();

  const fakeStore = mockStore({
    GUITARS: {
      originalGuitars: testGuitars,
      guitars: testGuitars,
      isLoadedGuitars: true,
      countGuitars: 18,
      errorMessage: '',
    },
    GUITAR_DETAIL: {
      errorMessage: '',
      isLoadedGuitarDetail: true,
      guitarDetail: testGuitars[0],
    },
    REVIEWS: {
      reviews: testComments,
      isLoadedReviews: true,
      errorMessage: '',
    },
    CART: {
      guitarsInCart: {},
      isLoadedCart: false,
      errorMessage: '',
      discount: 0,
      coupon: '',
    },
  });

  it('should ErrorPage render is succes', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <ErrorPage/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(/404 page not found/i)).toBeInTheDocument();
  });
});
