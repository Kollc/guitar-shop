import { useEffect, useRef, useState } from 'react';
import { COUNT_SHOW_REVIEWS, ESCAPE_BUTTON_KEY, TypeRequests } from '../../consts';
import { getGuitarCommentsById } from '../../services/api';
import { GuitarType, ReviewType } from '../../types/types';
import { addStyleBodyWithCloseModal, addStyleBodyWithOpenModal, getFormatedDate, getRatingNameValue, sortReviewsByDate } from '../../utils/utils';
import AddReviewSuccess from '../add-review-modal/add-review-success/add-review-success';
import ErrorMessage from '../error-message/error-message';
import RatingStarsList from '../rating-stars-list/rating-stars-list';
import AddReviewModal from './../add-review-modal/add-review-modal';

type GuitarReviewProps = {
  guitar: GuitarType,
}

function GuitarReview({guitar}: GuitarReviewProps): JSX.Element {
  const [countShowReviews, SetCountShowReviews] = useState(COUNT_SHOW_REVIEWS);
  const showMoreButtonRef = useRef<HTMLButtonElement | null>(null);
  const [openModalAddReview, setOpenModalAddReview] = useState(false);
  const [reviews, setReviews] = useState<ReviewType[] | null>(null);
  const [isAddedReview, setIsAddedReview] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleKeydownEscCloseModal = (evt: KeyboardEvent): void => {
    if(evt.key === ESCAPE_BUTTON_KEY) {
      handleClickCloseModalAddReview();
      handleClickCloseModalSuccessAddReview();
    }
  };

  const handleClickOpenModalAddReview = () => {
    setOpenModalAddReview(true);
    addStyleBodyWithOpenModal();
    document.addEventListener('keydown', handleKeydownEscCloseModal);
  };

  const handleClickCloseModalAddReview = () => {
    setOpenModalAddReview(false);
    addStyleBodyWithCloseModal();
    document.removeEventListener('keydown', handleKeydownEscCloseModal);
  };

  const handleClickOpenModalSuccessAddReview = () => {
    setIsAddedReview(true);
    addStyleBodyWithOpenModal();
    document.addEventListener('keydown', handleKeydownEscCloseModal);
  };

  const handleClickCloseModalSuccessAddReview = () => {
    setIsAddedReview(false);
    addStyleBodyWithCloseModal();
    document.removeEventListener('keydown', handleKeydownEscCloseModal);
    fetchReviews();
  };

  const fetchReviews = () => {
    setLoaded(false);

    getGuitarCommentsById(guitar.id, setError).then((data) => {
      if(data) {
        setReviews(data);
        setLoaded(true);
      }
    });
  };

  useEffect(() => {
    if(isAddedReview) {
      setOpenModalAddReview(false);
    }
  }, [isAddedReview]);

  useEffect(() => {
    fetchReviews();
  }, [guitar]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      const showMoreButton = showMoreButtonRef.current;

      if((showMoreButtonRef !== null && showMoreButton) && (scrollPosition >= showMoreButton.offsetTop + showMoreButton.scrollHeight)) {
        SetCountShowReviews((count) => count + COUNT_SHOW_REVIEWS);
      }
    });
  }, []);


  if(!loaded || reviews === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="reviews">
        <h3 className="reviews__title title title--bigger">Отзывы</h3>
        <button className="button button--red-border button--big reviews__sumbit-button" onClick={handleClickOpenModalAddReview}>Оставить отзыв</button>
        {sortReviewsByDate(reviews).slice(0, countShowReviews).map((review) => (
          <div className="review" key={review.id}>
            <div className="review__wrapper">
              <h4 className="review__title review__title--author title title--lesser">{review.userName}</h4>
              <span className="review__date">{getFormatedDate(review.createAt)}</span>
            </div>
            <div className="rate review__rating-panel">
              <RatingStarsList rating={review.rating}/>
              <p className="visually-hidden">Оценка: {getRatingNameValue(guitar.rating)}</p>
            </div>
            <h4 className="review__title title title--lesser">Достоинства:</h4>
            <p className="review__value">{review.advantage}</p>
            <h4 className="review__title title title--lesser">Недостатки:</h4>
            <p className="review__value">{review.disadvantage}</p>
            <h4 className="review__title title title--lesser">Комментарий:</h4>
            <p className="review__value">{review.comment}</p>
          </div>
        ))}
        {countShowReviews < reviews.length && <button className="button button--medium reviews__more-button" ref={showMoreButtonRef} onClick={() => SetCountShowReviews((count) => count + COUNT_SHOW_REVIEWS)}>Показать еще отзывы</button>}
        <a className="button button--up button--red-border button--big reviews__up-button" href="#header">Наверх</a>
      </section>
      <AddReviewModal guitar={guitar} open={openModalAddReview} onClose={handleClickCloseModalAddReview} onOpenSuccessAddReview={handleClickOpenModalSuccessAddReview}/>
      <AddReviewSuccess open={isAddedReview} onClose={handleClickCloseModalSuccessAddReview}/>
      {error && <ErrorMessage error={error} type={TypeRequests.Reviews}/>}
    </>
  );
}

export default GuitarReview;
