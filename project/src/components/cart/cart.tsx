import { useAppSelector } from '../../hooks/hooks';
import { getGuitarsInCart } from '../../store/cart-process/selector';
import CartFooter from './cart-footer/cart-footer';
import CartItem from './cart-item/cart-item';

function Cart(): JSX.Element {
  const guitarsInCart = useAppSelector(getGuitarsInCart);

  return (
    <div className="cart">
      {Object.values(guitarsInCart).map((guitarInCart) => <CartItem key={guitarInCart.guitar.id} guitarData={guitarInCart}/>)}
      <CartFooter/>
    </div>
  );
}

export default Cart;
