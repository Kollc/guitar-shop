import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { testComments, testGuitars } from '../../mock/mock';
import Header from './header';

describe('Header component', () => {
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
  });

  it('should Header render is success', async () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Header/>
        </BrowserRouter>
      </Provider>);

    await waitFor(() => {
      expect(screen.getByText(/Каталог/i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/О компании/i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/Где купить/i)).toBeInTheDocument();
    });
  });
});
