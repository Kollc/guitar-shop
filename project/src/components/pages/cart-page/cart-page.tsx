import { useAppSelector } from '../../../hooks/hooks';
import { getGuitarsInCart } from '../../../store/cart-process/selector';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import Cart from '../../cart/cart';
import MainLayout from '../../main-layout/main-layout';
import EmptyCart from './empty-cart/empty-cart';

function CartPage(): JSX.Element {
  const guitarsInCart = useAppSelector(getGuitarsInCart);
  return (
    <div className="wrapper">
      <MainLayout>
        <main className="page-content">
          <div className="container">
            <h1 className="title title--bigger page-content__title" data-testid='cart-title'>Корзина</h1>
            <Breadcrumbs pageName={'Корзина'} addClassName={'age-content__breadcrumbs--on-cart-page'}/>
            {
              Object.values(guitarsInCart).length <= 0
                ?
                <EmptyCart/>
                :
                <Cart guitarsInCart={guitarsInCart}/>
            }
          </div>
        </main>
      </MainLayout>
    </div>
  );
}

export default CartPage;
