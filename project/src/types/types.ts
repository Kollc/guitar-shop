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

export type ReviewsType = {
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
