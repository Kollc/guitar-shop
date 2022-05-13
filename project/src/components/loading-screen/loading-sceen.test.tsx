import { render, screen } from '@testing-library/react';
import LoadingScreen from './loading-sceen';

describe('LoadingScreen component', () => {
  it('should LoadingScreen render is succes', () => {
    render(<LoadingScreen/>);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
