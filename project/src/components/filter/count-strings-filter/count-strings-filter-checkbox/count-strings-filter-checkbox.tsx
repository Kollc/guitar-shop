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
  const [checkedCheckbox, setCheckedCheckbox] = useState(false);

  useEffect(() => {
    let countStringsList: number[] = [];

    queryParams.getAll(QueryParamsList.Type).forEach((type) => {
      if(GuitarsTypeCountStrings.get(type)) {
        countStringsList = [...countStringsList, ...GuitarsTypeCountStrings.get(type)!];
      }
    });

    setDisabledCheckboxCountStrings(countStringsList);
    setCheckedCheckboxCountStrings();
  }, [queryParams.getAll(QueryParamsList.Type)]);

  const setCheckedCheckboxCountStrings = (): void => {
    if(queryParams.getAll(QueryParamsList.Count).includes(title)) {
      setCheckedCheckbox(true);
    } else {
      setCheckedCheckbox(false);
    }
  };

  const setDisabledCheckboxCountStrings = (countStringsList: number[]): void => {
    if(![...new Set(countStringsList)].includes(Number(title))) {
      setDisabledCheckbox(true);
    } else {
      setDisabledCheckbox(false);
    }

    if(!queryParams.has(QueryParamsList.Type)) {
      setDisabledCheckbox(false);
    }
  };

  const handleCheckboxGuitarsCountStringsChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if(evt.target.checked) {
      addUrlWithParams(QueryParamsList.Count, title);
    } else {
      deleteUrlParam(QueryParamsList.Count, title);
    }
  };

  useEffect(() => {
    if(disabledCheckbox && queryParams.getAll(QueryParamsList.Count).includes(title)) {
      deleteUrlParam(QueryParamsList.Count, title);
    }
  }, [disabledCheckbox]);

  return (
    <div className="form-checkbox catalog-filter__block-item" data-testid='strings-coutn-filter-item'>
      <input
        className="visually-hidden"
        type="checkbox"
        id={id}
        name={id}
        onChange={handleCheckboxGuitarsCountStringsChange}
        disabled={disabledCheckbox}
        checked={checkedCheckbox}
      />
      <label htmlFor={id}>{title}</label>
    </div>
  );
}

export default CountStringsFilterCheckbox;
