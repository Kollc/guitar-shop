import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './main-layout';

describe('MainLayout component', () => {
  it('should MainLayout render is succes', () => {
    render(
      <BrowserRouter>
        <MainLayout>
          <div>Test</div>
        </MainLayout>
      </BrowserRouter>);

    expect(screen.getByText(/Test/i)).toBeInTheDocument();
  });
});
