import {render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ErrorTypeList } from '../../../consts';
import { store } from '../../../store/store';
import AddReviewRating from './add-review-rating';

describe('AddReviewRating component', () => {
  it('AddReviewRating render is success without error', () => {
    const handleRatingChange = jest.fn();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddReviewRating ratingError={null} handleRatingChange={handleRatingChange}/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText('Ваша Оценка')).toBeInTheDocument();
  });

  it('AddReviewRating render is success with error', () => {
    const handleRatingChange = jest.fn();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddReviewRating ratingError={ErrorTypeList.NotChangeRating} handleRatingChange={handleRatingChange}/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByTestId('rate-error-message')).toBeInTheDocument();
  });
});
