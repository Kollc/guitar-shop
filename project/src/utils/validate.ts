import { DEFAULT_RATING_VALUE, ErrorTypeList } from '../consts';

export const valudateTextInput = (value: string): ErrorTypeList | null => {
  if(!value) {
    return ErrorTypeList.Empty;
  }

  return null;
};

export const valudateRatingInput = (value: number): ErrorTypeList | null => {
  if(value === DEFAULT_RATING_VALUE) {
    return ErrorTypeList.NotChangeRating;
  }

  return null;
};
