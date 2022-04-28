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

export type GuitarsProcessType = {
  guitars: GuitarType[],
  isLoadedGuitars: boolean,
}

export type ImagenDataType = {
  index: number,
  format: string,
  path: string,
}
