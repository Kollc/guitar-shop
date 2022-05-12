import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { testGuitars } from '../../mock/mock';
import GuitarTabs from './guitar-tabs';

describe('GuitarTabs component', () => {
  it('should GuitarTabs render is success', async () => {
    render(
      <BrowserRouter>
        <GuitarTabs guitar={testGuitars[0]}/>
      </BrowserRouter>);

    expect(screen.getByText(/Характеристики/i)).toBeInTheDocument();
    expect(screen.getByText(/Описание/i)).toBeInTheDocument();
  });

  it('GuitarTabs tabs work is correct', () => {
    render(
      <BrowserRouter>
        <GuitarTabs guitar={testGuitars[0]}/>
      </BrowserRouter>);

    fireEvent.click(screen.getByTestId('description-button'));
    expect(screen.getByTestId('characteristics')).toHaveClass('hidden');
    expect(screen.getByTestId('description')).not.toHaveClass('hidden');
  });
});
