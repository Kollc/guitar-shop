import { GuitarType, ImagenDataType } from '../../types/types';
import { getImagenData } from '../../utils/utils';

type CardItemProps = {
  guitar: GuitarType,
}

function CardItem({guitar}: CardItemProps): JSX.Element {
  const imagenData: ImagenDataType = getImagenData(guitar.previewImg);

  return (
    <div className="product-card">
      <img
        src={`${imagenData.path}catalog-product-${imagenData.index}.${imagenData.format}`}
        srcSet={`${imagenData.path}catalog-product-${imagenData.index}@2x.${imagenData.format} 2x`}
        width="75"
        height="190"
        alt={guitar.name}
      />

      <div className="product-card__info">
        <div className="rate product-card__rate">
          <svg width="12" height="11" aria-hidden="true">
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          <svg width="12" height="11" aria-hidden="true">
            <use xlinkHref="#icon-star"></use>
          </svg>
          <p className="visually-hidden">Рейтинг: Хорошо</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>9</p>
        </div>
        <p className="product-card__title">{guitar.name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{guitar.price} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <a className="button button--mini" href="#">
          Подробнее
        </a>
        <a className="button button--red button--mini button--add-to-cart" href="#">
          Купить
        </a>
      </div>
    </div>
  );
}

export default CardItem;
