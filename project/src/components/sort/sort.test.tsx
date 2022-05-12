import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {store} from './../../store/store';
import Sort from './sort';

describe('Sort component', () => {
  it('should Sort render is succes', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Sort/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(/сортировать/i)).toBeInTheDocument();
  });
});
