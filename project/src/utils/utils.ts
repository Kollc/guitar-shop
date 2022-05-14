import { COUNT_RATING_STARS, COUNT_SHOW_GUITARS_IN_PAGE, MIN_COUNT_STARS, MOCK_IMG, RatingName, RatingValue } from './../consts';
import { DEFAULT_PATH_TO_GUITAR_IMAGENS } from '../consts';
import { ImagenDataType, RatingStars, ReviewType } from '../types/types';

export const getImagenData = (pathImg: string): ImagenDataType => {
  if(pathImg) {
    const nameFileWithFormat = pathImg.split('/')[1];

    const format = nameFileWithFormat.split('.')[1];
    const fileName = nameFileWithFormat.split('.')[0];
    const index = Number(fileName.split('-')[1]);

    return {index, format, path: DEFAULT_PATH_TO_GUITAR_IMAGENS};
  }

  return MOCK_IMG;
};

export const getCountStartShowGuitars = (currentPage: number): number => {
  const min = COUNT_SHOW_GUITARS_IN_PAGE * currentPage - COUNT_SHOW_GUITARS_IN_PAGE;

  return min;
};


export const getNumberArrayByCount = (count: number): number[] => [...Array(count).keys()].map((key) => key + 1);

export const getRatingByStars = (rating: number): RatingStars[] => {
  const ratingStarsList: RatingStars[] = [];

  for(let i  = MIN_COUNT_STARS; i <= COUNT_RATING_STARS; i++) {
    if(i <= rating) {
      ratingStarsList.push({value: true, key: i});
    } else {
      ratingStarsList.push({value: false, key: i});
    }
  }

  return ratingStarsList;
};

export const getFormatedDate = (date: string): string => {
  const newDate = new Date(date);
  return newDate.toLocaleString('ru-RU', {month: 'long', day: 'numeric'});
};

export const sortReviewsByDate = (reviews: ReviewType[]) => (
  [...reviews].sort((prev, next) => {
    const prevDate = new Date(prev.createAt);
    const nextDate = new Date(next.createAt);

    return Number(nextDate) - Number(prevDate);
  })
);

export const getRatingNameValue = (rating: number): RatingName => {
  switch (rating) {
    case RatingValue.Terrible:
      return RatingName.Terrible;
    case RatingValue.Badly:
      return RatingName.Badly;
    case RatingValue.Good:
      return RatingName.Good;
    case RatingValue.Fine:
      return RatingName.Fine;
    default:
      return RatingName.Great;
  }
};


export const addStyleBodyWithOpenModal = () => {
  const bodyElement = document.querySelector('body') as HTMLBodyElement;
  bodyElement.style.overflow = 'hidden';
};

export const addStyleBodyWithCloseModal = () => {
  const bodyElement = document.querySelector('body') as HTMLBodyElement;
  bodyElement.style.overflow = 'visible';
};
