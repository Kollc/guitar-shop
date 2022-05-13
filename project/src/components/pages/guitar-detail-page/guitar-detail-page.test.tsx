/* eslint-disable testing-library/no-unnecessary-act */
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { testGuitars } from '../../../mock/mock';
import { createAPI } from '../../../services/api';
import GuitarDetailPage from './guitar-detail-page';
import thunk from 'redux-thunk';
import { createMemoryHistory } from 'history';

describe('GuitarDetailPage component', () => {
  const api = createAPI();
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore(middlewares);

  const fakeStore = mockStore({
    GUITAR_DETAIL: {
      errorMessage: '',
      isLoadedGuitarDetail: true,
      guitarDetail: testGuitars[0],
    },
  });

  const history = createMemoryHistory();

  it('should render GuitarDetailPage when user navigate to "/guitar/:id"', () => {
    history.push('/guitar/1');
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <GuitarDetailPage/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByTestId('guitar-title-detail')).toBeInTheDocument();
  });
});
