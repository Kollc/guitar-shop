import { TypeRequests } from '../../../../consts';
import { useAppSelector } from '../../../../hooks/hooks';
import { getErrorReviews, getStatusLoadedDetailReviews } from '../../../../store/reviews-process/selector';
import { GuitarType } from '../../../../types/types';
import { getRatingNameValue } from '../../../../utils/utils';
import ErrorMessage from '../../../error-message/error-message';
import LoadingScreen from '../../../loading-screen/loading-sceen';
import RatingStarsList from '../../../rating-stars-list/rating-stars-list';

type GuitarRatingDetailProps = {
  reviewsCount: number,
  guitar: GuitarType,
}

function GuitarRatingDetail({reviewsCount, guitar}: GuitarRatingDetailProps): JSX.Element {
  const loaded = useAppSelector(getStatusLoadedDetailReviews);
  const error = useAppSelector(getErrorReviews);

  if(!loaded) {
    return <LoadingScreen/>;
  }

  return (
    <div className='rate product-container__rating'>
      <RatingStarsList rating={guitar.rating} isDetail/>
      <p className="visually-hidden">Рейтинг: {getRatingNameValue(guitar.rating)}</p>
      <p className="rate__count" style={{marginLeft: '5px'}}><span className="visually-hidden">Всего оценок:</span>{reviewsCount}</p>
      {error && <ErrorMessage error={error} type={TypeRequests.Reviews}/>}
    </div>
  );
}

export default GuitarRatingDetail;
