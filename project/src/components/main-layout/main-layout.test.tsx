import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { testComments, testGuitars } from '../../mock/mock';
import MainLayout from './main-layout';

describe('MainLayout component', () => {
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
      isLoadedCartCoupon: false,
      errorMessage: '',
      discount: 0,
      coupon: '',
    },
  });

  it('should MainLayout render is succes', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <MainLayout>
            <div>Test</div>
          </MainLayout>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(/Test/i)).toBeInTheDocument();
  });
});
