import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getGuitarCommentsById } from '../../services/api';
import { ReviewType, GuitarType, ImagenDataType } from '../../types/types';
import { getImagenData } from '../../utils/utils';
import GuitarRating from '../cuitar-rating/guitar-rating';

type CardItemProps = {
  guitar: GuitarType,
}

function CardItem({guitar}: CardItemProps): JSX.Element {
  const imagenData: ImagenDataType = getImagenData(guitar.previewImg);
  const [loaded, setLoaded] = useState(false);
  const [reviews, setReviews] = useState<ReviewType[] | null>(null);

  useEffect(() => {
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
    <div className="product-card">
      <img
        src={`/${imagenData.path}catalog-product-${imagenData.index}.${imagenData.format}`}
        srcSet={`/${imagenData.path}catalog-product-${imagenData.index}@2x.${imagenData.format} 2x`}
        width="75"
        height="190"
        alt={guitar.name}
      />

      <div className="product-card__info">
        <GuitarRating guitar={guitar} countReviews={reviews.length}/>
        <p className="product-card__title">{guitar.name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{guitar.price} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <Link className="button button--mini" to={`/catalog/${guitar.id}`}>
          Подробнее
        </Link>
        <a className="button button--red button--mini button--add-to-cart" href="#">
          Купить
        </a>
      </div>
    </div>
  );
}

export default CardItem;
