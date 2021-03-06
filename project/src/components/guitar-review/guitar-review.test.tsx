import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { testComments, testGuitars } from '../../mock/mock';
import GuitarReview from './guitar-review';

describe('GuitarReview component', () => {
  const mockStore = configureMockStore();

  const fakeStore = mockStore({
    'REVIEWS': {
      reviews: [],
      isLoadedReviews: true,
      errorMessage: '',
    },
  });

  it('should GuitarReview render is success', async () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <GuitarReview reviews={testComments} guitar={testGuitars[0]}/>
        </BrowserRouter>
      </Provider>);

    await waitFor(() => {
      expect(screen.getByText('Отзывы')).toBeInTheDocument();
    });
  });
});
