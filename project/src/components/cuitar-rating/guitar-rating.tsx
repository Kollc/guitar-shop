import { useEffect, useState } from 'react';
import { getGuitarCommentsById } from '../../services/api';
import { GuitarType, ReviewType } from '../../types/types';
import { getRatingNameValue } from '../../utils/utils';
import RatingStarsList from '../rating-stars-list/rating-stars-list';

type GuitarRatingProps = {
  guitar: GuitarType,
}

function GuitarRating({guitar}: GuitarRatingProps): JSX.Element {
  const [reviews, setReviews] = useState<ReviewType[] | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);

    getGuitarCommentsById(guitar.id).then((data) => {
      if(data) {
        setReviews(data);
        setLoaded(true);
      }
    });
  }, [guitar]);

  if(!loaded || reviews === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="rate product-card__rate">
      <RatingStarsList rating={guitar.rating}/>
      <p className="visually-hidden">Рейтинг: {getRatingNameValue(guitar.rating)}</p>
      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviews.length}</p>
    </div>
  );
}

export default GuitarRating;
