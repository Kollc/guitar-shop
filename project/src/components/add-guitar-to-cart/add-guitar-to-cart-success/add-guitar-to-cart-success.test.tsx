import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mockGuitarsInCart } from '../../../mock/mock';
import AddGuitarToCartSuccess from './add-guitar-to-cart-success';

describe('CartModalSuccess component', () => {
  const mockStore = configureMockStore();

  const fakeStore = mockStore({
    CART: {
      guitarsInCart: mockGuitarsInCart,
      isLoadedCartCoupon: false,
      errorMessage: '',
      discount: 0,
      coupon: '',
    },
  });

  it('should CardItem render is success', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <AddGuitarToCartSuccess open={false} onClose={jest.fn()} onContinueShoping={jest.fn()}/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(/Перейти в корзину/i)).toBeInTheDocument();
  });
});
