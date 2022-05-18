import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TypeRequests } from '../../consts';
import { getAllGuitars } from '../../services/api';
import { GuitarType } from '../../types/types';
import ErrorMessage from '../error-message/error-message';
import LoadingScreen from '../loading-screen/loading-sceen';

function Header(): JSX.Element {
  const [guitars, setGuitars] = useState<GuitarType[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllGuitars(setError).then((data) => {
      if(data) {
        setGuitars(data);
        setLoaded(true);
      }
    });
  }, []);

  if(!loaded) {
    return <LoadingScreen/>;
  }

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
        <div className="form-search">
          <form className="form-search__form" id="form-search">
            <button className="form-search__submit" type="submit">
              <svg className="form-search__icon" width="14" height="15" aria-hidden="true">
                <use xlinkHref="#icon-search"></use>
              </svg><span className="visually-hidden">Начать поиск</span>
            </button>
            <input className="form-search__input" id="search" type="text" autoComplete="off" placeholder="что вы ищите?"/>
            <label className="visually-hidden" htmlFor="search">Поиск</label>
          </form>
          <ul className="form-search__select-list hidden">
            {guitars.map((guitar) => (<li key={guitar.id} className="form-search__select-item" tabIndex={0}>{guitar.name}</li>))}
          </ul>
          <button className="form-search__reset" type="reset" form="form-search">
            <svg className="form-search__icon" width="14" height="15" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg><span className="visually-hidden">Сбросить поиск</span>
          </button>
        </div>
        <a className="header__cart-link" href="#" aria-label="Корзина">
          <svg className="header__cart-icon" width="14" height="14" aria-hidden="true">
            <use xlinkHref="#icon-basket"></use>
          </svg><span className="visually-hidden">Перейти в корзину</span><span className="header__cart-count">2</span>
        </a>
      </div>
      {error && <ErrorMessage type={TypeRequests.Guitars} error={error}/>}
    </header>
  );
}

export default Header;
