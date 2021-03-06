import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ESCAPE_BUTTON_KEY } from '../../consts';
import { useAppSelector } from '../../hooks/hooks';
import { getGuitarsInCart } from '../../store/cart-process/selector';
import { GuitarType, ImagenDataType } from '../../types/types';
import { addStyleBodyWithCloseModal, addStyleBodyWithOpenModal, getImagenData } from '../../utils/utils';
import AddGuitarToCart from '../add-guitar-to-cart/add-guitar-to-cart';
import AddGuitarToCartSuccess from '../add-guitar-to-cart/add-guitar-to-cart-success/add-guitar-to-cart-success';
import GuitarRatingCard from './guitar-rating-card/guitar-rating-card';

type CardItemProps = {
  guitar: GuitarType,
}

function CardItem({guitar}: CardItemProps): JSX.Element {
  const imagenData: ImagenDataType = getImagenData(guitar.previewImg);
  const guitarsInCart = useAppSelector(getGuitarsInCart);
  const [openModalAddToCart, setOpenModalAddToCart] = useState(false);
  const [openModalAddToCartSuccess, setOpenModalAddToCartSuccess] = useState(false);

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

  const handleClosenModalSuccessAddedClick = () => {
    setOpenModalAddToCartSuccess(false);
    addStyleBodyWithCloseModal();
    document.removeEventListener('keydown', handleEscCloseModalKeydown);
  };

  return (
    <>
      <div className="product-card">
        <img
          src={`/${imagenData.path}catalog-product-${imagenData.index}.${imagenData.format}`}
          srcSet={`/${imagenData.path}catalog-product-${imagenData.index}@2x.${imagenData.format} 2x`}
          width="75"
          height="190"
          alt={guitar.name}
        />

        <div className="product-card__info">
          <GuitarRatingCard guitar={guitar}/>
          <p className="product-card__title">{guitar.name}</p>
          <p className="product-card__price">
            <span className="visually-hidden">????????:</span>{guitar.price.toLocaleString()} ???
          </p>
        </div>
        <div className="product-card__buttons">
          <Link className="button button--mini" to={`/guitar/${guitar.id}`}>
            ??????????????????
          </Link>
          {
            guitarsInCart[guitar.id]
              ?
              <Link className="button button--red-border button--mini button--in-cart" to='/cart'>
                ?? ??????????????
              </Link>
              :
              <button className="button button--red button--mini button--add-to-cart" onClick={handleOpenModalAddToCartClick}>
                ????????????
              </button>
          }
        </div>
      </div>
      <AddGuitarToCart
        onCloseClick={handleCloseModalAddToCartClick}
        open={openModalAddToCart}
        guitar={guitar}
        onSuccessAddedToCart={handleOpenModalSuccessAddedClick}
      />
      <AddGuitarToCartSuccess
        open={openModalAddToCartSuccess}
        onClose={handleClosenModalSuccessAddedClick}
        onContinueShoping={handleClosenModalSuccessAddedClick}
      />
    </>
  );
}

export default CardItem;
