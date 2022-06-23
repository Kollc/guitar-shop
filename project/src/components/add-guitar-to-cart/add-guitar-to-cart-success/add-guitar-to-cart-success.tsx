import FocusTrap from 'focus-trap-react';
import { useHistory } from 'react-router-dom';
import { addStyleBodyWithCloseModal } from '../../../utils/utils';

type AddGuitarToCartSuccessProps = {
  open: boolean,
  onClose: () => void,
  onContinueShoping: () => void,
}

function AddGuitarToCartSuccess({open, onClose, onContinueShoping}: AddGuitarToCartSuccessProps): JSX.Element {
  const history = useHistory();

  const handleButtonToCartClick = () => {
    history.push('/cart');
    addStyleBodyWithCloseModal();
  };

  return (
    <FocusTrap active={open}>
      <div style={{
        position: 'fixed',
        width: '550px',
        height: '410px',
        marginBottom: '50px',
        display: open ? 'flex' : 'none',
        zIndex: 100}}
      >
        <div className="modal is-active modal--success modal-for-ui-kit">
          <div className="modal__wrapper">
            <div className="modal__overlay" data-close-modal onClick={onClose}></div>
            <div className="modal__content">
              <svg className="modal__icon" width="26" height="20" aria-hidden="true">
                <use xlinkHref="#icon-success"></use>
              </svg>
              <p className="modal__message">Товар успешно добавлен в корзину</p>
              <div className="modal__button-container modal__button-container--add">
                <button className="button button--small modal__button" onClick={handleButtonToCartClick}>
                  Перейти в корзину
                </button>
                <button
                  className="button button--black-border button--small modal__button modal__button--right"
                  onClick={onContinueShoping}
                >
                  Продолжить покупки
                </button>
              </div>
              <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть" onClick={onClose}>
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

export default AddGuitarToCartSuccess;
