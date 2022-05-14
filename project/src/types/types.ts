export type GuitarType = {
  id: number,
  name: string,
  vendorCode: string,
  type: string,
  description: string,
  previewImg: string,
  stringCount: number,
  rating: number,
  price: number,
}

export type AddReviewType = {
  guitarId: number,
  userName: string,
  advantage: string,
  disadvantage: string,
  comment: string,
  rating: number,
}

export type ReviewType = {
    id: string,
    userName: string,
    advantage: string,
    disadvantage: string,
    comment: string,
    rating: number,
    createAt: string,
    guitarId: number,
}

export type GuitarsProcessType = {
  guitars: GuitarType[],
  isLoadedGuitars: boolean,
  countGuitars: number,
  errorMessage: string,
}

export type GuitarDetailProcessType = {
  errorMessage: string,
  isLoadedGuitarDetail: boolean,
  guitarDetail: null | GuitarType,
}

export type ImagenDataType = {
  index: number,
  format: string,
  path: string,
}

export type RatingStars = {
  value: boolean,
  key: number
}

export type ParamsType = {
  start?:  number,
}

export type ErrorType = unknown;
