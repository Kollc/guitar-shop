import { useHistory } from 'react-router-dom';
import { useQuery } from '../../hooks/hooks';
import { OrderTypes, SortTypes } from '../../types/types';

function Sort(): JSX.Element {
  const history = useHistory();
  const queryParams = useQuery();

  const handlePriceSortClick = () => {
    if(queryParams.get('order')) {
      history.push(`?sort=${SortTypes.Price}&order=${queryParams.get('order')}`);
    } else {
      history.push(`?sort=${SortTypes.Price}&order=${OrderTypes.Asc}`);
    }
  };

  const handleRatingSortClick = () => {
    if(queryParams.get('order')) {
      history.push(`?sort=${SortTypes.Rating}&order=${queryParams.get('order')}`);
    } else {
      history.push(`?sort=${SortTypes.Rating}&order=${OrderTypes.Asc}`);
    }
  };

  const handleAscOrderClick = () => {
    if(queryParams.get('sort')) {
      history.push(`?sort=${queryParams.get('sort')}&order=${OrderTypes.Asc}`);
    } else {
      history.push(`?sort=${SortTypes.Price}&order=${OrderTypes.Asc}`);
    }
  };

  const handleDescOrderClick = () => {
    if(queryParams.get('sort')) {
      history.push(`?sort=${queryParams.get('sort')}&order=${OrderTypes.Desc}`);
    } else {
      history.push(`?sort=${SortTypes.Price}&order=${OrderTypes.Desc}`);
    }
  };

  return (
    <div className="catalog-sort">
      <h2 className="catalog-sort__title">Сортировать:</h2>
      <div className="catalog-sort__type">
        <button className={`catalog-sort__type-button ${queryParams.get('sort') === SortTypes.Price && 'catalog-sort__type-button--active'}`} aria-label="по цене" onClick={handlePriceSortClick}>по цене</button>
        <button className={`catalog-sort__type-button ${queryParams.get('sort') === SortTypes.Rating && 'catalog-sort__type-button--active'}`} aria-label="по популярности" onClick={handleRatingSortClick}>по популярности</button>
      </div>
      <div className="catalog-sort__order">
        <button className={`catalog-sort__order-button catalog-sort__order-button--up ${queryParams.get('order') === OrderTypes.Asc && 'catalog-sort__order-button--active'}`} aria-label="По возрастанию" onClick={handleAscOrderClick}></button>
        <button className={`catalog-sort__order-button catalog-sort__order-button--down ${queryParams.get('order') === OrderTypes.Desc && 'catalog-sort__order-button--active'}`} aria-label="По убыванию" onClick={handleDescOrderClick}></button>
      </div>
    </div>
  );
}

export default Sort;
