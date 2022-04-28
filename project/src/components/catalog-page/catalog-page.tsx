import { useAppSelector } from '../../hooks/hooks';
import { getGuitars, getStatusLoaded } from '../../store/guitars-process/selector';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import CardsList from '../cards-list/cards-list';
import Filter from '../filter/filter';
import Footer from '../footer/footer';
import Header from '../header/header';
import Pagination from '../pagination/pagination';
import Sort from '../sort/sort';

function CatalogPage(): JSX.Element {
  const guitars = useAppSelector(getGuitars);
  const loaded = useAppSelector(getStatusLoaded);

  if(!loaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header/>
      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">Каталог гитар</h1>
          <Breadcrumbs/>
          <div className="catalog">
            <Filter/>
            <Sort/>
            <CardsList guitars={guitars}/>
            <Pagination/>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default CatalogPage;
