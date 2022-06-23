import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CouponMessage from './coupon-message';

describe('CouponMessage component', () => {
  const mockStore = configureMockStore();

  const fakeStore = mockStore({
    CART: {
      guitarsInCart: {},
      isLoadedCartCoupon: false,
      errorMessage: '',
      discount: 0,
      coupon: '',
    },
  });

  it('should CouponMessage render is success without error', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <CouponMessage isLoaded error={''}/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(/Промокод принят/i)).toBeInTheDocument();
  });

  it('should CouponMessage render is success with error', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <CouponMessage isLoaded error={'error'}/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(/Неверный промокод/i)).toBeInTheDocument();
  });
});
