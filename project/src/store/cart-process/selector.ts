import { GuitarInCart } from './../../types/types';
import { NameSpace } from '../../consts';
import { State } from './../../types/state';

export const getGuitarsInCart = (state: State): {[id: number]: GuitarInCart} => state[NameSpace.Cart].guitarsInCart;
export const getCartLoadedCouponStatus = (state: State): boolean => state[NameSpace.Cart].isLoadedCartCoupon;
export const getCartErrorMessage = (state: State): string => state[NameSpace.Cart].errorMessage;
export const getCartDiscountPercents = (state: State): number => state[NameSpace.Cart].discount;
export const getCoupon = (state: State): string => state[NameSpace.Cart].coupon;
