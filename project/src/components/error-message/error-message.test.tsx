import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { TypeRequests } from '../../consts';
import ErrorMessage from './error-message';

describe('ErrorMessage component', () => {
  it('should ErrorMessage render is success', async () => {
    render(
      <BrowserRouter>
        <ErrorMessage error={'404 not found'} type={TypeRequests.Guitars}/>
      </BrowserRouter>);

    expect(screen.getByText(/guitars request/i)).toBeInTheDocument();
    expect(screen.getByText(/404 not found/i)).toBeInTheDocument();
  });
});
