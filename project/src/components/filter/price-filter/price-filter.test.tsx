import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { testComments, testGuitars } from '../../../mock/mock';
import PriceFilter from './price-filter';

describe('PriceFilter component', () => {
  const mockStore = configureMockStore();

  const fakeStore = mockStore({
    GUITARS: {
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
  });

  it('should PriceFilter render is success', async () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <PriceFilter/>
        </BrowserRouter>
      </Provider>);

    await waitFor(() => {
      expect(screen.getByTestId('price-filter')).toBeInTheDocument();
    });
  });
});
