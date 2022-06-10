import { QueryParamsList } from '../../consts';
import { useUpdateUrlWithParams } from '../../hooks/hooks';
import { OrderTypes, SortTypes } from '../../types/types';

function Sort(): JSX.Element {
  const {queryParams, updateUrlWithParams} = useUpdateUrlWithParams();

  const handlePriceSortClick = () => {
    if(queryParams.has(QueryParamsList.Sort)) {
      updateUrlWithParams(QueryParamsList.Sort, SortTypes.Price);
    } else {
      updateUrlWithParams(QueryParamsList.Sort, SortTypes.Price);
      updateUrlWithParams(QueryParamsList.Order, OrderTypes.Asc);
    }
  };

  const handleRatingSortClick = () => {
    if(queryParams.has(QueryParamsList.Order)) {
      updateUrlWithParams(QueryParamsList.Sort, SortTypes.Rating);
    } else {
      updateUrlWithParams(QueryParamsList.Sort, SortTypes.Rating);
      updateUrlWithParams(QueryParamsList.Order, OrderTypes.Asc);
    }
  };

  const handleAscOrderClick = () => {
    if(queryParams.has(QueryParamsList.Sort)) {
      updateUrlWithParams(QueryParamsList.Order, OrderTypes.Asc);
    } else {
      updateUrlWithParams(QueryParamsList.Sort, SortTypes.Price);
      updateUrlWithParams(QueryParamsList.Order, OrderTypes.Asc);
    }
  };

  const handleDescOrderClick = () => {
    if(queryParams.has(QueryParamsList.Sort)) {
      updateUrlWithParams(QueryParamsList.Order, OrderTypes.Desc);
    } else {
      updateUrlWithParams(QueryParamsList.Sort, SortTypes.Price);
      updateUrlWithParams(QueryParamsList.Order, OrderTypes.Desc);
    }
  };

  return (
    <div className="catalog-sort">
      <h2 className="catalog-sort__title">Сортировать:</h2>
      <div className="catalog-sort__type">
        <button className={`catalog-sort__type-button ${queryParams.get(QueryParamsList.Sort) === SortTypes.Price && 'catalog-sort__type-button--active'}`} aria-label="по цене" onClick={handlePriceSortClick}>по цене</button>
        <button className={`catalog-sort__type-button ${queryParams.get(QueryParamsList.Sort) === SortTypes.Rating && 'catalog-sort__type-button--active'}`} aria-label="по популярности" onClick={handleRatingSortClick}>по популярности</button>
      </div>
      <div className="catalog-sort__order">
        <button className={`catalog-sort__order-button catalog-sort__order-button--up ${queryParams.get(QueryParamsList.Order) === OrderTypes.Asc && 'catalog-sort__order-button--active'}`} aria-label="По возрастанию" onClick={handleAscOrderClick}></button>
        <button className={`catalog-sort__order-button catalog-sort__order-button--down ${queryParams.get(QueryParamsList.Order) === OrderTypes.Desc && 'catalog-sort__order-button--active'}`} aria-label="По убыванию" onClick={handleDescOrderClick}></button>
      </div>
    </div>
  );
}

export default Sort;
