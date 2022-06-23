import { GuitarInCart } from '../../../types/types';
import CartItem from '../cart-item/cart-item';

type CartListProps = {
  guitarsInCart: {[id: number]: GuitarInCart}
}

function CartList({guitarsInCart}: CartListProps): JSX.Element {
  return (
    <>
      {Object.values(guitarsInCart).map((guitarInCart) => <CartItem key={guitarInCart.guitar.id} shoppingPosition={guitarInCart}/>)}
    </>
  );
}

export default CartList;
