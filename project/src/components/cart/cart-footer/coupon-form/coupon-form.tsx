import { ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { postPromocodeDiscrountAction } from '../../../../store/actions/api-actions';
import { setCoupon } from '../../../../store/cart-process/cart-process';
import { getCartErrorMessage, getCartLoadedStatus, getCoupon } from '../../../../store/cart-process/selector';
import CouponMessage from '../coupon-message/coupon-message';


function CouponForm(): JSX.Element {
  const isLoaded = useAppSelector(getCartLoadedStatus);
  const dispatch = useAppDispatch();
  const error = useAppSelector(getCartErrorMessage);
  const coupon = useAppSelector(getCoupon);

  const handleCouponFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if(coupon) {
      dispatch(postPromocodeDiscrountAction({coupon}));
    }
  };

  const handleCouponInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch((setCoupon(evt.target.value.replace(/\s/g, ''))));
  };

  return (
    <div className="cart__coupon coupon">
      <h2 className="title title--little coupon__title">Промокод на скидку</h2>
      <p className="coupon__info">Введите свой промокод, если он у вас есть.</p>
      <form className="coupon__form" id="coupon-form" method="post" action="/" onSubmit={handleCouponFormSubmit}>
        <div className="form-input coupon__input">
          <label className="visually-hidden">Промокод</label>
          <input type="text" placeholder="Введите промокод" id="coupon" name="coupon" value={coupon.replace(/\s/g, '')} onChange={handleCouponInputChange} required/>
          <CouponMessage isLoaded={isLoaded} error={error}/>
        </div>
        <button className="button button--big coupon__button">Применить</button>
      </form>
    </div>
  );
}

export default CouponForm;
