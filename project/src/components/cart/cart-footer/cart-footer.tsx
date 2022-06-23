import CartTotalPriceForm from './cart-total-price-form/cart-total-price-form';
import CouponForm from './coupon-form/coupon-form';

function CartFooter(): JSX.Element {
  return (
    <div className="cart__footer" data-testid='cart-footer'>
      <CouponForm/>
      <CartTotalPriceForm/>
    </div>
  );
}

export default CartFooter;
