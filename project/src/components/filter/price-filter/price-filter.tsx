import { ChangeEvent, useState } from 'react';
import { QueryParamsList } from '../../../consts';
import { useAppSelector, useUpdateUrlWithParams } from '../../../hooks/hooks';
import { getMaxGuitarsPrice, getMinGuitarsPrice } from '../../../store/guitars-process/selector';

function PriceFilter(): JSX.Element {
  const minPriceInGuitars = useAppSelector(getMinGuitarsPrice);
  const maxPriceInGuitars = useAppSelector(getMaxGuitarsPrice);
  const {queryParams, updateUrlWithParams} = useUpdateUrlWithParams();

  const intialMinPrice = Number(queryParams.get(QueryParamsList.PriceStart)) || '';
  const intialMaxPrice = Number(queryParams.get(QueryParamsList.PriceEnd)) || '';

  const [minPrice, setMinPrice] = useState<number | ''>(intialMinPrice);
  const [maxPrice, setMaxPrice] = useState<number | ''>(intialMaxPrice);


  const handleMinPriceFilterChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const minPriceValue = Number(evt.target.value);

    if(minPriceValue >= 0) {
      setMinPrice(minPriceValue);
    }
  };

  const handleMinPriceFilterBlur = () => {
    const currentMaxPrice = maxPrice || maxPriceInGuitars;

    if(minPrice < minPriceInGuitars || minPrice >= currentMaxPrice) {
      setMinPrice(minPriceInGuitars);
      updateUrlWithParams(QueryParamsList.PriceStart, String(minPriceInGuitars));
    } else {
      updateUrlWithParams(QueryParamsList.PriceStart, String(minPrice));
    }

    if(!maxPrice) {
      updateUrlWithParams(QueryParamsList.PriceEnd, String(maxPriceInGuitars));
    }
  };

  const handleMaxPriceFilterChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const maxPriceValue = Number(evt.target.value);

    if(maxPriceValue >= 0) {
      setMaxPrice(maxPriceValue);
    }
  };

  const handleMaxPriceFilterBlur = () => {
    if(maxPrice <= minPrice || maxPrice >= maxPriceInGuitars) {
      setMaxPrice(maxPriceInGuitars);
      updateUrlWithParams(QueryParamsList.PriceEnd, String(maxPriceInGuitars));
    } else {
      updateUrlWithParams(QueryParamsList.PriceEnd, String(maxPrice));
    }

    if(!minPrice) {
      updateUrlWithParams(QueryParamsList.PriceStart, String(minPriceInGuitars));
    }
  };

  return (
    <fieldset className="catalog-filter__block" data-testid='price-filter'>
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
