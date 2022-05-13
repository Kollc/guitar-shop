import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../../store/store';
import CatalogPage from './catalog-page';

describe('CatalogPage component', () => {
  it('should CatalogPage render is succes', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CatalogPage/>
        </BrowserRouter>
      </Provider>);

    await waitFor(() => {
      expect(screen.getByText(/каталог гитар/i)).toBeInTheDocument();
    }, {timeout: 3000});
  }, 5000);
});
