import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mockGuitarsInCartData } from '../../../mock/mock';
import CartList from './cart-list';

describe('CartList component', () => {
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

  it('should CartList render is success', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <CartList guitarsInCart={mockGuitarsInCartData}/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getAllByText(/Честер Bass/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/17 500/i)[0]).toBeInTheDocument();
  });
});
