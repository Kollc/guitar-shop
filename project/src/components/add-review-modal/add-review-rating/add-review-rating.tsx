import { ChangeEvent, Fragment } from 'react';
import { ErrorTypeList, RatingStarsList } from '../../../consts';

type AddReviewRatingProps = {
  handleRatingChange: (evt: ChangeEvent<HTMLInputElement>) => void,
  ratingError: ErrorTypeList | null,
}

function AddReviewRating({handleRatingChange, ratingError}: AddReviewRatingProps): JSX.Element {
  return (
    <div>
      <span className="form-review__label form-review__label--required">Ваша Оценка</span>
      <div className="rate rate--reverse">
        {RatingStarsList.map((item) => (
          <Fragment key={item.name}>
            <input className="visually-hidden" id={`star-${item.value}`} name="rate" type="radio" value={item.value} onChange={handleRatingChange}/>
            <label className="rate__label" htmlFor={`star-${item.value}`} title={item.name}></label>
          </Fragment>
        ))}
        {ratingError !== null && <p className="rate__message" data-testid='rate-error-message'>{ratingError}</p>}
      </div>
    </div>
  );
}

export default AddReviewRating;
