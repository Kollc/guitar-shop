import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TypeFilter from './type-filter';

describe('TypeFilter component', () => {

  it('should TypeFilter render is success', async () => {
    render(
      <BrowserRouter>
        <TypeFilter/>
      </BrowserRouter>);

    await waitFor(() => {
      expect(screen.getByText(/Тип гитар/i)).toBeInTheDocument();
    });
  });
});
