import { Route, Switch } from 'react-router-dom';
import { AppRoutes } from '../../consts';
import CatalogPage from '../catalog-page/catalog-page';

function App(): JSX.Element {
  return (
    <Switch>
      <Route path={AppRoutes.Catalog}>
        <CatalogPage/>
      </Route>
      <Route path={AppRoutes.CatalogPagination}>
        <CatalogPage/>
      </Route>
      <Route path={'*'}>
        <div>Page Not Found 404</div>
      </Route>
    </Switch>
  );
}

export default App;
