import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';

describe('Header component', () => {
  it('should Header render is success', async () => {
    render(
      <BrowserRouter>
        <Header/>
      </BrowserRouter>);

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
