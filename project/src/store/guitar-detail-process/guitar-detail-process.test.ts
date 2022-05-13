import { testGuitars } from './../../mock/mock';
import { guitarsDetailProcess, setGuitarDetail, resetErrorMessage, setErrorMessage } from './guitar-detail-process';

describe('Reducer: guitar detail process', () => {
  it('without additional parameters should return initial state', () => {
    expect(guitarsDetailProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        errorMessage: '',
        isLoadedGuitarDetail: false,
        guitarDetail: null,
      });
  });

  it('Add guitar work is success', () => {
    const state = {
      errorMessage: '',
      isLoadedGuitarDetail: false,
      guitarDetail: null,
    };

    expect(guitarsDetailProcess.reducer(state, setGuitarDetail(testGuitars[0]))).toEqual({
      errorMessage: '',
      isLoadedGuitarDetail: true,
      guitarDetail: testGuitars[0],
    });
  });

  it('Add error message work is success', () => {
    const state = {
      errorMessage: '',
      isLoadedGuitarDetail: false,
      guitarDetail: null,
    };

    expect(guitarsDetailProcess.reducer(state, setErrorMessage('some error'))).toEqual({
      errorMessage: 'some error',
      isLoadedGuitarDetail: true,
      guitarDetail: null,
    });
  });

  it('Reset error message work is success', () => {
    const state = {
      errorMessage: 'some error',
      isLoadedGuitarDetail: false,
      guitarDetail: null,
    };

    expect(guitarsDetailProcess.reducer(state, resetErrorMessage())).toEqual({
      errorMessage: '',
      isLoadedGuitarDetail: false,
      guitarDetail: null,
    });
  });
});
