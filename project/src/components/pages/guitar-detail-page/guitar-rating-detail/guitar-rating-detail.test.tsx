import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { testGuitars } from '../../../../mock/mock';
import GuitarRatingDetail from './guitar-rating-detail';

describe('GuitarRating component', () => {
  const mockStore = configureMockStore();

  const fakeStore = mockStore({
    'REVIEWS': {
      reviews: [],
      isLoadedReviews: true,
      errorMessage: '',
    },
  });

  it('should GuitarRating render is success', async () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <GuitarRatingDetail reviewsCount={10} guitar={testGuitars[0]}/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(/Рейтинг/i)).toBeInTheDocument();
  });
});
