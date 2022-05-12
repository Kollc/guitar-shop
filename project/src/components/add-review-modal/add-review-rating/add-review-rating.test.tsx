import {render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { errorTypeList } from '../../../consts';
import { store } from '../../../store/store';
import AddReviewRating from './add-review-rating';

describe('AddReviewRating component', () => {
  it('AddReviewRating render is success without error', () => {
    const handleChangeRating = jest.fn();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddReviewRating ratingError={null} handleChangeRating={handleChangeRating}/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText('Ваша Оценка')).toBeInTheDocument();
  });

  it('AddReviewRating render is success with error', () => {
    const handleChangeRating = jest.fn();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddReviewRating ratingError={errorTypeList.NotChangeRating} handleChangeRating={handleChangeRating}/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByTestId('rate-error-message')).toBeInTheDocument();
  });
});
