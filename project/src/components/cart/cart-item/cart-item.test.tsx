import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mockGuitarsInCartData } from '../../../mock/mock';
import CartItem from './cart-item';

describe('CartItem component', () => {
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

  it('should CartItem render is success', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <CartItem guitarData={mockGuitarsInCartData[1]}/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getAllByText(/Честер Bass/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/17 500/i)[0]).toBeInTheDocument();
  });
});
