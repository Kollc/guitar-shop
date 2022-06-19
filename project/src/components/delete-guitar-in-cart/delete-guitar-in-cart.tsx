import { GuitarTypeList } from '../../consts';
import { useAppDispatch } from '../../hooks/hooks';
import { deleteGuitarInCart } from '../../store/cart-process/cart-process';
import { GuitarType, ImagenDataType } from '../../types/types';
import { getImagenData } from '../../utils/utils';

type DeleteGuitarInCartModalProps = {
  guitar: GuitarType,
  open: boolean,
  onClose: () => void,
};

function DeleteGuitarInCartModal({guitar, open, onClose}: DeleteGuitarInCartModalProps): JSX.Element {
  const imagenData: ImagenDataType = getImagenData(guitar.previewImg);
  const dispatch = useAppDispatch();

  const handleButtonDeleteGuitarInCartClick = () => {
    dispatch(deleteGuitarInCart(guitar));
  };

  return (
    <div style={{position: 'relative', width: '550px', height: '440px', marginBottom: '50px', display: open ? 'flex' : 'none', zIndex: 100}}>
      <div className="modal is-active modal-for-ui-kit">
        <div className="modal__wrapper">
          <div className="modal__overlay" data-close-modal onClick={onClose}></div>
          <div className="modal__content">
            <h2 className="modal__header title title--medium title--red">Удалить этот товар?</h2>
            <div className="modal__info">
              <img
                className="modal__img"
                src={`/${imagenData.path}catalog-product-${imagenData.index}.${imagenData.format}`}
                srcSet={`/${imagenData.path}catalog-product-${imagenData.index}@2x.${imagenData.format} 2x`}
                width="67"
                height="137"
                alt="Честер bass"
              />
              <div className="modal__info-wrapper">
                <h3 className="modal__product-name title title--little title--uppercase">{guitar.name}</h3>
                <p className="modal__product-params modal__product-params--margin-11">Артикул: {guitar.vendorCode}</p>
                <p className="modal__product-params">{GuitarTypeList.get(guitar.type)}, {guitar.stringCount} струнная</p>
                <p className="modal__price-wrapper"><span className="modal__price">Цена:</span><span className="modal__price">{guitar.price.toLocaleString()} ₽</span></p>
              </div>
            </div>
            <div className="modal__button-container">
              <button className="button button--small modal__button" onClick={handleButtonDeleteGuitarInCartClick}>Удалить товар</button>
              <button className="button button--black-border button--small modal__button modal__button--right" onClick={onClose}>Продолжить покупки</button>
            </div>
            <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть" onClick={onClose}><span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteGuitarInCartModal;
