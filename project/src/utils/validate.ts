import { DEFAULT_RATING_VALUE, errorTypeList } from '../consts';

export const valudateTextInput = (value: string): errorTypeList | null => {
  if(!value) {
    return errorTypeList.Empty;
  }

  return null;
};

export const valudateRatingInput = (value: number): errorTypeList | null => {
  if(value === DEFAULT_RATING_VALUE) {
    return errorTypeList.NotChangeRating;
  }

  return null;
};
