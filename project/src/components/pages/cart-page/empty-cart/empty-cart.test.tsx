import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import EmptyCart from './empty-cart';

describe('EmptyCart component', () => {
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

  it('should EmptyCart render is success', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <EmptyCart/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(/Для того, чтобы сделать заказ, перейди на главную страницу./i)).toBeInTheDocument();
  });
});
