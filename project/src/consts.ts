export enum AppRoutes {
  Main = '/',
  Catalog = '/catalog/page_:page',
  Guitar = '/catalog/:id',
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

export const DEFAULT_PATH_TO_GUITAR_IMAGENS = 'img/content/';
export const COUNT_SHOW_GUITARS_IN_PAGE = 9;
export const COUNT_SHOW_REVIEWS = 3;

export const FIRST_PAGE_INDEX = 1;

export const COUNT_RATING_STARS = 5;

export enum GuitarTabsList {
  Characteristics = 'characteristics',
  Description = 'description',
}
