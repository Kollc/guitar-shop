import { QueryParamsList } from '../../consts';
import { useUpdateUrlWithParams } from '../../hooks/hooks';
import CountStringsFilter from './count-strings-filter/count-strings-filter';
import PriceFilter from './price-filter/price-filter';
import TypeFilter from './type-filter/type-filter';

function Filter(): JSX.Element {
  const {deleteAllUrlParams} = useUpdateUrlWithParams();

  const handleClearFilterButtonClick = () => {
    deleteAllUrlParams([QueryParamsList.Count, QueryParamsList.Type, QueryParamsList.PriceEnd, QueryParamsList.PriceStart]);
  };

  return (
    <form className="catalog-filter">
      <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
      <PriceFilter/>
      <TypeFilter/>
      <CountStringsFilter/>
      <button className="catalog-filter__reset-btn button button--black-border button--medium" type="reset" onClick={handleClearFilterButtonClick}>Очистить</button>
    </form>
  );
}

export default Filter;
