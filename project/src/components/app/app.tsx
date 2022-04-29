import { Route, Switch } from 'react-router-dom';
import { AppRoutes } from '../../consts';
import CatalogPage from '../pages/catalog-page/catalog-page';
import GuitarDetailPage from '../pages/guitar-detail-page/guitar-detail-page';
import MainPage from '../pages/main-page/main-page';

function App(): JSX.Element {
  return (
    <Switch>
      <Route path={AppRoutes.Main} exact>
        <MainPage/>
      </Route>
      <Route path={AppRoutes.Catalog}>
        <CatalogPage/>
      </Route>
      <Route path={AppRoutes.Guitar}>
        <GuitarDetailPage/>
      </Route>
      <Route path={'*'}>
        <div>Page Not Found 404</div>
      </Route>
    </Switch>
  );
}

export default App;
