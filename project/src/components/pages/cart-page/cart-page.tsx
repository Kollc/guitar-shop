import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import Cart from '../../cart/cart';
import Footer from '../../footer/footer';
import Header from '../../header/header';

function CartPage(): JSX.Element {
  return (
    <div className="wrapper">
      <Header/>
      <main className="page-content">
        <div className="container">
          <h1 className="title title--bigger page-content__title">Корзина</h1>
          <Breadcrumbs pageName={'Корзина'} addClassName={'age-content__breadcrumbs--on-cart-page'}/>
          <Cart/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default CartPage;
