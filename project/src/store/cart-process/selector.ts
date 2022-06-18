import { GuitarInCart } from './../../types/types';
import { NameSpace } from '../../consts';
import { State } from './../../types/state';

export const getGuitarsInCart = (state: State): {[id: number]: GuitarInCart} => state[NameSpace.Cart].guitarsInCart;
