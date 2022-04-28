import { DEFAULT_PATH_TO_GUITAR_IMAGENS } from '../consts';
import { ImagenDataType } from '../types/types';

export const getImagenData = (pathImg: string): ImagenDataType => {
  const nameFileWithFormat = pathImg.split('/')[1];

  const format = nameFileWithFormat.split('.')[1];
  const fileName = nameFileWithFormat.split('.')[0];
  const index = Number(fileName.split('-')[1]);

  return {index, format, path: DEFAULT_PATH_TO_GUITAR_IMAGENS};
};
