import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mockGuitarsInCartData } from '../../mock/mock';
import Cart from './cart';

describe('Cart component', () => {
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

  it('should Cart render is success', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Cart guitarsInCart={mockGuitarsInCartData}/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByTestId('cart')).toBeInTheDocument();
  });
});
