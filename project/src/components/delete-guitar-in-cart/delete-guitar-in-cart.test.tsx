import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { testGuitars } from '../../mock/mock';
import DeleteGuitarInCartModal from './delete-guitar-in-cart';

describe('DeleteGuitarInCartModal component', () => {
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

  it('should DeleteGuitarInCartModal render is success', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <DeleteGuitarInCartModal  guitar={testGuitars[1]} open={false} onClose={jest.fn()}/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText('Удалить этот товар?')).toBeInTheDocument();
  });
});
