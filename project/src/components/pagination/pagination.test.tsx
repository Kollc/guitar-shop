import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Pagination from './pagination';
import {store} from './../../store/store';

describe('Pagination component', () => {
  it('should Pagination render is succes', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Pagination currentPage={1}/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });
});
