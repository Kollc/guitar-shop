import {fireEvent, render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../../store/store';
import AddReviewSuccess from './add-review-success';

describe('AddReviewSuccess component', () => {
  it('AddReviewSuccess render is success', () => {
    const onClose = jest.fn();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddReviewSuccess open={false} onClose={onClose}/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText('Спасибо за ваш отзыв!')).toBeInTheDocument();
  });

  it('AddReviewSuccess events work is success', () => {
    const onClose = jest.fn();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddReviewSuccess open={false} onClose={onClose}/>
        </BrowserRouter>
      </Provider>);

    fireEvent.click(screen.getByTestId('overlay'));
    expect(onClose).toBeCalledTimes(1);

    fireEvent.click(screen.getByTestId('to-another-buy'));
    expect(onClose).toBeCalledTimes(2);

    fireEvent.click(screen.getByTestId('close'));
    expect(onClose).toBeCalledTimes(3);
  });
});
