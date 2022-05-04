import { GuitarType } from '../../types/types';
import { getRatingNameValue } from '../../utils/utils';
import RatingStarsList from '../rating-stars-list/rating-stars-list';

type GuitarRatingProps = {
  guitar: GuitarType,
  countReviews: number,
}

function GuitarRating({guitar, countReviews}: GuitarRatingProps): JSX.Element {
  return (
    <div className="rate product-card__rate">
      <RatingStarsList rating={guitar.rating}/>
      <p className="visually-hidden">Рейтинг: {getRatingNameValue(guitar.rating)}</p>
      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{countReviews}</p>
    </div>
  );
}

export default GuitarRating;
