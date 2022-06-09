import { ChangeEvent, useEffect, useState } from 'react';
import { GuitarsTypeCountStrings, QueryParamsList } from '../../../../consts';
import { useUpdateUrlWithParams } from '../../../../hooks/hooks';

type CountStringsFilterCheckboxProps = {
  title: string,
  id: string,
}

function CountStringsFilterCheckbox({title, id}: CountStringsFilterCheckboxProps): JSX.Element {
  const {queryParams, deleteUrlParam, addUrlWithParams} = useUpdateUrlWithParams();
  const [disabledCheckbox, setDisabledCheckbox] = useState(false);

  useEffect(() => {
    let countStringsList: number[] = [];

    queryParams.getAll(QueryParamsList.Type).forEach((type) => {
      if(GuitarsTypeCountStrings.get(type)) {
        countStringsList = [...countStringsList, ...GuitarsTypeCountStrings.get(type)!];
      }
    });

    if([...new Set(countStringsList)].includes(Number(title))) {
      setDisabledCheckbox(true);
    }

    if(!queryParams.has(QueryParamsList.Type)) {
      setDisabledCheckbox(false);
    }
  }, [queryParams]);

  const handleCheckboxGuitarsCountStringsChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if(evt.target.checked) {
      addUrlWithParams(QueryParamsList.Count, id);
    } else {
      deleteUrlParam(QueryParamsList.Count, id);
    }
  };

  return (
    <div className="form-checkbox catalog-filter__block-item">
      <input
        className="visually-hidden"
        type="checkbox"
        id={id}
        name={id}
        onChange={handleCheckboxGuitarsCountStringsChange}
        disabled={disabledCheckbox}
      />
      <label htmlFor={id}>{title}</label>
    </div>
  );
}

export default CountStringsFilterCheckbox;
