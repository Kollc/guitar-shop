import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './footer';

describe('Footer component', () => {
  it('should Footer render is success', async () => {
    render(
      <BrowserRouter>
        <Footer/>
      </BrowserRouter>);

    expect(screen.getByText(/Магазин гитар, музыкальных инструментов и гитарная мастерская/i)).toBeInTheDocument();
  });
});
