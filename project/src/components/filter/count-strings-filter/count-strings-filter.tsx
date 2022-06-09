import { GuitarCountStringsList } from '../../../consts';
import CountStringsFilterCheckbox from './count-strings-filter-checkbox/count-strings-filter-checkbox';

function CountStringsFilter(): JSX.Element {
  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Количество струн</legend>
      {GuitarCountStringsList.map((countStrings) => (
        <CountStringsFilterCheckbox id={countStrings.id} title={countStrings.title} key={countStrings.id}/>
      ))}
    </fieldset>
  );
}

export default CountStringsFilter;
