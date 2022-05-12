import { useEffect, useState } from 'react';
import { RatingStars } from '../../types/types';
import { getRatingByStars } from '../../utils/utils';

type RatingStarsListProps = {
  rating: number,
}

function RatingStarsList({rating}: RatingStarsListProps): JSX.Element {
  const [ratingStars, setRatingStars] = useState<RatingStars[]>([]);

  useEffect(() => {
    setRatingStars(getRatingByStars(rating));
  }, [rating]);

  return (
    <>
      {ratingStars.map((star) => (
        <svg key={star.key} width="12" height="11" aria-hidden="true" data-testid='star'>
          <use xlinkHref={star.value ? '#icon-full-star' : '#icon-star'}></use>
        </svg>
      ))}
    </>
  );
}

export default RatingStarsList;
