import { ChangeEvent, useEffect, useState } from 'react';
import { QueryParamsList } from '../../../consts';
import { useAppSelector, useUpdateUrlWithParams } from '../../../hooks/hooks';
import {
  getGuitars,
  getOriginalGuitars
} from '../../../store/guitars-process/selector';
import { calcMaxGuitarsPrice, calcMinGuitarsPrice } from '../../../utils/utils';

function PriceFilter(): JSX.Element {
  const guitars = useAppSelector(getGuitars);
  const originalGuitars = useAppSelector(getOriginalGuitars);

  const minPriceInGuitars = calcMinGuitarsPrice(guitars);
  const maxPriceInGuitars = calcMaxGuitarsPrice(guitars);
  const { queryParams, updateUrlWithParams } = useUpdateUrlWithParams();

  const intialMinPrice =
    Number(queryParams.get(QueryParamsList.PriceStart)) || '';
  const intialMaxPrice =
    Number(queryParams.get(QueryParamsList.PriceEnd)) || '';

  const [minPrice, setMinPrice] = useState<number | ''>(intialMinPrice);
  const [maxPrice, setMaxPrice] = useState<number | ''>(intialMaxPrice);

  useEffect(() => {
    setMinPrice(intialMinPrice);
    setMaxPrice(intialMaxPrice);
  }, [guitars]);

  const handleMinPriceFilterChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const minPriceValue = Number(evt.target.value);

    if (minPriceValue >= 0) {
      setMinPrice(minPriceValue);
    }
  };

  const handleMinPriceFilterBlur = () => {
    if (guitars.length <= 0) {
      const originalMinPrice = calcMinGuitarsPrice(originalGuitars);
      setMinPrice(originalMinPrice);
      updateUrlWithParams(QueryParamsList.PriceStart, String(originalMinPrice));
    } else if (minPrice) {
      const currentMaxPrice = maxPrice || maxPriceInGuitars;

      if (minPrice < minPriceInGuitars || minPrice >= currentMaxPrice) {
        setMinPrice(minPriceInGuitars);
        updateUrlWithParams(
          QueryParamsList.PriceStart,
          String(minPriceInGuitars),
        );
      } else {
        updateUrlWithParams(QueryParamsList.PriceStart, String(minPrice));
      }

      if (!maxPrice) {
        updateUrlWithParams(
          QueryParamsList.PriceEnd,
          String(maxPriceInGuitars),
        );
      }
    }
  };

  const handleMaxPriceFilterChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const maxPriceValue = Number(evt.target.value);

    if (maxPriceValue >= 0) {
      setMaxPrice(maxPriceValue);
    }
  };

  const handleMaxPriceFilterBlur = () => {
    if (guitars.length <= 0) {
      const originalMaxPrice = calcMaxGuitarsPrice(originalGuitars);
      setMaxPrice(originalMaxPrice);
      updateUrlWithParams(QueryParamsList.PriceEnd, String(originalMaxPrice));
    } else if (maxPrice) {
      if (maxPrice <= minPrice || maxPrice >= maxPriceInGuitars) {
        setMaxPrice(maxPriceInGuitars);
        updateUrlWithParams(
          QueryParamsList.PriceEnd,
          String(maxPriceInGuitars),
        );
      } else {
        updateUrlWithParams(QueryParamsList.PriceEnd, String(maxPrice));
      }

      if (!minPrice) {
        updateUrlWithParams(
          QueryParamsList.PriceStart,
          String(minPriceInGuitars),
        );
      }
    }
  };

  return (
    <fieldset className="catalog-filter__block" data-testid="price-filter">
      <legend className="catalog-filter__block-title">????????, ???</legend>
      <div className="catalog-filter__price-range">
        <div className="form-input">
          <label className="visually-hidden">?????????????????????? ????????</label>
          <input
            id="priceMin"
            name="????"
            placeholder={String(minPriceInGuitars)}
            value={minPrice}
            onChange={handleMinPriceFilterChange}
            onBlur={handleMinPriceFilterBlur}
          />
        </div>
        <div className="form-input">
          <label className="visually-hidden">???????????????????????? ????????</label>
          <input
            id="priceMax"
            name="????"
            placeholder={String(maxPriceInGuitars)}
            value={maxPrice}
            onChange={handleMaxPriceFilterChange}
            onBlur={handleMaxPriceFilterBlur}
          />
        </div>
      </div>
    </fieldset>
  );
}

export default PriceFilter;
