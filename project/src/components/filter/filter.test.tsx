import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Filter from './filter';

describe('Filter component', () => {
  it('should Filter render is success', async () => {
    render(
      <BrowserRouter>
        <Filter/>
      </BrowserRouter>);

    expect(screen.getByText(/Фильтр/i)).toBeInTheDocument();
  });
});
