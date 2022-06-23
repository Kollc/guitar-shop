import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CartFooter from './cart-footer';

describe('CartFooter component', () => {
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

  it('should CartFooter render is success', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <CartFooter/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByTestId(/cart-footer/i)).toBeInTheDocument();
  });
});
