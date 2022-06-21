import { Link } from 'react-router-dom';

type AddGuitarToCartSuccessProps = {
  open: boolean,
  onClose: () => void,
  isDetailPage?: boolean,
}

function AddGuitarToCartSuccess({open, onClose, isDetailPage = false}: AddGuitarToCartSuccessProps): JSX.Element {
  return (
    <div style={{position: 'fixed', width: '550px', height: '410px', marginBottom: '50px', display: open ? 'flex' : 'none', zIndex: 100}}>
      <div className="modal is-active modal--success modal-for-ui-kit">
        <div className="modal__wrapper">
          <div className="modal__overlay" data-close-modal onClick={onClose}></div>
          <div className="modal__content">
            <svg className="modal__icon" width="26" height="20" aria-hidden="true">
              <use xlinkHref="#icon-success"></use>
            </svg>
            <p className="modal__message">Товар успешно добавлен в корзину</p>
            <div className="modal__button-container modal__button-container--add">
              <Link className="button button--small modal__button" to='/cart'>Перейти в корзину</Link>
              <button className="button button--black-border button--small modal__button modal__button--right" onClick={onClose}>Продолжить покупки</button>
            </div>
            <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть" onClick={onClose}>
              <span className="button-cross__icon"></span>
              <span className="modal__close-btn-interactive-area"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddGuitarToCartSuccess;
