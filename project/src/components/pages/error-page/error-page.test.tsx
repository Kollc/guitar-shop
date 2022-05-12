import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';

describe('ErrorPage component', () => {
  it('should ErrorPage render is succes', () => {
    render(
      <BrowserRouter>
        <ErrorPage/>
      </BrowserRouter>);

    expect(screen.getByText(/404 page not found/i)).toBeInTheDocument();
  });
});
