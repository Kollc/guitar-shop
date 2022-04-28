import { guitarsProcess } from './../guitars-process/guitars-process';
import { NameSpace } from './../../consts';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  [NameSpace.Guitars]: guitarsProcess.reducer,
});
