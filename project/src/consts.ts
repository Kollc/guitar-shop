export enum AppRoutes {
  Main = '/',
  CatalogPage = '/catalog/page/:page',
  Guitar = '/guitar/:id',
  Cart = '/cart',
}

export enum APIRoutes {
  Guitars = '/guitars',
  Comments = '/comments',
  Coupons = '/coupons',
  Orders  = '/orders ',
}

export const BASE_URL = 'https://guitar-shop.accelerator.pages.academy';
export const TIMEOUT_SERVER = 5000;

export enum NameSpace {
  Guitars = 'GUITARS',
  GuitarDetail = 'GUITAR_DETAIL',
  Reviews = 'REVIEWS',
  Cart = 'CART',
}

export enum ErrorTypeList {
  Empty = 'Заполните поле',
  NotChangeRating = 'Поставьте оценку',
}

export const DEFAULT_PATH_TO_GUITAR_IMAGENS = 'img/content/';
export const COUNT_SHOW_GUITARS_IN_PAGE = 9;
export const COUNT_SHOW_REVIEWS = 3;

export const FIRST_PAGE_INDEX = 1;
export const DEFAULT_ADD_COUNT_GUITAR_TO_CART = 1;

export const COUNT_RATING_STARS = 5;
export const DEFAULT_RATING_VALUE = 0;

export const COUNT_ROWS_IN_TEXT_AREA = 10;

export enum GuitarTabList {
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

export const RatingStarsList: {name: RatingName, value: RatingValue}[] = [
  {name: RatingName.Great, value: RatingValue.Great},
  {name: RatingName.Good, value: RatingValue.Good},
  {name: RatingName.Fine, value: RatingValue.Fine},
  {name: RatingName.Badly, value: RatingValue.Badly},
  {name: RatingName.Terrible, value: RatingValue.Terrible},
];

export const ESCAPE_BUTTON_KEY = 'Escape';

export const TIMEOUT_RESET_ERROR = 5000;

export enum TypeRequests {
  Guitars = 'Guitars request',
  Reviews = 'Reviews request',
  Cart = 'Cart request',
}

export const MOCK_IMG = {index: 1, format: 'jpg', path: 'img/content/'};

export const MIN_COUNT_STARS = 1;
export const FETCH_GUITARS_LIMIT = 27;
export const MARGIN_BOTTOM_WITHOUT_ERROR_MESSAGE = '15px';
export const MAX_COUNT_PERCENTS = 100;


export enum QueryParamsList {
  PriceEnd = 'priceEnd',
  PriceStart = 'priceStart',
  Order = 'order',
  Sort = 'sort',
  Type = 'type',
  Count = 'count',
}

export enum GuitarTypes {
  Acoustic = 'acoustic',
  Electric = 'electric',
  Ukulele = 'ukulele',
}

export const GuitarTypeList = [
  {
    title: 'Акустические гитары',
    id: GuitarTypes.Acoustic,
  },
  {
    title: 'Электрогитары',
    id: GuitarTypes.Electric,
  },
  {
    title: 'Укулеле',
    id: GuitarTypes.Ukulele,
  },
];

export const GuitarCountStrings = [
  {
    title: '4',
    id: '4-strings',
  },
  {
    title: '6',
    id: '6-strings',
  },
  {
    title: '7',
    id: '7-strings',
  },
  {
    title: '12',
    id: '12-strings',
  },
];

export const GuitarsTypeCountStrings = new Map([
  ['acoustic', [6, 7, 12]],
  ['electric', [4, 6, 7]],
  ['ukulele', [4]],
]);

export const GuitarTypeDictionary = new Map([
  ['acoustic', 'Акустическая гитара'],
  ['electric', 'Электрогитара'],
  ['ukulele', 'Укулеле'],
]);

export enum HttpCode {
  Ok = 201,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

export enum CartCountGuitars {
  Min = 1,
  Max = 99,
}
