import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { testGuitars } from '../../mock/mock';
import CardItem from './card-item';

describe('CardItem component', () => {
  it('should CardItem render is success', () => {
    render(
      <BrowserRouter>
        <CardItem guitar={testGuitars[0]}/>
      </BrowserRouter>);

    expect(screen.getByText(/Честер Bass/i)).toBeInTheDocument();
  });
});
