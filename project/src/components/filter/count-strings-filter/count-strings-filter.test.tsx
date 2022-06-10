import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CountStringsFilter from './count-strings-filter';

describe('CountStringsFilter component', () => {
  it('should CountStringsFilter render is success', async () => {
    render(
      <BrowserRouter>
        <CountStringsFilter/>
      </BrowserRouter>);

    await waitFor(() => {
      expect(screen.getByText('Количество струн')).toBeInTheDocument();
    });
  });
});
