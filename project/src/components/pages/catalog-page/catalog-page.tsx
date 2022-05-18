import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { COUNT_SHOW_GUITARS_IN_PAGE, FETCH_GUITARS_LIMIT, TypeRequests } from '../../../consts';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { fetchGuitarsWithParamsAction } from '../../../store/actions/api-actions';
import { getGuitars, getGuitarsError, getStatusLoaded } from '../../../store/guitars-process/selector';
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
  const guitars = useAppSelector(getGuitars);
  const loaded = useAppSelector(getStatusLoaded);
  const {page = 1} = useParams<{page: string}>();
  const error = useAppSelector(getGuitarsError);

  useEffect(() => {
    const start = getCountStartShowGuitars(Number(page));
    const end = start + COUNT_SHOW_GUITARS_IN_PAGE;

    if(end <= FETCH_GUITARS_LIMIT) {
      dispatch(fetchGuitarsWithParamsAction({start, end}));
    }
  }, [page]);

  if(!loaded && guitars) {
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
            <CardsList guitars={guitars}/>
            <Pagination currentPage={Number(page)}/>
          </div>
        </div>
        {error && <ErrorMessage error={error} type={TypeRequests.Guitars}/>}
      </main>
    </MainLayout>
  );
}

export default CatalogPage;
