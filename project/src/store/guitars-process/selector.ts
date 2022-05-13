import { NameSpace } from '../../consts';
import { State } from '../../types/state';
import { GuitarType } from '../../types/types';

export const getGuitars = (state: State): GuitarType[] => state[NameSpace.Guitars].guitars;
export const getStatusLoaded = (state: State): boolean => state[NameSpace.Guitars].isLoadedGuitars;
export const getCountGuitars = (state: State): number => state[NameSpace.Guitars].countGuitars;
export const getGuitarsError = (state: State): string => state[NameSpace.Guitars].errorMessage;
