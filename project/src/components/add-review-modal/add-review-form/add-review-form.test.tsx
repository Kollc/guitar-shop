import {render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { testGuitars } from '../../../mock/mock';
import { store } from '../../../store/store';
import AddReviewForm from './add-review-form';

describe('AddReviewForm component', () => {
  it('Add review form render is success', () => {
    const onOpenSuccessAddReview = jest.fn();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddReviewForm guitar={testGuitars[0]} onOpenSuccessAddReview={onOpenSuccessAddReview}/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByTestId('form-review')).toBeInTheDocument();
  });
});
