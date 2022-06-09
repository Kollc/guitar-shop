import { ChangeEvent, useEffect, useState } from 'react';
import { QueryParamsList } from '../../../consts';
import { useAppSelector, useUpdateUrlWithParams } from '../../../hooks/hooks';
import { getGuitars } from '../../../store/guitars-process/selector';
import { getMaxGuitarsPrice, getMinGuitarsPrice } from '../../../utils/utils';

function PriceFilter(): JSX.Element {
  const allGuitars = useAppSelector(getGuitars);

  const [minPriceInGuitars, setMinPriceInGuitars] = useState(0);
  const [maxPriceInGuitars, setMaxPriceInGuitars] = useState(0);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const {updateUrlWithParams} = useUpdateUrlWithParams();

  useEffect(() => {
    const guitarsMinPrice = getMinGuitarsPrice(allGuitars);
    const guitarMaxPrice = getMaxGuitarsPrice(allGuitars);

    setMinPrice(guitarsMinPrice);
    setMaxPrice(guitarMaxPrice);

    setMinPriceInGuitars(guitarsMinPrice);
    setMaxPriceInGuitars(guitarMaxPrice);
  }, []);

  const handleMinPriceFilterChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const minPriceValue = Number(evt.target.value);

    if(minPriceValue >= 0) {
      setMinPrice(minPriceValue);
    }
  };

  const handleMinPriceFilterBlur = () => {
    if(minPrice < minPriceInGuitars) {
      setMinPrice(minPriceInGuitars);
      updateUrlWithParams(QueryParamsList.PriceStart, String(minPriceInGuitars));
    } else {
      updateUrlWithParams(QueryParamsList.PriceStart, String(minPrice));
    }

    updateUrlWithParams(QueryParamsList.PriceEnd, String(maxPrice));
  };

  const handleMaxPriceFilterChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const maxPriceValue = Number(evt.target.value);

    if(maxPriceValue >= 0) {
      setMaxPrice(maxPriceValue);
    }
  };

  const handleMaxPriceFilterBlur = () => {
    if(maxPrice <= minPrice && maxPrice >= maxPriceInGuitars) {
      setMaxPrice(maxPriceInGuitars);
      updateUrlWithParams(QueryParamsList.PriceEnd, String(maxPriceInGuitars));
    } else {
      updateUrlWithParams(QueryParamsList.PriceEnd, String(maxPrice));
    }

    updateUrlWithParams(QueryParamsList.PriceStart, String(minPrice));
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="form-input">
          <label className="visually-hidden">Минимальная цена</label>
          <input id="priceMin" name="от" placeholder={String(minPriceInGuitars)} value={minPrice} onChange={handleMinPriceFilterChange} onBlur={handleMinPriceFilterBlur}/>
        </div>
        <div className="form-input">
          <label className="visually-hidden">Максимальная цена</label>
          <input id="priceMax" name="до" placeholder={String(maxPriceInGuitars)} value={maxPrice} onChange={handleMaxPriceFilterChange} onBlur={handleMaxPriceFilterBlur}/>
        </div>
      </div>
    </fieldset>
  );
}

export default PriceFilter;
