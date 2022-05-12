import {  fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { testGuitars } from '../../mock/mock';
import { store } from '../../store/store';
import AddReviewModal from './add-review-modal';

describe('AddReviewModal component', () => {
  const onClose = jest.fn();
  const onOpenSuccessAddReview = jest.fn();

  it('AddReviewModal render is success', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddReviewModal guitar={testGuitars[0]} open onClose={onClose} onOpenSuccessAddReview={onOpenSuccessAddReview}/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText('Оставить отзыв')).toBeInTheDocument();
    expect(screen.getByTestId('modal')).toHaveClass('is-active');
  });

  it('AddReviewModal events work is success', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddReviewModal guitar={testGuitars[0]} open onClose={onClose} onOpenSuccessAddReview={onOpenSuccessAddReview}/>
        </BrowserRouter>
      </Provider>);

    fireEvent.click(screen.getByTestId('overlay'));
    expect(onClose).toBeCalledTimes(1);

    fireEvent.click(screen.getByTestId('close'));
    expect(onClose).toBeCalledTimes(2);
  });
});
