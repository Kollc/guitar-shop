import { NameSpace } from '../../consts';
import { State } from '../../types/state';
import { GuitarType } from '../../types/types';


export const getGuitarDetail = (state: State): GuitarType | null => state[NameSpace.GuitarDetail].guitarDetail;
export const getStatusLoadedGuitarDetail = (state: State): boolean => state[NameSpace.GuitarDetail].isLoadedGuitarDetail;
export const getErrorGuitarDetail = (state: State): string => state[NameSpace.GuitarDetail].errorMessage;
