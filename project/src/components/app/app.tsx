import { Route, Switch } from 'react-router-dom';
import { AppRoutes } from '../../consts';
import CatalogPage from '../pages/catalog-page/catalog-page';
import ErrorPage from '../pages/error-page/error-page';
import GuitarDetailPage from '../pages/guitar-detail-page/guitar-detail-page';
import MainPage from '../pages/main-page/main-page';

function App(): JSX.Element {
  return (
    <Switch>
      <Route path={AppRoutes.Main} exact>
        <MainPage/>
      </Route>
      <Route path={AppRoutes.Catalog} exact>
        <CatalogPage/>
      </Route>
      <Route path={AppRoutes.Guitar} exact>
        <GuitarDetailPage/>
      </Route>
      <Route path={'*'}>
        <ErrorPage/>
      </Route>
    </Switch>
  );
}

export default App;
