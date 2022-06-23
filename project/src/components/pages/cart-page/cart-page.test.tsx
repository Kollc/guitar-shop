import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mockGuitarsInCartData, testGuitars } from '../../../mock/mock';
import CartPage from './cart-page';

describe('CartPage component', () => {
  const mockStore = configureMockStore();

  const fakeStore = mockStore({
    GUITARS: {
      originalGuitars: testGuitars,
      guitars: testGuitars,
      isLoadedGuitars: true,
      countGuitars: 18,
      errorMessage: '',
    },
    CART: {
      guitarsInCart: mockGuitarsInCartData,
      isLoadedCartCoupon: false,
      errorMessage: '',
      discount: 0,
      coupon: '',
    },
  });

  it('should CartPage render is success', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <CartPage/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByTestId(/cart-title/i)).toBeInTheDocument();
    expect(screen.getAllByAltText(/Честер Bass/i)[0]).toBeInTheDocument();
  });
});
