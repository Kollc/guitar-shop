import { useEffect, useState } from 'react';
import { TypeRequests } from '../../../consts';
import { getGuitarCommentsCountById } from '../../../services/api';
import { GuitarType } from '../../../types/types';
import { getRatingNameValue } from '../../../utils/utils';
import ErrorMessage from '../../error-message/error-message';
import LoadingScreen from '../../loading-screen/loading-sceen';
import RatingStarsList from '../../rating-stars-list/rating-stars-list';

type GuitarRatingCardProps = {
  guitar: GuitarType,
}

function GuitarRatingCard({guitar}: GuitarRatingCardProps): JSX.Element {
  const [reviewsCount, setReviewsCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoaded(false);

    getGuitarCommentsCountById(guitar.id, setError).then((data) => {
      if(isMounted) {
        setReviewsCount(data);
        setLoaded(true);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [guitar]);

  if(!loaded) {
    return <LoadingScreen/>;
  }

  return (
    <div className='rate product-card__rate'>
      <RatingStarsList rating={guitar.rating}/>
      <p className="visually-hidden">Рейтинг: {getRatingNameValue(guitar.rating)}</p>
      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewsCount}</p>
      {error && <ErrorMessage error={error} type={TypeRequests.Reviews}/>}
    </div>
  );
}

export default GuitarRatingCard;
