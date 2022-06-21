import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { COUNT_ROWS_IN_TEXT_AREA, DEFAULT_RATING_VALUE, ErrorTypeList, MARGIN_BOTTOM_WITHOUT_ERROR_MESSAGE, TypeRequests } from '../../../consts';
import { addNewReview } from '../../../services/api';
import { GuitarType } from '../../../types/types';
import { valudateRatingInput, valudateTextInput } from '../../../utils/validate';
import ErrorMessage from '../../error-message/error-message';
import AddReviewRating from '../add-review-rating/add-review-rating';

type AddReviewFormProps = {
  guitar: GuitarType,
  onOpenSuccessAddReview: () => void,
}

function AddReviewForm({guitar, onOpenSuccessAddReview}: AddReviewFormProps): JSX.Element {
  const [rating, setRating] = useState(DEFAULT_RATING_VALUE);
  const nameRef = useRef<HTMLInputElement>(null);
  const advantagesRef = useRef<HTMLInputElement>(null);
  const disadvantagesRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const [errorRequest, setErrorRequest] = useState<string | null>(null);

  const [ratingError, setRatingError] = useState<ErrorTypeList | null>(null);
  const [nameError, setNameError] = useState<ErrorTypeList | null>(null);
  const [advantagesError, setAdvantagesError] = useState<ErrorTypeList | null>(null);
  const [disadvantagesError, setDisadvantagesError] = useState<ErrorTypeList | null>(null);
  const [commentError, setCommentError] = useState<ErrorTypeList | null>(null);

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
    setRatingError(null);
  };

  const checkValidateFiled = (element: HTMLInputElement | HTMLTextAreaElement, setError: (value: ErrorTypeList | null) => void): boolean => {
    const validateResult = valudateTextInput(element.value);
    setError(validateResult);

    return validateResult !== null;
  };


  const checkValidateFiledRating = (value: number, setError: (value: ErrorTypeList | null) => void): boolean => {
    const validateResult = valudateRatingInput(value);
    setError(validateResult);

    return validateResult !== null;
  };

  const checkValidateElementsField = (): boolean => {
    const isInvalid: boolean[] = [
      checkValidateFiled(nameRef.current!, setNameError),
      checkValidateFiled(advantagesRef.current!, setAdvantagesError),
      checkValidateFiled(disadvantagesRef.current!, setDisadvantagesError),
      checkValidateFiled(commentRef.current!, setCommentError),
      checkValidateFiledRating(rating, setRatingError),
    ];

    return isInvalid.includes(true);
  };

  const handleSubmitButtonClick = (evt: FormEvent) => {
    evt.preventDefault();
    if(nameRef.current && advantagesRef.current && disadvantagesRef.current && commentRef.current) {
      const isInvalid = checkValidateElementsField();

      if(!isInvalid) {
        addNewReview({
          guitarId: guitar.id,
          userName: nameRef.current.value,
          advantage: advantagesRef.current.value,
          disadvantage: disadvantagesRef.current.value,
          comment: commentRef.current.value,
          rating: rating,
        }, setErrorRequest).then((data) => {
          if(data) {
            onOpenSuccessAddReview();
          }
        });
      }
    }
  };

  return (
    <>
      <form className="form-review" data-testid="form-review">
        <div className="form-review__wrapper">
          <div className="form-review__name-wrapper">
            <label className="form-review__label form-review__label--required" htmlFor="user-name">Ваше Имя</label>
            <input style={{marginBottom: nameError ? 0 : MARGIN_BOTTOM_WITHOUT_ERROR_MESSAGE}} className="form-review__input form-review__input--name" id="user-name" type="text" autoComplete="off" ref={nameRef} onChange={() => setNameError(null)}/>
            {nameError && <p className="form-review__warning">{nameError}</p>}
          </div>
          <AddReviewRating handleRatingChange={handleRatingChange} ratingError={ratingError}/>
        </div>
        <label className="form-review__label form-review__label--required" htmlFor="adv">Достоинства</label>
        <input style={{marginBottom: advantagesError ? 0 : MARGIN_BOTTOM_WITHOUT_ERROR_MESSAGE}} className="form-review__input" id="adv" type="text" autoComplete="off" ref={advantagesRef} onChange={() => setAdvantagesError(null)}/>
        {advantagesError && <p className="form-review__warning">{advantagesError}</p>}

        <label className="form-review__label form-review__label--required" htmlFor="disadv">Недостатки</label>
        <input style={{marginBottom: disadvantagesError ? 0 : MARGIN_BOTTOM_WITHOUT_ERROR_MESSAGE}} className="form-review__input" id="disadv" type="text" autoComplete="off" ref={disadvantagesRef} onChange={() => setDisadvantagesError(null)}/>
        {disadvantagesError && <p className="form-review__warning">{disadvantagesError}</p>}

        <label className="form-review__label form-review__label--required" htmlFor="comment">Комментарий</label>
        <textarea style={{marginBottom: commentError ? 0 : MARGIN_BOTTOM_WITHOUT_ERROR_MESSAGE}} className="form-review__input form-review__input--textarea" id="comment" ref={commentRef} rows={COUNT_ROWS_IN_TEXT_AREA} autoComplete="off" onChange={() => setCommentError(null)}></textarea>
        {commentError && <p className="form-review__warning">{commentError}</p>}

        <button data-testid='submit-button' className="button button--medium-20 form-review__button" type="submit" onClick={handleSubmitButtonClick}>Отправить отзыв</button>
      </form>
      {errorRequest && <ErrorMessage error={errorRequest} type={TypeRequests.Reviews}/>}
    </>
  );
}

export default AddReviewForm;
