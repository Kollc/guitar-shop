import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { testGuitars } from '../../../mock/mock';
import GuitarRatingCard from './guitar-rating-card';

describe('GuitarRating component', () => {
  it('should GuitarRating render is success', async () => {
    render(
      <BrowserRouter>
        <GuitarRatingCard guitar={testGuitars[0]}/>
      </BrowserRouter>);

    await waitFor(() => {
      expect(screen.getByText(/Рейтинг/i)).toBeInTheDocument();
    });
  });
});
