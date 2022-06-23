import { fetchGuitarsWithParamsAction, postPromocodeDiscrountAction } from './api-actions';
import { testGuitars } from './../../mock/mock';
import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../../types/state';
import { createAPI } from '../../services/api';
import { APIRoutes } from '../../consts';
import { setCountGuitars, setErrorMessage, setGuitars } from '../guitars-process/guitars-process';
import { setDiscount, setErrorMessage as setErrorMessageCart } from '../cart-process/cart-process';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);


  it('should dispatch load guitars when GET /', async () => {
    const mockGuitars = testGuitars;
    mockAPI
      .onGet(APIRoutes.Guitars)
      .reply(200, mockGuitars, { 'x-total-count': 27 });

    const store = mockStore();

    await store.dispatch(fetchGuitarsWithParamsAction({}));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(setGuitars.toString());
    expect(actions).toContain(setCountGuitars.toString());
  });

  it('should dispatch set error when GET /', async () => {
    const mockGuitars = testGuitars;
    mockAPI
      .onGet(APIRoutes.Guitars)
      .reply(404, mockGuitars, { 'x-total-count': 27 });

    const store = mockStore();

    await store.dispatch(fetchGuitarsWithParamsAction({}));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(setErrorMessage.toString());
  });

  it('should set discount when POST /coupon', async () => {
    mockAPI.onPost(APIRoutes.Coupons).reply(201, {discount: 15});

    const store = mockStore();

    await store.dispatch(postPromocodeDiscrountAction({coupon: 'light-333'}));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(setDiscount.toString());
  });

  it('should set error when POST /coupon', async () => {
    mockAPI.onPost(APIRoutes.Coupons).reply(400, {discount: 0});

    const store = mockStore();

    await store.dispatch(postPromocodeDiscrountAction({coupon: 'light-3333'}));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(setErrorMessageCart.toString());
  });
});


