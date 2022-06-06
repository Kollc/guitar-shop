import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { COUNT_SHOW_GUITARS_IN_PAGE, TypeRequests } from '../../../consts';
import { useAppDispatch, useAppSelector, useQuery } from '../../../hooks/hooks';
import { fetchGuitarsWithParamsAction } from '../../../store/actions/api-actions';
import { getCountGuitars, getGuitars, getGuitarsError, getStatusLoaded } from '../../../store/guitars-process/selector';
import { GuitarType } from '../../../types/types';
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
  const dispatch = useAppDispatch();
  const allGuitars = useAppSelector(getGuitars);
  const loaded = useAppSelector(getStatusLoaded);
  const countGuitars = useAppSelector(getCountGuitars);
  const {page = 1} = useParams<{page: string, sort: string, order: string}>();
  const error = useAppSelector(getGuitarsError);
  const [showerGuitars, setShowerGuitars] = useState<GuitarType[]>([]);
  const queryParams = useQuery();

  useEffect(() => {
    const sort = queryParams.get('sort');
    const order = queryParams.get('order');

    if(sort && order) {
      dispatch(fetchGuitarsWithParamsAction({sort, order}));
    }
  }, [queryParams]);

  useEffect(() => {
    const start = getCountStartShowGuitars(Number(page));
    const end = start + COUNT_SHOW_GUITARS_IN_PAGE;

    if(end <= countGuitars) {
      setShowerGuitars(allGuitars.slice(start, end));
    }
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
