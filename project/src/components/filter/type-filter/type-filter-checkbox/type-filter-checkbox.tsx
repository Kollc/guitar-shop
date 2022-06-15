import { ChangeEvent } from 'react';
import { QueryParamsList } from '../../../../consts';
import { useUpdateUrlWithParams } from '../../../../hooks/hooks';

type TypeFilterCheckboxProps = {
  title: string,
  id: string,
}

function TypeFilterCheckbox({title, id}: TypeFilterCheckboxProps): JSX.Element {
  const {queryParams, deleteUrlParam, addUrlWithParams} = useUpdateUrlWithParams();

  const handleCheckboxGuitarsTypeChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if(evt.target.checked) {
      addUrlWithParams(QueryParamsList.Type, id);
    } else {
      deleteUrlParam(QueryParamsList.Type, id);
    }
  };

  return (
    <div className="form-checkbox catalog-filter__block-item" data-testid='checkbox-type-item'>
      <input className="visually-hidden" type="checkbox" id={id} name={id} onChange={handleCheckboxGuitarsTypeChange} checked={queryParams.getAll(QueryParamsList.Type).includes(id)}/>
      <label htmlFor={id}>{title}</label>
    </div>
  );
}

export default TypeFilterCheckbox;
