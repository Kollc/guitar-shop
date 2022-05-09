import { testGuitars } from './../../mock/mock';
import { guitarsProcess, resetErrorMessage, setCountGuitars, setErrorMessage, setGuitars } from './guitars-process';

describe('Reducer: guitar process', () => {
  it('without additional parameters should return initial state', () => {
    expect(guitarsProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        guitars: [],
        isLoadedGuitars: false,
        countGuitars: 0,
        errorMessage: '',
      });
  });

  it('Add guitars work is success', () => {
    const state = {
      guitars: [],
      isLoadedGuitars: false,
      countGuitars: 0,
      errorMessage: '',
    };

    expect(guitarsProcess.reducer(state, setGuitars(testGuitars))).toEqual({
      guitars: testGuitars,
      isLoadedGuitars: true,
      countGuitars: 0,
      errorMessage: '',
    });
  });

  it('Add count guitars work is success', () => {
    const state = {
      guitars: [],
      isLoadedGuitars: false,
      countGuitars: 0,
      errorMessage: '',
    };

    expect(guitarsProcess.reducer(state, setCountGuitars(20))).toEqual({
      guitars: [],
      isLoadedGuitars: false,
      countGuitars: 20,
      errorMessage: '',
    });
  });

  it('Add error message work is success', () => {
    const state = {
      guitars: [],
      isLoadedGuitars: false,
      countGuitars: 0,
      errorMessage: '',
    };

    expect(guitarsProcess.reducer(state, setErrorMessage('Some Error'))).toEqual({
      guitars: [],
      isLoadedGuitars: true,
      countGuitars: 0,
      errorMessage: 'Some Error',
    });
  });

  it('Reset error message work is success', () => {
    const state = {
      guitars: [],
      isLoadedGuitars: false,
      countGuitars: 0,
      errorMessage: 'Some Error',
    };

    expect(guitarsProcess.reducer(state, resetErrorMessage())).toEqual({
      guitars: [],
      isLoadedGuitars: false,
      countGuitars: 0,
      errorMessage: '',
    });
  });
});
