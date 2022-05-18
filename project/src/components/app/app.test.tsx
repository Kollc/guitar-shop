import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { testComments, testGuitars } from '../../mock/mock';
import { createAPI } from '../../services/api';
import App from './app';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';

describe('App compoennt', () => {
  const api = createAPI();
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore(middlewares);

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

  const history = createMemoryHistory();

  const fakeApp = (
    <Provider store={fakeStore}>
      <Router history={history}>
        <App/>
      </Router>
    </Provider>
  );

  beforeEach(() => {
    history.push('/');
  });

  it('should render "Catalog" when user navigate to "/"', () => {
    history.push('/');
    render(fakeApp);

    expect(screen.getByText(/Каталог гитар/i)).toBeInTheDocument();
  });

  it('should render "Catalog with page" when user navigate to "/catalog/page/:page"', async () => {
    history.push('/catalog/page/2');
    render(fakeApp);

    await waitFor(() => {
      expect(screen.getByText(/CURT T300 SecondPage/i)).toBeInTheDocument();
    });
  });

  it('should render GuitarDetailPage when user navigate to "/guitar/:id"', async () => {
    history.push('/guitar/1');
    render(fakeApp);

    expect(screen.getByTestId('guitar-title-detail')).toBeInTheDocument();
  });
});
