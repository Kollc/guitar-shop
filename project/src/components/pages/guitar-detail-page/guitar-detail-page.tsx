import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ESCAPE_BUTTON_KEY, TypeRequests } from '../../../consts';
import { ImagenDataType } from '../../../types/types';
import { addStyleBodyWithCloseModal, addStyleBodyWithOpenModal, getImagenData } from '../../../utils/utils';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import ErrorMessage from '../../error-message/error-message';
import GuitarReview from '../../guitar-review/guitar-review';
import GuitarTabs from '../../guitar-tabs/guitar-tabs';
import MainLayout from '../../main-layout/main-layout';
import ErrorPage from '../error-page/error-page';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { fetchGuitarByIdAction, fetchReviewsGuitarByIdAction } from '../../../store/actions/api-actions';
import { useSelector } from 'react-redux';
import { getGuitarDetail, getStatusLoadedGuitarDetail, getErrorGuitarDetail } from '../../../store/guitar-detail-process/selector';
import LoadingScreen from '../../loading-screen/loading-sceen';
import { getDetailReviews } from '../../../store/reviews-process/selector';
import GuitarRatingDetail from './guitar-rating-detail/guitar-rating-detail';
import AddGuitarToCart from '../../add-guitar-to-cart/add-guitar-to-cart';
import AddGuitarToCartSuccess from '../../add-guitar-to-cart/add-guitar-to-cart-success/add-guitar-to-cart-success';

function GuitarDetailPage(): JSX.Element {
  const {id} = useParams<{id?: string}>();
  const [imagenData, setImagenData] = useState<ImagenDataType | null>(null);
  const dispatch = useAppDispatch();
  const guitar = useSelector(getGuitarDetail);
  const loaded = useSelector(getStatusLoadedGuitarDetail);
  const error = useSelector(getErrorGuitarDetail);
  const reviews = useAppSelector(getDetailReviews);
  const [openModalAddToCart, setOpenModalAddToCart] = useState(false);
  const [openModalAddToCartSuccess, setOpenModalAddToCartSuccess] = useState(false);
  const history = useHistory();

  const handleEscCloseModalKeydown = (evt: KeyboardEvent): void => {
    if(evt.key === ESCAPE_BUTTON_KEY) {
      setOpenModalAddToCart(false);
      setOpenModalAddToCartSuccess(false);
    }
  };

  const handleOpenModalAddToCartClick = () => {
    setOpenModalAddToCart(true);
    addStyleBodyWithOpenModal();
    document.addEventListener('keydown', handleEscCloseModalKeydown);
  };

  const handleCloseModalAddToCartClick = () => {
    setOpenModalAddToCart(false);
    addStyleBodyWithCloseModal();
    document.removeEventListener('keydown', handleEscCloseModalKeydown);
  };

  const handleOpenModalSuccessAddedClick = () => {
    setOpenModalAddToCartSuccess(true);
    addStyleBodyWithOpenModal();
    document.addEventListener('keydown', handleEscCloseModalKeydown);
  };

  const handleCloseModalSuccessAddedClick = () => {
    setOpenModalAddToCartSuccess(false);
    addStyleBodyWithCloseModal();
    document.removeEventListener('keydown', handleEscCloseModalKeydown);
  };

  const handleСontinueShoppingClick = () => {
    setOpenModalAddToCartSuccess(false);
    addStyleBodyWithCloseModal();
    document.removeEventListener('keydown', handleEscCloseModalKeydown);
    history.push('/');
  };

  useEffect(() => {
    dispatch(fetchReviewsGuitarByIdAction(Number(id)));
    dispatch(fetchGuitarByIdAction(Number(id)));
  }, [id]);

  useEffect(() => {
    if(guitar) {
      setImagenData(getImagenData(guitar.previewImg));
    }
  }, [guitar]);

  if(!loaded || imagenData === null || guitar === null || !reviews) {
    return <LoadingScreen/>;
  }

  if(guitar === undefined) {
    return <ErrorPage/>;
  }

  return (
    <MainLayout>
      <main className="page-content">
        <div className="container">
          <h1 data-testid='guitar-title-detail' className="page-content__title title title--bigger">{guitar.name}</h1>
          <Breadcrumbs pageName={guitar.name}/>
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
              <GuitarRatingDetail guitar={guitar} reviewsCount={reviews.length}/>
              <GuitarTabs guitar={guitar}/>
            </div>
            <div className="product-container__price-wrapper">
              <p className="product-container__price-info product-container__price-info--title">Цена:</p>
              <p className="product-container__price-info product-container__price-info--value">{guitar.price.toLocaleString()} ₽</p>
              <a className="button button--red button--big product-container__button" href="#" onClick={handleOpenModalAddToCartClick}>Добавить в корзину</a>
            </div>
          </div>
          <GuitarReview guitar={guitar} reviews={reviews}/>
        </div>
        {error && <ErrorMessage error={error} type={TypeRequests.Guitars}/>}
        <AddGuitarToCart onCloseClick={handleCloseModalAddToCartClick} open={openModalAddToCart} guitar={guitar} onSuccessAddedToCart={handleOpenModalSuccessAddedClick}/>
        <AddGuitarToCartSuccess open={openModalAddToCartSuccess} onClose={handleCloseModalSuccessAddedClick} onContinueShoping={handleСontinueShoppingClick}/>
      </main>
    </MainLayout>
  );
}

export default GuitarDetailPage;
