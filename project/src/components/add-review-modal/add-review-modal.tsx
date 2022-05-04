import { GuitarType } from '../../types/types';
import AddReviewForm from './add-review-form/add-review-from';

type AddReviewModalProps = {
  guitar: GuitarType,
  open: boolean,
  onOpen: (value: boolean) => void,
}

function AddReviewModal({guitar, open, onOpen}: AddReviewModalProps): JSX.Element {
  return (
    <div style={{position: 'relative', width: '550px', height: '610px', marginBottom: '50px'}}>
      <div className={`modal modal--review modal-for-ui-kit ${open && 'is-active'}`}>
        <div className="modal__wrapper">
          <div className="modal__overlay" data-close-modal onClick={() => onOpen(false)}></div>
          <div className="modal__content">
            <h2 className="modal__header modal__header--review title title--medium">Оставить отзыв</h2>
            <h3 className="modal__product-name title title--medium-20 title--uppercase">{guitar.name}</h3>
            <AddReviewForm guitar={guitar}/>
            <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть" onClick={() => onOpen(false)}>
              <span className="button-cross__icon"></span>
              <span className="modal__close-btn-interactive-area"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddReviewModal;
