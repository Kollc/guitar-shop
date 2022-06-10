import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CountStringsFilterCheckbox from './count-strings-filter-checkbox';

describe('CountStringsFilterCheckbox component', () => {
  it('should CountStringsFilterCheckbox render is success', async () => {
    render(
      <BrowserRouter>
        <CountStringsFilterCheckbox title='1' id='1'/>
      </BrowserRouter>);

    await waitFor(() => {
      expect(screen.getByTestId('strings-coutn-filter-item')).toBeInTheDocument();
    });
  });
});
