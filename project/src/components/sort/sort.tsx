import { useUpdateUrlWithParams } from '../../hooks/hooks';
import { OrderTypes, SortTypes } from '../../types/types';

function Sort(): JSX.Element {
  const {queryParams, updateUrlWithParams} = useUpdateUrlWithParams();

  const handlePriceSortClick = () => {
    if(queryParams.has('order')) {
      updateUrlWithParams('sort', SortTypes.Price);
    } else {
      updateUrlWithParams('sort', SortTypes.Price);
      updateUrlWithParams('order', OrderTypes.Asc);
    }
  };

  const handleRatingSortClick = () => {
    if(queryParams.has('order')) {
      updateUrlWithParams('sort', SortTypes.Rating);
    } else {
      updateUrlWithParams('sort', SortTypes.Rating);
      updateUrlWithParams('order', OrderTypes.Asc);
    }
  };

  const handleAscOrderClick = () => {
    if(queryParams.has('sort')) {
      updateUrlWithParams('order', OrderTypes.Asc);
    } else {
      updateUrlWithParams('sort', SortTypes.Price);
      updateUrlWithParams('order', OrderTypes.Asc);
    }
  };

  const handleDescOrderClick = () => {
    if(queryParams.has('sort')) {
      updateUrlWithParams('order', OrderTypes.Desc);
    } else {
      updateUrlWithParams('sort', SortTypes.Price);
      updateUrlWithParams('order', OrderTypes.Desc);
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
