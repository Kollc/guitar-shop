export enum AppRoutes {
  Main = '/',
  CatalogPage = '/catalog/page/:page',
  Guitar = '/guitar/:id',
}

export enum APIRoutes {
  Guitars = '/guitars',
  Comments = '/comments',
}

export const BASE_URL = 'https://guitar-shop.accelerator.pages.academy';
export const TIMEOUT_SERVER = 5000;

export enum NameSpace {
  Guitars ='GUITARS',
}

export enum errorTypeList {
  Empty = 'Заполните поле',
  NotChangeRating = 'Поставьте оценку',
}

export const DEFAULT_PATH_TO_GUITAR_IMAGENS = 'img/content/';
export const COUNT_SHOW_GUITARS_IN_PAGE = 9;
export const COUNT_SHOW_REVIEWS = 3;

export const FIRST_PAGE_INDEX = 1;

export const COUNT_RATING_STARS = 5;
export const DEFAULT_RATING_VALUE = 0;

export const COUNT_ROWS_IN_TEXT_AREA = 10;

export enum GuitarTabsList {
  Characteristics = 'characteristics',
  Description = 'description',
}


export enum RatingName {
  Terrible = 'Ужасно',
  Badly = 'Плохо',
  Fine = 'Нормально',
  Good = 'Хорошо',
  Great = 'Отлично',
}

export enum RatingValue {
  Terrible = 1,
  Badly = 2,
  Fine = 3,
  Good = 4,
  Great = 5,
}

export const ESCAPE_BUTTON_KEY = 'Escape';
export const TOTAL_COUNT_GUITARS_HEADERS = 'x-total-count';

export const TIMEOUT_RESET_ERROR = 5000;

export enum TypeRequests {
  Guitars = 'guitars request',
  Reviews = 'reviews request',
}
