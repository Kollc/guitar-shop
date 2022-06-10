import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TypeFilterCheckbox from './type-filter-checkbox';

describe('TypeFilterCheckbox component', () => {
  it('should TypeFilterCheckbox render is success', async () => {
    render(
      <BrowserRouter>
        <TypeFilterCheckbox title='1' id='1'/>
      </BrowserRouter>);

    await waitFor(() => {
      expect(screen.getByTestId('checkbox-type-item')).toBeInTheDocument();
    });
  });
});
