import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CouponForm from './coupon-form';

describe('CouponForm component', () => {
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

  it('should CouponForm render is success', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <CouponForm/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(/Промокод на скидку/i)).toBeInTheDocument();
    expect(screen.getByText(/Введите свой промокод, если он у вас есть./i)).toBeInTheDocument();
    expect(screen.getByText(/Применить/i)).toBeInTheDocument();
  });
});
