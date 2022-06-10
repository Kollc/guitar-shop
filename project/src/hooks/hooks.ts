import { useLocation, useHistory } from 'react-router-dom';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { State, AppDispatch } from '../types/state';
import { useMemo } from 'react';

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useUpdateUrlWithParams = () => {
  const { search } = useLocation();
  const history = useHistory();

  const queryParams =  useMemo(() => new URLSearchParams(search), [search]);

  const addUrlWithParams = (key: string, value: string): void => {
    if(!queryParams.has(key) || !queryParams.getAll(key).includes(value)) {
      queryParams.append(key, value);
    }

    history.push(`?${queryParams.toString()}`);
  };

  const updateUrlWithParams = (key: string, value: string): void => {
    if(queryParams.toString() !== '' && queryParams.has(key)) {
      queryParams.set(key, value);
    } else {
      queryParams.append(key, value);
    }

    history.push(`?${queryParams.toString()}`);
  };

  const deleteUrlParam = (key: string, value: string): void => {
    const values = queryParams.getAll(key);
    values.splice(values.indexOf(value), 1);

    queryParams.delete(key);

    values.forEach((valueParam) => {
      queryParams.append(key, valueParam);
    });

    history.push(`?${queryParams.toString()}`);
  };

  const deleteAllUrlParams = (keys: string[]): void => {
    if(queryParams.toString() !== '') {
      keys.forEach((key) => {
        queryParams.delete(key);
      });

      history.push(`?${queryParams.toString()}`);
    }
  };

  return {queryParams, updateUrlWithParams, deleteAllUrlParams, addUrlWithParams, deleteUrlParam};
};
