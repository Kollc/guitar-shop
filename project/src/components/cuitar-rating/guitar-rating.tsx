import { useEffect, useState } from 'react';
import { TypeRequests } from '../../consts';
import { getGuitarCommentsById } from '../../services/api';
import { GuitarType, ReviewType } from '../../types/types';
import { getRatingNameValue } from '../../utils/utils';
import ErrorMessage from '../error-message/error-message';
import RatingStarsList from '../rating-stars-list/rating-stars-list';

type GuitarRatingProps = {
  guitar: GuitarType,
}

function GuitarRating({guitar}: GuitarRatingProps): JSX.Element {
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoaded(false);

    getGuitarCommentsById(guitar.id, setError).then((data) => {
      setReviews(data);
      setLoaded(true);
    });
  }, [guitar]);

  if(!loaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="rate product-card__rate">
      <RatingStarsList rating={guitar.rating}/>
      <p className="visually-hidden">Рейтинг: {getRatingNameValue(guitar.rating)}</p>
      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviews ? reviews.length : null}</p>
      {error && <ErrorMessage error={error} type={TypeRequests.Reviews}/>}
    </div>
  );
}

export default GuitarRating;
