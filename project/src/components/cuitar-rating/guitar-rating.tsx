import { useEffect, useState } from 'react';
import { COUNT_RATING_STARS } from '../../consts';
import { GuitarType } from '../../types/types';

type GuitarRatingProps = {
  guitar: GuitarType,
}

function GuitarRating({guitar}: GuitarRatingProps): JSX.Element {
  const [ratingStars, setRatingStars] = useState<{value: boolean, key: number}[]>([]);

  useEffect(() => {
    const ratingStarsList: {value: boolean, key: number}[] = [];

    for(let i  = 1; i <= COUNT_RATING_STARS; i++) {
      if(i <= guitar.rating) {
        ratingStarsList.push({value: true, key: i});
      } else {
        ratingStarsList.push({value: false, key: i});
      }
    }

    setRatingStars(ratingStarsList);
  }, [guitar]);

  return (
    <div className="rate product-card__rate">
      {ratingStars.map((star) => (
        <svg key={star.key} width="12" height="11" aria-hidden="true">
          <use xlinkHref={star.value ? '#icon-full-star' : '#icon-star'}></use>
        </svg>
      ))}
      <p className="visually-hidden">Рейтинг: Хорошо</p>
      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{guitar.stringCount}</p>
    </div>
  );
}

export default GuitarRating;
