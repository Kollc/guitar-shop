import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { testGuitars } from '../../mock/mock';
import GuitarRating from './guitar-rating';

describe('GuitarRating component', () => {
  it('should GuitarRating render is success', async () => {
    render(
      <BrowserRouter>
        <GuitarRating guitar={testGuitars[0]}/>
      </BrowserRouter>);

    await waitFor(() => {
      expect(screen.getByText(/Рейтинг/i)).toBeInTheDocument();
    });
  });
});
