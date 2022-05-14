import { ChangeEvent } from 'react';
import { ErrorTypeList, RatingName, RatingValue } from '../../../consts';

type AddReviewRatingProps = {
  handleChangeRating: (evt: ChangeEvent<HTMLInputElement>) => void,
  ratingError: ErrorTypeList | null,
}

function AddReviewRating({handleChangeRating, ratingError}: AddReviewRatingProps): JSX.Element {
  return (
    <div>
      <span className="form-review__label form-review__label--required">Ваша Оценка</span>
      <div className="rate rate--reverse">
        <input className="visually-hidden" id={`star-${RatingValue.Great}`} name="rate" type="radio" value={RatingValue.Great} onChange={handleChangeRating}/>
        <label className="rate__label" htmlFor={`star-${RatingValue.Great}`} title={RatingName.Great}></label>

        <input className="visually-hidden" id={`star-${RatingValue.Fine}`} name="rate" type="radio" value={RatingValue.Fine} onChange={handleChangeRating}/>
        <label className="rate__label" htmlFor={`star-${RatingValue.Fine}`} title={RatingName.Fine}></label>

        <input className="visually-hidden" id={`star-${RatingValue.Good}`} name="rate" type="radio" value={RatingValue.Good} onChange={handleChangeRating}/>
        <label className="rate__label" htmlFor={`star-${RatingValue.Good}`} title={RatingName.Good}></label>

        <input className="visually-hidden" id={`star-${RatingValue.Badly}`} name="rate" type="radio" value={RatingValue.Badly} onChange={handleChangeRating}/>
        <label className="rate__label" htmlFor={`star-${RatingValue.Badly}`} title={RatingName.Badly}></label>

        <input className="visually-hidden" id={`star-${RatingValue.Terrible}`} name="rate" type="radio" value={RatingValue.Terrible} onChange={handleChangeRating}/>
        <label className="rate__label" htmlFor={`star-${RatingValue.Terrible}`} title={RatingName.Terrible}></label>

        {ratingError !== null && <p className="rate__message" data-testid='rate-error-message'>{ratingError}</p>}
      </div>
    </div>
  );
}

export default AddReviewRating;
