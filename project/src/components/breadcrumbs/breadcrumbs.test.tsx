import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Breadcrumbs from './breadcrumbs';

describe('Breadcrumbs component', () => {
  it('should breadcrumbs render is success', () => {
    render(
      <BrowserRouter>
        <Breadcrumbs pageName={'test name'}/>
      </BrowserRouter>);

    expect(screen.getByText('Главная')).toBeInTheDocument();
    expect(screen.getByText('Каталог')).toBeInTheDocument();
    expect(screen.getByText('test name')).toBeInTheDocument();
  });
});
