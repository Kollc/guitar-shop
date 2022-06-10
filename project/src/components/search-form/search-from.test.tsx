import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { testComments, testGuitars } from '../../mock/mock';
import SearchForm from './search-from';

describe('SearchForm component', () => {
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

  it('should MainLayout render is succes', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <SearchForm/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByTestId('form-search')).toBeInTheDocument();
  });
});
