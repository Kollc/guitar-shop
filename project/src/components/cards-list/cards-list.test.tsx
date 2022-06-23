import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { testComments, testGuitars } from '../../mock/mock';
import CardList from './cards-list';

describe('CardList component', () => {
  const mockStore = configureMockStore();

  const fakeStore = mockStore({
    GUITARS: {
      originalGuitars: testGuitars,
      guitars: testGuitars,
      isLoadedGuitars: true,
      countGuitars: 18,
      errorMessage: '',
    },
    GUITAR_DETAIL: {
      errorMessage: '',
      isLoadedGuitarDetail: true,
      guitarDetail: testGuitars[0],
    },
    REVIEWS: {
      reviews: testComments,
      isLoadedReviews: true,
      errorMessage: '',
    },
    CART: {
      guitarsInCart: {},
      isLoadedCartCoupon: false,
      errorMessage: '',
      discount: 0,
      coupon: '',
    },
  });

  it('should CardList render is success', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <CardList guitars={testGuitars}/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByTestId('guitars-list')).toBeInTheDocument();
  });
});
