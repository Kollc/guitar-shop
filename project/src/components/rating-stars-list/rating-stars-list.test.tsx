import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {store} from './../../store/store';
import RatingStarsList from './rating-stars-list';

describe('RatingStarsList component', () => {
  it('should RatingStarsList render is succes', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RatingStarsList rating={1}/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getAllByTestId('star')[0]).toBeInTheDocument();
  });
});
