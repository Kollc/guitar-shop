import { ChangeEvent, useState } from 'react';
import { ESCAPE_BUTTON_KEY, GuitarTypeList, MIN_GUITAR_COUNT_IN_CART } from '../../../consts';
import { useAppDispatch } from '../../../hooks/hooks';
import { decreaseProductCount, increaseProductCount, setCountGuitarInCart } from '../../../store/cart-process/cart-process';
import { GuitarInCart, ImagenDataType } from '../../../types/types';
import { getImagenData } from '../../../utils/utils';
import DeleteGuitarInCartModal from '../../delete-guitar-in-cart/delete-guitar-in-cart';

type CartItemProps = {
  guitarData: GuitarInCart,
}

function CartItem({guitarData}: CartItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {count, guitar} = guitarData;
  const imagenData: ImagenDataType = getImagenData(guitar.previewImg);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleInputCountGuitarsChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const newGuitarData = {...guitarData};

    if(Number(evt.target.value) > 0) {
      newGuitarData.count = Number(evt.target.value);
      dispatch(setCountGuitarInCart(newGuitarData));
    } else {
      newGuitarData.count = MIN_GUITAR_COUNT_IN_CART;
      dispatch(setCountGuitarInCart(newGuitarData));
    }
  };

  const handleKeydownEscCloseModal = (evt: KeyboardEvent): void => {
    if(evt.key === ESCAPE_BUTTON_KEY) {
      setOpenDeleteModal(false);
    }
  };

  const handleDeleteModalOpenClick = () => {
    setOpenDeleteModal(true);
    document.addEventListener('keydown', handleKeydownEscCloseModal);
  };

  const handleDeleteModalCloseClick = () => {
    setOpenDeleteModal(false);
    document.removeEventListener('keydown', handleKeydownEscCloseModal);
  };

  const handleDecreaseCountButtonClick = () => {
    if(count <= MIN_GUITAR_COUNT_IN_CART) {
      setOpenDeleteModal(true);
      document.addEventListener('keydown', handleKeydownEscCloseModal);
    } else {
      dispatch(decreaseProductCount(guitar));
    }
  };

  const handleIncreaseCountButtonClick = () => {
    dispatch(increaseProductCount(guitar));
  };

  return (
    <>
      <div className="cart-item">
        <button className="cart-item__close-button button-cross" type="button" aria-label="Удалить" onClick={handleDeleteModalOpenClick}>
          <span className="button-cross__icon"></span>
          <span className="cart-item__close-button-interactive-area"></span>
        </button>
        <div className="cart-item__image">
          <img
            src={`/${imagenData.path}catalog-product-${imagenData.index}.${imagenData.format}`}
            srcSet={`/${imagenData.path}catalog-product-${imagenData.index}@2x.${imagenData.format} 2x`}
            width="55"
            height="130"
            alt="ЭлектроГитара Честер bass"
          />
        </div>
        <div className="product-info cart-item__info">
          <p className="product-info__title">{guitar.name}</p>
          <p className="product-info__info">Артикул: {guitar.vendorCode}</p>
          <p className="product-info__info">{GuitarTypeList.get(guitar.type)}, {guitar.stringCount} струнная</p>
        </div>
        <div className="cart-item__price">{guitar.price.toLocaleString()} ₽</div>
        <div className="quantity cart-item__quantity">
          <button className="quantity__button" aria-label="Уменьшить количество" onClick={handleDecreaseCountButtonClick}>
            <svg width="8" height="8" aria-hidden="true">
              <use xlinkHref="#icon-minus"></use>
            </svg>
          </button>
          <input
            className="quantity__input"
            type="number"
            placeholder={String(count)}
            id={`${count}-count`}
            name={`${count}-count`}
            min="1"
            max="99"
            value={count}
            onChange={handleInputCountGuitarsChange}
          />
          <button className="quantity__button" aria-label="Увеличить количество" onClick={handleIncreaseCountButtonClick}>
            <svg width="8" height="8" aria-hidden="true">
              <use xlinkHref="#icon-plus"></use>
            </svg>
          </button>
        </div>
        <div className="cart-item__price-total">{(guitar.price * count).toLocaleString()} ₽</div>
      </div>
      <DeleteGuitarInCartModal open={openDeleteModal} onClose={handleDeleteModalCloseClick} guitar={guitar}/>
    </>
  );
}

export default CartItem;
