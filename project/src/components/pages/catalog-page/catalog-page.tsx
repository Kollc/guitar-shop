import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { COUNT_SHOW_GUITARS_IN_PAGE, QueryParamsList, TypeRequests } from '../../../consts';
import { useAppDispatch, useAppSelector, useUpdateUrlWithParams } from '../../../hooks/hooks';
import { fetchGuitarsWithParamsAction } from '../../../store/actions/api-actions';
import { getCountGuitars, getGuitars, getGuitarsError, getStatusLoaded } from '../../../store/guitars-process/selector';
import { GuitarType, SortParams } from '../../../types/types';
import { getCountStartShowGuitars } from '../../../utils/utils';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import CardsList from '../../cards-list/cards-list';
import ErrorMessage from '../../error-message/error-message';
import Filter from '../../filter/filter';
import LoadingScreen from '../../loading-screen/loading-sceen';
import MainLayout from '../../main-layout/main-layout';
import Pagination from '../../pagination/pagination';
import Sort from '../../sort/sort';

function CatalogPage(): JSX.Element {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const allGuitars = useAppSelector(getGuitars);
  const loaded = useAppSelector(getStatusLoaded);
  const countGuitars = useAppSelector(getCountGuitars);
  const {page = 1} = useParams<{page: string, sort: string, order: string}>();
  const error = useAppSelector(getGuitarsError);
  const [showerGuitars, setShowerGuitars] = useState<GuitarType[]>([]);
  const {queryParams} = useUpdateUrlWithParams();

  useEffect(() => {
    const params: SortParams = {};

    const sort = queryParams.get(QueryParamsList.Sort);
    sort && (params[QueryParamsList.Sort] = sort);

    const order = queryParams.get(QueryParamsList.Order);
    order && (params[QueryParamsList.Order] = order);

    const minPrice = queryParams.get(QueryParamsList.PriceStart);
    minPrice && (params[QueryParamsList.PriceStart] = minPrice);

    const maxPrice = queryParams.get(QueryParamsList.PriceEnd);
    maxPrice && (params[QueryParamsList.PriceEnd] = maxPrice);

    const type = queryParams.getAll(QueryParamsList.Type);
    type && (params[QueryParamsList.Type] = type);

    const count = queryParams.getAll(QueryParamsList.Count);
    count && (params[QueryParamsList.Count] = count);

    dispatch(fetchGuitarsWithParamsAction(params));
  }, [queryParams]);

  useEffect(() => {
    const start = getCountStartShowGuitars(Number(page));
    const end = start + COUNT_SHOW_GUITARS_IN_PAGE;

    if(end > countGuitars && countGuitars > 0) {
      const currentPage = (Math.ceil(countGuitars/COUNT_SHOW_GUITARS_IN_PAGE));
      history.push(`/catalog/page/${currentPage}/?${queryParams.toString()}`);
    }

    setShowerGuitars(allGuitars.slice(start, end));
  }, [page, allGuitars]);

  if(!loaded && showerGuitars) {
    return <LoadingScreen/>;
  }

  return (
    <MainLayout>
      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">Каталог гитар</h1>
          <Breadcrumbs/>
          <div className="catalog">
            <Filter/>
            <Sort/>
            <CardsList guitars={showerGuitars}/>
            <Pagination currentPage={Number(page)}/>
          </div>
        </div>
        {error && <ErrorMessage error={error} type={TypeRequests.Guitars}/>}
      </main>
    </MainLayout>
  );
}

export default CatalogPage;
