import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { getGuitarsInCart } from '../../store/cart-process/selector';
import SearchForm from '../search-form/search-from';

function Header(): JSX.Element {
  const guitarsInCart = useAppSelector(getGuitarsInCart);
  const [countGuitarsInCart, setCountGuitarsInCart] = useState(0);

  useEffect(() => {
    let count = 0;
    Object.values(guitarsInCart).forEach((guitarInCart) => {
      count += guitarInCart.count;
    });

    setCountGuitarsInCart(count);
  }, [guitarsInCart]);

  return (
    <header className="header" id="header">
      <div className="container header__wrapper">
        <a className="header__logo logo">
          <img className="logo__img" width="70" height="70" src="/img/svg/logo.svg" alt="Логотип"/>
        </a>
        <nav className="main-nav">
          <ul className="main-nav__list">
            <li>
              <Link className="link main-nav__link link--current" to='/catalog'>Каталог</Link>
            </li>
            <li>
              <Link className="link main-nav__link" to="">Где купить?</Link>
            </li>
            <li>
              <Link className="link main-nav__link" to="">О компании</Link>
            </li>
          </ul>
        </nav>
        <SearchForm/>
        <Link className="header__cart-link" to="/cart" aria-label="Корзина">
          <svg className="header__cart-icon" width="14" height="14" aria-hidden="true">
            <use xlinkHref="#icon-basket"></use>
          </svg>
          <span className="visually-hidden">Перейти в корзину</span>
          {countGuitarsInCart > 0 && <span className="header__cart-count">{countGuitarsInCart}</span>}
        </Link>
      </div>
    </header>
  );
}

export default Header;
