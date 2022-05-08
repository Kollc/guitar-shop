import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TypeRequests } from '../../../consts';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { fetchGuitarsWithParamsAction } from '../../../store/actions/api-actions';
import { getFetchGuitarsError, getGuitars, getStatusLoaded } from '../../../store/guitars-process/selector';
import { getCountStartShowGuitars } from '../../../utils/utils';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import CardsList from '../../cards-list/cards-list';
import ErrorMessage from '../../error-message/error-message';
import Filter from '../../filter/filter';
import MainLayout from '../../main-layout/main-layout';
import Pagination from '../../pagination/pagination';
import Sort from '../../sort/sort';

function CatalogPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const guitars = useAppSelector(getGuitars);
  const loaded = useAppSelector(getStatusLoaded);
  const {page} = useParams<{page: string}>();
  const [currentPage, setCurrentPage] = useState(1);
  const error = useAppSelector(getFetchGuitarsError);

  useEffect(() => {
    if(page) {
      setCurrentPage(Number(page));
    }
  }, [page]);

  useEffect(() => {
    const start = getCountStartShowGuitars(Number(currentPage));
    dispatch(fetchGuitarsWithParamsAction({start}));
  }, [currentPage]);

  if(!loaded && guitars) {
    return <div>Loading...</div>;
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
            <Pagination currentPage={currentPage}/>
          </div>
        </div>
        {error && <ErrorMessage error={error} type={TypeRequests.Guitars}/>}
      </main>
    </MainLayout>
  );
}

export default CatalogPage;
