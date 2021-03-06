import { useEffect, useState } from 'react';
import { HttpCode, MAX_COUNT_PERCENTS } from '../../../../consts';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { sendOrder } from '../../../../services/api';
import { clearCart } from '../../../../store/cart-process/cart-process';
import { getCartDiscountPercents, getCoupon, getGuitarsInCart } from '../../../../store/cart-process/selector';

function CartTotalPriceForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const shoppingPositions = useAppSelector(getGuitarsInCart);
  const discountPercents = useAppSelector(getCartDiscountPercents);

  const [allPriceValue, setAllPriceValue] = useState(0);
  const [discountValue, setDiscountValue] = useState(0);
  const [resultPrice, setResultPrice] = useState(0);
  const coupon = useAppSelector(getCoupon);

  const handleSendOrderClick = () => {
    const guitarsIds = Object.keys(shoppingPositions).map((id) => Number(id));
    sendOrder({guitarsIds, coupon: coupon || null}).then((res) => {

      if(res === HttpCode.Ok) {
        dispatch(clearCart());
      }
    });
  };

  useEffect(() => {
    let allPrice = 0;

    Object.values(shoppingPositions).forEach((shoppingPosition) => {
      allPrice += shoppingPosition.guitar.price * shoppingPosition.count;
    });

    setAllPriceValue(allPrice);
  }, [shoppingPositions]);

  useEffect(() => {
    const currentDiscountValue = allPriceValue * discountPercents / MAX_COUNT_PERCENTS;
    setDiscountValue(currentDiscountValue);
    setResultPrice(allPriceValue - currentDiscountValue);
  }, [discountPercents, allPriceValue]);

  return (
    <div className="cart__total-info">
      <p className="cart__total-item">
        <span className="cart__total-value-name">Всего:</span>
        <span className="cart__total-value">{allPriceValue.toLocaleString()} ₽</span>
      </p>
      <p className="cart__total-item">
        <span className="cart__total-value-name">Скидка:</span>
        <span className={`cart__total-value ${discountValue > 0 && 'cart__total-value--bonus'}`}>
          {discountValue > 0 ? `- ${discountValue.toLocaleString()} ₽` : `${discountValue.toLocaleString()} ₽`}
        </span>
      </p>
      <p className="cart__total-item">
        <span className="cart__total-value-name">К оплате:</span>
        <span className="cart__total-value cart__total-value--payment">{resultPrice.toLocaleString()} ₽</span>
      </p>
      <button className="button button--red button--big cart__order-button" onClick={handleSendOrderClick}>Оформить заказ</button>
    </div>
  );
}

export default CartTotalPriceForm;
