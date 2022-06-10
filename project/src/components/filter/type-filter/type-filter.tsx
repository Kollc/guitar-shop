import { GuitarTypesListData } from '../../../consts';
import TypeFilterCheckbox from './type-filter-checkbox/type-filter-checkbox';

function TypeFilter(): JSX.Element {
  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Тип гитар</legend>
      {GuitarTypesListData.map((type) => (
        <TypeFilterCheckbox title={type.title} id={type.id} key={type.id}/>
      ))}
    </fieldset>
  );
}

export default TypeFilter;
