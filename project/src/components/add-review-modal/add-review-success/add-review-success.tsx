type AddReviewSuccessProps = {
  open: boolean,
  onClose: () => void,
}

function AddReviewSuccess({open, onClose}: AddReviewSuccessProps ): JSX.Element {
  return (
    <div style={{position: 'relative', width: '550px', height: '410px', marginBottom: '50px', display: open ? 'flex' : 'none'}}>
      <div className={`modal modal--success modal-for-ui-kit ${open && 'is-active'}`}>
        <div className="modal__wrapper">
          <div data-testid='overlay'  className="modal__overlay" data-close-modal onClick={onClose}></div>
          <div className="modal__content">
            <svg className="modal__icon" width="26" height="20" aria-hidden="true">
              <use xlinkHref="#icon-success"></use>
            </svg>
            <p className="modal__message">Спасибо за ваш отзыв!</p>
            <div className="modal__button-container modal__button-container--review">
              <button data-testid='to-another-buy' className="button button--small modal__button modal__button--review" onClick={onClose}>К покупкам!</button>
            </div>
            <button data-testid='close' className="modal__close-btn button-cross" type="button" aria-label="Закрыть" onClick={onClose}>
              <span className="button-cross__icon"></span>
              <span className="modal__close-btn-interactive-area"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddReviewSuccess;
