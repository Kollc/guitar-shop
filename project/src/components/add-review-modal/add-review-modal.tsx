import FocusTrap from 'focus-trap-react';
import { GuitarType } from '../../types/types';
import AddReviewForm from './add-review-form/add-review-form';

type AddReviewModalProps = {
  guitar: GuitarType,
  open: boolean,
  onClose: () => void,
  onOpenSuccessAddReview: () => void,
}

function AddReviewModal({guitar, open, onClose, onOpenSuccessAddReview}: AddReviewModalProps): JSX.Element {
  return (
    <FocusTrap active={open}>
      <div style={{position: 'relative', width: '550px', height: '610px', marginBottom: '50px', display: open ? 'flex' : 'none'}}>
        <div data-testid='modal' className={`modal modal--review modal-for-ui-kit ${open && 'is-active'}`}>
          <div className="modal__wrapper">
            <div data-testid='overlay' className="modal__overlay" data-close-modal onClick={onClose}></div>
            <div className="modal__content">
              <h2 className="modal__header modal__header--review title title--medium">Оставить отзыв</h2>
              <h3 className="modal__product-name title title--medium-20 title--uppercase">{guitar.name}</h3>
              <AddReviewForm guitar={guitar} onOpenSuccessAddReview={onOpenSuccessAddReview}/>
              <button data-testid='close' className="modal__close-btn button-cross" type="button" aria-label="Закрыть" onClick={onClose}>
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

export default AddReviewModal;
