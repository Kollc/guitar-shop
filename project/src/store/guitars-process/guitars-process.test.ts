import { testGuitars } from './../../mock/mock';
import { guitarsProcess, resetErrorMessage, setCountGuitars, setErrorMessage, setGuitars, setMaxPriceGuitar, setMinPriceGuitar } from './guitars-process';

describe('Reducer: guitar process', () => {
  it('without additional parameters should return initial state', () => {
    expect(guitarsProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        guitars: [],
        isLoadedGuitars: false,
        countGuitars: 0,
        errorMessage: '',
        maxPriceGuitar: 0,
        minPriceGuitar: 0,
      });
  });

  it('Add guitars work is success', () => {
    const state = {
      guitars: [],
      isLoadedGuitars: false,
      countGuitars: 0,
      errorMessage: '',
      maxPriceGuitar: 0,
      minPriceGuitar: 0,
    };

    expect(guitarsProcess.reducer(state, setGuitars(testGuitars))).toEqual({
      guitars: testGuitars,
      isLoadedGuitars: true,
      countGuitars: 0,
      errorMessage: '',
      maxPriceGuitar: 0,
      minPriceGuitar: 0,
    });
  });

  it('Add count guitars work is success', () => {
    const state = {
      guitars: [],
      isLoadedGuitars: false,
      countGuitars: 0,
      errorMessage: '',
      maxPriceGuitar: 0,
      minPriceGuitar: 0,
    };

    expect(guitarsProcess.reducer(state, setCountGuitars(20))).toEqual({
      guitars: [],
      isLoadedGuitars: false,
      countGuitars: 20,
      errorMessage: '',
      maxPriceGuitar: 0,
      minPriceGuitar: 0,
    });
  });

  it('Add error message work is success', () => {
    const state = {
      guitars: [],
      isLoadedGuitars: false,
      countGuitars: 0,
      errorMessage: '',
      maxPriceGuitar: 0,
      minPriceGuitar: 0,
    };

    expect(guitarsProcess.reducer(state, setErrorMessage('Some Error'))).toEqual({
      guitars: [],
      isLoadedGuitars: true,
      countGuitars: 0,
      errorMessage: 'Some Error',
      maxPriceGuitar: 0,
      minPriceGuitar: 0,
    });
  });

  it('Reset error message work is success', () => {
    const state = {
      guitars: [],
      isLoadedGuitars: false,
      countGuitars: 0,
      errorMessage: 'Some Error',
      maxPriceGuitar: 0,
      minPriceGuitar: 0,
    };

    expect(guitarsProcess.reducer(state, resetErrorMessage())).toEqual({
      guitars: [],
      isLoadedGuitars: false,
      countGuitars: 0,
      errorMessage: '',
      maxPriceGuitar: 0,
      minPriceGuitar: 0,
    });
  });

  it('Add max price work is success', () => {
    const state = {
      guitars: [],
      isLoadedGuitars: false,
      countGuitars: 0,
      errorMessage: '',
      maxPriceGuitar: 0,
      minPriceGuitar: 0,
    };

    expect(guitarsProcess.reducer(state, setMaxPriceGuitar(1000))).toEqual({
      guitars: [],
      isLoadedGuitars: false,
      countGuitars: 0,
      errorMessage: '',
      maxPriceGuitar: 1000,
      minPriceGuitar: 0,
    });
  });

  it('Add min price work is success', () => {
    const state = {
      guitars: [],
      isLoadedGuitars: false,
      countGuitars: 0,
      errorMessage: '',
      maxPriceGuitar: 0,
      minPriceGuitar: 0,
    };

    expect(guitarsProcess.reducer(state, setMinPriceGuitar(1000))).toEqual({
      guitars: [],
      isLoadedGuitars: false,
      countGuitars: 0,
      errorMessage: '',
      maxPriceGuitar: 0,
      minPriceGuitar: 1000,
    });
  });
});
