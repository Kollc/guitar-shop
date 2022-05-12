import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';

describe('Header component', () => {
  it('should Header render is success', async () => {
    render(
      <BrowserRouter>
        <Header/>
      </BrowserRouter>);

    expect(screen.getByText(/Каталог/i)).toBeInTheDocument();
    expect(screen.getByText(/О компании/i)).toBeInTheDocument();
    expect(screen.getByText(/Где купить/i)).toBeInTheDocument();
  });
});
