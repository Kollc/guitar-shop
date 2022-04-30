import { COUNT_RATING_STARS, COUNT_SHOW_GUITARS_IN_PAGE } from './../consts';
import { DEFAULT_PATH_TO_GUITAR_IMAGENS } from '../consts';
import { ImagenDataType, RatingStars } from '../types/types';

export const getImagenData = (pathImg: string): ImagenDataType => {
  const nameFileWithFormat = pathImg.split('/')[1];

  const format = nameFileWithFormat.split('.')[1];
  const fileName = nameFileWithFormat.split('.')[0];
  const index = Number(fileName.split('-')[1]);

  return {index, format, path: DEFAULT_PATH_TO_GUITAR_IMAGENS};
};

export const borderCountShowGuitarsByPagination = (currentPage: number): {min: number, max: number} => {
  const min = COUNT_SHOW_GUITARS_IN_PAGE * currentPage - COUNT_SHOW_GUITARS_IN_PAGE;
  const max = COUNT_SHOW_GUITARS_IN_PAGE * currentPage;

  return {min, max};
};


export const getNumberArrayByCount = (count: number): number[] => Array.from({length: count}, (v, k) => k+1);

export const getRatingByStars = (rating: number):RatingStars[] => {
  const ratingStarsList: RatingStars[] = [];

  for(let i  = 1; i <= COUNT_RATING_STARS; i++) {
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
