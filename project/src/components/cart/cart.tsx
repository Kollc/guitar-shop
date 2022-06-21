import { GuitarInCart } from '../../types/types';
import CartFooter from './cart-footer/cart-footer';
import CartItem from './cart-item/cart-item';

type CartProps = {
  guitarsInCart: {[id: number]: GuitarInCart},
};

function Cart({guitarsInCart}: CartProps): JSX.Element {
  return (
    <div className="cart">
      {Object.values(guitarsInCart).map((guitarInCart) => <CartItem key={guitarInCart.guitar.id} guitarData={guitarInCart}/>)}
      <CartFooter/>
    </div>
  );
}

export default Cart;
