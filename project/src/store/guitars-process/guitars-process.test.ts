import { testGuitars } from './../../mock/mock';
import { guitarsProcess, resetErrorMessage, setCountGuitars, setErrorMessage, setGuitars, setOriginalGuitars } from './guitars-process';

describe('Reducer: guitar process', () => {
  it('without additional parameters should return initial state', () => {
    expect(guitarsProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        originalGuitars: [],
        guitars: [],
        isLoadedGuitars: false,
        countGuitars: 0,
        errorMessage: '',
      });
  });

  it('Add guitars work is success', () => {
    const state = {
      originalGuitars: [],
      guitars: [],
      isLoadedGuitars: false,
      countGuitars: 0,
      errorMessage: '',
    };

    expect(guitarsProcess.reducer(state, setGuitars(testGuitars))).toEqual({
      originalGuitars: [],
      guitars: testGuitars,
      isLoadedGuitars: true,
      countGuitars: 0,
      errorMessage: '',
    });
  });

  it('Add count guitars work is success', () => {
    const state = {
      originalGuitars: [],
      guitars: [],
      isLoadedGuitars: false,
      countGuitars: 0,
      errorMessage: '',
    };

    expect(guitarsProcess.reducer(state, setCountGuitars(20))).toEqual({
      originalGuitars: [],
      guitars: [],
      isLoadedGuitars: false,
      countGuitars: 20,
      errorMessage: '',
    });
  });

  it('Add error message work is success', () => {
    const state = {
      originalGuitars: [],
      guitars: [],
      isLoadedGuitars: false,
      countGuitars: 0,
      errorMessage: '',
    };

    expect(guitarsProcess.reducer(state, setErrorMessage('Some Error'))).toEqual({
      originalGuitars: [],
      guitars: [],
      isLoadedGuitars: true,
      countGuitars: 0,
      errorMessage: 'Some Error',
    });
  });

  it('Reset error message work is success', () => {
    const state = {
      originalGuitars: [],
      guitars: [],
      isLoadedGuitars: false,
      countGuitars: 0,
      errorMessage: 'Some Error',
    };

    expect(guitarsProcess.reducer(state, resetErrorMessage())).toEqual({
      originalGuitars: [],
      guitars: [],
      isLoadedGuitars: false,
      countGuitars: 0,
      errorMessage: '',
    });
  });

  it('Add original guitars work is success', () => {
    const state = {
      originalGuitars: [],
      guitars: [],
      isLoadedGuitars: false,
      countGuitars: 0,
      errorMessage: '',
    };

    expect(guitarsProcess.reducer(state, setOriginalGuitars(testGuitars))).toEqual({
      originalGuitars: testGuitars,
      guitars: [],
      isLoadedGuitars: false,
      countGuitars: 0,
      errorMessage: '',
    });
  });
});
