import { useEffect, useRef, useState } from 'react';
import { COUNT_SHOW_REVIEWS, ESCAPE_BUTTON_KEY, TypeRequests } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchReviewsGuitarByIdAction } from '../../store/actions/api-actions';
import { getErrorReviews, getStatusLoadedDetailReviews } from '../../store/reviews-process/selector';
import { GuitarType, ReviewType } from '../../types/types';
import { addStyleBodyWithCloseModal, addStyleBodyWithOpenModal, getFormatedDate, getRatingNameValue, sortReviewsByDate } from '../../utils/utils';
import AddReviewSuccess from '../add-review-modal/add-review-success/add-review-success';
import ErrorMessage from '../error-message/error-message';
import LoadingScreen from '../loading-screen/loading-sceen';
import RatingStarsList from '../rating-stars-list/rating-stars-list';
import AddReviewModal from './../add-review-modal/add-review-modal';

type GuitarReviewProps = {
  guitar: GuitarType,
  reviews: ReviewType[],
}

function GuitarReview({guitar, reviews}: GuitarReviewProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [countShowReviews, SetCountShowReviews] = useState(COUNT_SHOW_REVIEWS);
  const showMoreButtonRef = useRef<HTMLButtonElement | null>(null);
  const [openModalAddReview, setOpenModalAddReview] = useState(false);
  const [isAddedReview, setIsAddedReview] = useState(false);

  const loaded = useAppSelector(getStatusLoadedDetailReviews);
  const error = useAppSelector(getErrorReviews);

  const handleEscCloseModalKeydown = (evt: KeyboardEvent): void => {
    if(evt.key === ESCAPE_BUTTON_KEY) {
      handleCloseModalAddReviewClick();
      handleCloseModalSuccessAddReviewClick();
    }
  };

  const handleOpenModalAddReviewClick = () => {
    setOpenModalAddReview(true);
    addStyleBodyWithOpenModal();
    document.addEventListener('keydown', handleEscCloseModalKeydown);
  };

  const handleCloseModalAddReviewClick = () => {
    setOpenModalAddReview(false);
    addStyleBodyWithCloseModal();
    document.removeEventListener('keydown', handleEscCloseModalKeydown);
  };

  const handleOpenModalSuccessAddReviewClick = () => {
    setIsAddedReview(true);
    addStyleBodyWithOpenModal();
    document.addEventListener('keydown', handleEscCloseModalKeydown);
  };

  const handleCloseModalSuccessAddReviewClick = () => {
    setIsAddedReview(false);
    addStyleBodyWithCloseModal();
    document.removeEventListener('keydown', handleEscCloseModalKeydown);
  };

  useEffect(() => {
    if(isAddedReview) {
      setOpenModalAddReview(false);
      dispatch(fetchReviewsGuitarByIdAction(guitar.id));
    }
  }, [isAddedReview]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      const showMoreButton = showMoreButtonRef.current;

      if((showMoreButtonRef !== null && showMoreButton) && (scrollPosition >= showMoreButton.offsetTop + showMoreButton.scrollHeight)) {
        SetCountShowReviews((count) => count + COUNT_SHOW_REVIEWS);
      }
    });
  }, []);


  if(!loaded) {
    return <LoadingScreen/>;
  }

  return (
    <>
      <section className="reviews">
        <h3 className="reviews__title title title--bigger">Отзывы</h3>
        <button className="button button--red-border button--big reviews__sumbit-button" onClick={handleOpenModalAddReviewClick}>Оставить отзыв</button>
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
      <AddReviewModal guitar={guitar} open={openModalAddReview} onClose={handleCloseModalAddReviewClick} onOpenSuccessAddReview={handleOpenModalSuccessAddReviewClick}/>
      <AddReviewSuccess open={isAddedReview} onClose={handleCloseModalSuccessAddReviewClick}/>
      {error && <ErrorMessage error={error} type={TypeRequests.Reviews}/>}
    </>
  );
}

export default GuitarReview;
