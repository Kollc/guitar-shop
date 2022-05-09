import { DEFAULT_RATING_VALUE, errorTypeList } from '../consts';
import { valudateRatingInput, valudateTextInput } from './validate';

describe('Validate funtions', () => {
  it('should valudateTextInput work is success', () => {
    expect(valudateTextInput('some value')).toBe(null);
    expect(valudateTextInput('')).toBe(errorTypeList.Empty);
  });

  it('should valudateRatingInput work is success', () => {
    expect(valudateRatingInput(DEFAULT_RATING_VALUE)).toBe(errorTypeList.NotChangeRating);
    expect(valudateRatingInput(5)).toBe(null);
  });
});
