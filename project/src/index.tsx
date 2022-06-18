import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import { fetchGuitarsWithParamsAction, fetchGuitarsWithoutParams } from './store/actions/api-actions';
import { checkSaveCart } from './store/cart-process/cart-process';
import { store } from './store/store';

store.dispatch(fetchGuitarsWithParamsAction({}));
store.dispatch(fetchGuitarsWithoutParams());
store.dispatch(checkSaveCart());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
