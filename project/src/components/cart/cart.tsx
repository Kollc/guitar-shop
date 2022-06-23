import { GuitarInCart } from '../../types/types';
import CartFooter from './cart-footer/cart-footer';
import CartList from './cart-list/cart-list';

type CartProps = {
  guitarsInCart: {[id: number]: GuitarInCart},
};

function Cart({guitarsInCart}: CartProps): JSX.Element {
  return (
    <div className="cart" data-testid='cart'>
      <CartList guitarsInCart={guitarsInCart}/>
      <CartFooter/>
    </div>
  );
}

export default Cart;
