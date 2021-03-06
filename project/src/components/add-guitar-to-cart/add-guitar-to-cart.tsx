import FocusTrap from 'focus-trap-react';
import { GuitarTypeDictionary } from '../../consts';
import { useAppDispatch } from '../../hooks/hooks';
import { setGuitarInCart } from '../../store/cart-process/cart-process';
import { GuitarType } from '../../types/types';
import { getImagenData } from '../../utils/utils';

type AddGuitarToCartProps = {
  onCloseClick: () => void,
  open:  boolean,
  guitar: GuitarType,
  onSuccessAddedToCart: () => void,
}

function AddGuitarToCart({open, guitar, onCloseClick, onSuccessAddedToCart}: AddGuitarToCartProps): JSX.Element {
  const dispatch = useAppDispatch();
  const imagenData = getImagenData(guitar.previewImg);

  const handleAddCartClick = () => {
    dispatch(setGuitarInCart(guitar));
    onCloseClick();
    onSuccessAddedToCart();
  };

  return (
    <FocusTrap active={open}>
      <div tabIndex={1} style={{
        position: 'fixed',
        width: '550px',
        height: '440px',
        marginBottom: '50px',
        display: open ? 'flex' : 'none',
        zIndex: 100}}
      >
        <div className="modal is-active modal-for-ui-kit">
          <div className="modal__wrapper">
            <div className="modal__overlay" data-close-modal onClick={onCloseClick}></div>
            <div className="modal__content">
              <h2 className="modal__header title title--medium">Добавить товар в корзину</h2>
              <div className="modal__info">
                <img className="modal__img"
                  src={`/${imagenData.path}catalog-product-${imagenData.index}.${imagenData.format}`}
                  srcSet={`/${imagenData.path}catalog-product-${imagenData.index}@2x.${imagenData.format} 2x`}
                  width="67"
                  height="137"
                  alt="Честер bass"
                />
                <div className="modal__info-wrapper">
                  <h3 className="modal__product-name title title--little title--uppercase">{guitar.name}</h3>
                  <p className="modal__product-params modal__product-params--margin-11">Артикул: {guitar.vendorCode}</p>
                  <p className="modal__product-params">{GuitarTypeDictionary.get(guitar.type)}, {guitar.stringCount} струнная</p>
                  <p className="modal__price-wrapper">
                    <span className="modal__price">Цена:</span>
                    <span className="modal__price">{guitar.price.toLocaleString()} ₽</span>
                  </p>
                </div>
              </div>
              <div className="modal__button-container">
                <button
                  className="button button--red button--big modal__button modal__button--add"
                  onClick={handleAddCartClick}
                >
                    Добавить в корзину
                </button>
              </div>
              <button
                className="modal__close-btn button-cross"
                type="button"
                aria-label="Закрыть"
                aria-labelledby="close-modal"
                onClick={onCloseClick}
              >
                <span className="button-cross__icon"></span>
                <span className="modal__close-btn-interactive-area"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </FocusTrap>
  );
}

export default AddGuitarToCart;
