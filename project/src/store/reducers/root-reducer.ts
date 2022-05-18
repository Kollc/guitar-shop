import { reviewsDetailProcess } from './../reviews-process/reviews-process';
import { guitarsProcess } from './../guitars-process/guitars-process';
import { NameSpace } from './../../consts';
import { combineReducers } from '@reduxjs/toolkit';
import { guitarsDetailProcess } from '../guitar-detail-process/guitar-detail-process';

export const rootReducer = combineReducers({
  [NameSpace.Guitars]: guitarsProcess.reducer,
  [NameSpace.GuitarDetail]: guitarsDetailProcess.reducer,
  [NameSpace.Reviews]: reviewsDetailProcess.reducer,
});
