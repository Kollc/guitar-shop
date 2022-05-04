import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGuitarById, getGuitarCommentsById } from '../../../services/api';
import { ReviewType, GuitarType, ImagenDataType } from '../../../types/types';
import { getImagenData } from '../../../utils/utils';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import GuitarRating from '../../cuitar-rating/guitar-rating';
import GuitarReview from '../../guitar-review/guitar-review';
import GuitarTabs from '../../guitar-tabs/guitar-tabs';
import MainLayout from '../../main-layout/main-layout';

function GuitarDetailPage(): JSX.Element {
  const [guitar, setGuitar] = useState<GuitarType | null>(null);
  const [loaded, setLoaded] = useState(false);
  const {id} = useParams<{id?: string}>();
  const [imagenData, setImagenData] = useState<ImagenDataType | null>(null);
  const [reviews, setReviews] = useState<ReviewType[] | null>(null);

  useEffect(() => {
    setLoaded(false);

    getGuitarById(Number(id)).then((data) => {
      if(data) {
        setGuitar(data);
        setLoaded(true);
      }
    });
  }, [id]);

  useEffect(() => {
    setLoaded(false);

    getGuitarCommentsById(Number(id)).then((data) => {
      if(data) {
        setReviews(data);
        setLoaded(true);
      }
    });
  }, [id]);

  useEffect(() => {
    if(guitar !== null) {
      setImagenData(getImagenData(guitar.previewImg));
    }
  }, [guitar]);

  if(!loaded || imagenData === null || guitar === null || reviews === null) {
    return <div>Loading...</div>;
  }

  if(guitar === undefined) {
    return <div> 404 </div>;
  }

  return (
    <MainLayout>
      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">{guitar.name}</h1>
          <Breadcrumbs guitarName={guitar.name}/>
          <div className="product-container">
            <img
              className="product-container__img"
              src={`/${imagenData.path}catalog-product-${imagenData.index}.${imagenData.format}`}
              srcSet={`/${imagenData.path}catalog-product-${imagenData.index}@2x.${imagenData.format} 2x`}
              width="90"
              height="235"
              alt=""
            />
            <div className="product-container__info-wrapper">
              <h2 className="product-container__title title title--big title--uppercase">{guitar.name}</h2>
              <GuitarRating guitar={guitar} countReviews={reviews.length}/>
              <GuitarTabs guitar={guitar}/>
            </div>
            <div className="product-container__price-wrapper">
              <p className="product-container__price-info product-container__price-info--title">Цена:</p>
              <p className="product-container__price-info product-container__price-info--value">{guitar.price} ₽</p>
              <a className="button button--red button--big product-container__button" href="#">Добавить в корзину</a>
            </div>
          </div>
          <GuitarReview  reviews={reviews} guitar={guitar}/>
        </div>
      </main>
    </MainLayout>
  );
}

export default GuitarDetailPage;
