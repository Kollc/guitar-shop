import { testComments, testSortedComments } from '../mock/mock';
import { DEFAULT_PATH_TO_GUITAR_IMAGENS, COUNT_SHOW_GUITARS_IN_PAGE, RatingName } from './../consts';
import { getCountStartShowGuitars, getFormatedDate, getImagenData, getNumberArrayByCount, getRatingByStars, sortReviewsByDate, getRatingNameValue, addStyleBodyWithOpenModal, addStyleBodyWithCloseModal } from './utils';

describe('Util funtions', () => {
  it('should getImagenData work is success', () => {
    const imgPath = 'img/guitar-1.jpg';
    const res = getImagenData(imgPath);
    expect(res).toEqual({index: 1, format: 'jpg', path: DEFAULT_PATH_TO_GUITAR_IMAGENS});
  });

  it('should getCountStartShowGuitars work is success', () => {
    expect(getCountStartShowGuitars(3)).toBe(COUNT_SHOW_GUITARS_IN_PAGE * 3 - COUNT_SHOW_GUITARS_IN_PAGE);
  });

  it('should getNumberArrayByCount work is success', () => {
    const testArray = [1,2,3,4,5,6,7,8,9,10];
    expect(getNumberArrayByCount(10)).toEqual(testArray);
  });

  it('should getRatingByStars work is success', () => {
    expect(getRatingByStars(1)).toEqual([
      {value: true, key: 1},
      {value: false, key: 2},
      {value: false, key: 3},
      {value: false, key: 4},
      {value: false, key: 5},
    ]);

    expect(getRatingByStars(2)).toEqual([
      {value: true, key: 1},
      {value: true, key: 2},
      {value: false, key: 3},
      {value: false, key: 4},
      {value: false, key: 5},
    ]);

    expect(getRatingByStars(3)).toEqual([
      {value: true, key: 1},
      {value: true, key: 2},
      {value: true, key: 3},
      {value: false, key: 4},
      {value: false, key: 5},
    ]);

    expect(getRatingByStars(4)).toEqual([
      {value: true, key: 1},
      {value: true, key: 2},
      {value: true, key: 3},
      {value: true, key: 4},
      {value: false, key: 5},
    ]);

    expect(getRatingByStars(5)).toEqual([
      {value: true, key: 1},
      {value: true, key: 2},
      {value: true, key: 3},
      {value: true, key: 4},
      {value: true, key: 5},
    ]);
  });

  it('should getFormatedDate work is success', () => {
    expect(getFormatedDate('2021-10-28T12:32:16.934Z')).toBe('28 октября');
  });

  it('should sortReviewsByDate work is succes', () => {
    expect(sortReviewsByDate(testComments)).toEqual(testSortedComments);
  });

  it('should getRatingNameValue work is succes', () => {
    expect(getRatingNameValue(1)).toBe(RatingName.Terrible);
    expect(getRatingNameValue(2)).toBe(RatingName.Badly);
    expect(getRatingNameValue(3)).toBe(RatingName.Fine);
    expect(getRatingNameValue(4)).toBe(RatingName.Good);
    expect(getRatingNameValue(5)).toBe(RatingName.Great);
  });

  it('should addStyleBodyWithOpenModal work is succes', () => {
    const bodyElement = document.querySelector('body') as HTMLBodyElement;
    addStyleBodyWithOpenModal();
    expect(bodyElement).toHaveStyle('overflow: hidden');
  });

  it('should addStyleBodyWithCloseModal work is succes', () => {
    const bodyElement = document.querySelector('body') as HTMLBodyElement;
    bodyElement.style.overflow = 'hidden';
    addStyleBodyWithCloseModal();
    expect(bodyElement).toHaveStyle('overflow: visible');
  });
});
