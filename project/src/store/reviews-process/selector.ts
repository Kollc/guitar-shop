import { ReviewType } from './../../types/types';
import { NameSpace } from '../../consts';
import { State } from '../../types/state';

export const getDetailReviews = (state: State): ReviewType[] => state[NameSpace.Reviews].reviews;
export const getStatusLoadedDetailReviews = (state: State): boolean => state[NameSpace.Reviews].isLoadedReviews;
export const getErrorReviews = (state: State): string => state[NameSpace.Reviews].errorMessage;
