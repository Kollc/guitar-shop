import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { testComments, testGuitars } from '../../mock/mock';
import CardItem from './card-item';

describe('CardItem component', () => {
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
      isLoadedCart: false,
      errorMessage: '',
      discount: 0,
      coupon: '',
    },
  });

  it('should CardItem render is success', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <CardItem guitar={testGuitars[0]}/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getAllByText(/Честер Bass/i)[0]).toBeInTheDocument();
  });
});
