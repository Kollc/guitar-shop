import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { getGuitars, getStatusLoaded } from '../../store/guitars-process/selector';
import LoadingScreen from '../loading-screen/loading-sceen';

function SearchForm(): JSX.Element {
  const allGuitars = useAppSelector(getGuitars);
  const loaded = useAppSelector(getStatusLoaded);
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  if(!loaded) {
    return <LoadingScreen/>;
  }

  return (
    <div className="form-search">
      <form className="form-search__form" id="form-search">
        <button className="form-search__submit" type="submit">
          <svg className="form-search__icon" width="14" height="15" aria-hidden="true">
            <use xlinkHref="#icon-search"></use>
          </svg><span className="visually-hidden">Начать поиск</span>
        </button>
        <input
          className="form-search__input"
          id="search"
          type="text"
          autoComplete="off"
          placeholder="что вы ищите?"
          value={searchQuery}
          onChange={(evt) => setSearchQuery(evt.target.value)}
        />
        <label className="visually-hidden" htmlFor="search">Поиск</label>
      </form>
      <ul className={`form-search__select-list ${!searchQuery && 'hidden'}`}>
        {allGuitars.filter((item) => item.name.includes(searchQuery)).map((guitar) => (<li key={guitar.id} className="form-search__select-item" tabIndex={0} onClick={() => history.push(`/guitar/${guitar.id}`)}>{guitar.name}</li>))}
      </ul>
      <button className="form-search__reset" type="reset" form="form-search">
        <svg className="form-search__icon" width="14" height="15" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg><span className="visually-hidden">Сбросить поиск</span>
      </button>
    </div>
  );
}

export default SearchForm;
