import { Route, Switch } from 'react-router-dom';
import { AppRoutes } from '../../consts';
import CartPage from '../pages/cart-page/cart-page';
import CatalogPage from '../pages/catalog-page/catalog-page';
import ErrorPage from '../pages/error-page/error-page';
import GuitarDetailPage from '../pages/guitar-detail-page/guitar-detail-page';

function App(): JSX.Element {
  return (
    <Switch>
      <Route path={AppRoutes.Main} component={CatalogPage} exact/>
      <Route path={AppRoutes.CatalogPage} component={CatalogPage} exact/>
      <Route path={AppRoutes.Guitar} component={GuitarDetailPage} exact/>
      <Route path={AppRoutes.Cart} component={CartPage} exact/>
      <Route path={'*'} component={ErrorPage}/>
    </Switch>
  );
}

export default App;
