import { ChangeEvent } from 'react';
import { ErrorTypeList, RatingStarsList } from '../../../consts';

type AddReviewRatingProps = {
  handleChangeRating: (evt: ChangeEvent<HTMLInputElement>) => void,
  ratingError: ErrorTypeList | null,
}

function AddReviewRating({handleChangeRating, ratingError}: AddReviewRatingProps): JSX.Element {
  return (
    <div>
      <span className="form-review__label form-review__label--required">Ваша Оценка</span>
      <div className="rate rate--reverse">
        {RatingStarsList.map((item) => (
          <>
            <input className="visually-hidden" id={`star-${item.value}`} name="rate" type="radio" value={item.value} onChange={handleChangeRating}/>
            <label className="rate__label" htmlFor={`star-${item.value}`} title={item.name}></label>
          </>
        ))}
        {ratingError !== null && <p className="rate__message" data-testid='rate-error-message'>{ratingError}</p>}
      </div>
    </div>
  );
}

export default AddReviewRating;
