/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import GuitarDetailPage from './guitar-detail-page';

describe('GuitarDetailPage component', () => {

  const fakeApp = (
    <MemoryRouter initialEntries={['/guitar/2']}>
      <GuitarDetailPage/>
    </MemoryRouter>
  );

  it('should render GuitarDetailPage when user navigate to "/guitar/:id"', async () => {
    render(fakeApp);

    await waitFor(() => {expect(screen.getByTestId('guitar-title-detail')).toBeInTheDocument();});
  });
});
