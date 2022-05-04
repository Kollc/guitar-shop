import { useRef, useState } from 'react';
import { COUNT_SHOW_REVIEWS } from '../../consts';
import { GuitarType, ReviewType } from '../../types/types';
import { getFormatedDate, getRatingNameValue, sortReviewsByDate } from '../../utils/utils';
import RatingStarsList from '../rating-stars-list/rating-stars-list';
import AddReviewModal from './../add-review-modal/add-review-modal';

type GuitarReviewProps = {
  reviews: ReviewType[],
  guitar: GuitarType,
}

function GuitarReview({reviews, guitar}: GuitarReviewProps): JSX.Element {
  const [countShowReviews, SetCountShowReviews] = useState(COUNT_SHOW_REVIEWS);
  const showMoreButtonRef = useRef<HTMLButtonElement | null>(null);
  const [openModalAddReview, setOpenModalAddReview] = useState(false);

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const showMoreButton = showMoreButtonRef.current;

    if((showMoreButtonRef !== null && showMoreButton) && (scrollPosition >= showMoreButton.offsetTop + showMoreButton.scrollHeight)) {
      SetCountShowReviews((count) => count + COUNT_SHOW_REVIEWS);
    }
  });

  return (
    <>
      <section className="reviews">
        <h3 className="reviews__title title title--bigger">Отзывы</h3>
        <button className="button button--red-border button--big reviews__sumbit-button" onClick={() => setOpenModalAddReview(true)}>Оставить отзыв</button>
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
      <AddReviewModal guitar={guitar} open={openModalAddReview} onOpen={setOpenModalAddReview}/>
    </>
  );
}

export default GuitarReview;
