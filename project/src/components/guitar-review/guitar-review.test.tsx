import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { testGuitars } from '../../mock/mock';
import GuitarReview from './guitar-review';

describe('GuitarReview component', () => {
  it('should GuitarReview render is success', async () => {
    render(
      <BrowserRouter>
        <GuitarReview guitar={testGuitars[0]}/>
      </BrowserRouter>);

    await waitFor(() => {
      expect(screen.getByText('Отзывы')).toBeInTheDocument();
    });
  });
});
