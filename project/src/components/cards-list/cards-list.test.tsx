import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { testGuitars } from '../../mock/mock';
import CardsList from './cards-list';

describe('CardsList component', () => {
  it('should CardsList render is success', () => {
    render(
      <BrowserRouter>
        <CardsList guitars={testGuitars}/>
      </BrowserRouter>);

    expect(screen.getByTestId('guitars-list')).toBeInTheDocument();
  });
});
