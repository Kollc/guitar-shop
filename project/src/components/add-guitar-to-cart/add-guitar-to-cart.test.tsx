import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { testGuitars } from '../../mock/mock';
import AddGuitarToCart from './add-guitar-to-cart';

describe('AddGuitarToCart component', () => {
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

  it('should CardItem render is success', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <AddGuitarToCart guitar={testGuitars[0]} onCloseClick={jest.fn()} open={false} onSuccessAddedToCart={jest.fn()}/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(/Добавить товар в корзину/i)).toBeInTheDocument();
  });
});
