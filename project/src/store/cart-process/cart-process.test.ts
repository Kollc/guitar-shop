import { mockGuitarsInCart, testGuitars, mockGuitarsInCartDecrease, mockGuitarsInCartIncrease, mockGuitarsInCartSetCount, mockGuitarsInCartSetCountExpected } from './../../mock/mock';
import { clearCart, setCoupon, setDiscount, setGuitarInCart, checkSaveCart, decreaseProductCount, increaseProductCount, setCountGuitarInCart, deleteGuitarInCart, setErrorMessage, resetErrorMessage, CartProcess } from './cart-process';

describe('Reducer: cart process', () => {
  it('without additional parameters should return initial state', () => {
    expect(CartProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        guitarsInCart: {},
        isLoadedCartCoupon: false,
        errorMessage: '',
        discount: 0,
        coupon: '',
      });
  });

  it('Add setGuitarInCart work is success', () => {
    const state = {
      guitarsInCart: {},
      isLoadedCartCoupon: false,
      errorMessage: '',
      discount: 0,
      coupon: '',
    };

    expect(CartProcess.reducer(state, setGuitarInCart(testGuitars[1]))).toEqual({
      guitarsInCart: mockGuitarsInCart,
      isLoadedCartCoupon: false,
      errorMessage: '',
      discount: 0,
      coupon: '',
    });
  });

  it('Add clearCart work is success', () => {
    const state = {
      guitarsInCart: mockGuitarsInCart,
      isLoadedCartCoupon: false,
      errorMessage: '',
      discount: 0,
      coupon: '',
    };

    expect(CartProcess.reducer(state, clearCart())).toEqual({
      guitarsInCart: {},
      isLoadedCartCoupon: false,
      errorMessage: '',
      discount: 0,
      coupon: '',
    });
  });

  it('Add setCoupon work is success', () => {
    const state = {
      guitarsInCart: {},
      isLoadedCartCoupon: false,
      errorMessage: '',
      discount: 0,
      coupon: '',
    };

    expect(CartProcess.reducer(state, setCoupon('light-333'))).toEqual({
      guitarsInCart: {},
      isLoadedCartCoupon: false,
      errorMessage: '',
      discount: 0,
      coupon: 'light-333',
    });
  });

  it('Add setDiscount work is success', () => {
    const state = {
      guitarsInCart: {},
      isLoadedCartCoupon: false,
      errorMessage: '',
      discount: 0,
      coupon: '',
    };

    expect(CartProcess.reducer(state, setDiscount(15))).toEqual({
      guitarsInCart: {},
      isLoadedCartCoupon: true,
      errorMessage: '',
      discount: 15,
      coupon: '',
    });
  });

  it('Add checkSaveCart work is success', () => {
    const state = {
      guitarsInCart: mockGuitarsInCart,
      isLoadedCartCoupon: false,
      errorMessage: '',
      discount: 0,
      coupon: '',
    };

    expect(CartProcess.reducer(state, checkSaveCart())).toEqual({
      guitarsInCart: mockGuitarsInCart,
      isLoadedCartCoupon: false,
      errorMessage: '',
      discount: 0,
      coupon: '',
    });
  });

  it('Add decreaseProductCount work is success', () => {
    const state = {
      guitarsInCart: mockGuitarsInCart,
      isLoadedCartCoupon: false,
      errorMessage: '',
      discount: 0,
      coupon: '',
    };

    expect(CartProcess.reducer(state, decreaseProductCount(testGuitars[1]))).toEqual({
      guitarsInCart: mockGuitarsInCartDecrease,
      isLoadedCartCoupon: false,
      errorMessage: '',
      discount: 0,
      coupon: '',
    });
  });

  it('Add increaseProductCount work is success', () => {
    const state = {
      guitarsInCart: mockGuitarsInCart,
      isLoadedCartCoupon: false,
      errorMessage: '',
      discount: 0,
      coupon: '',
    };

    expect(CartProcess.reducer(state, increaseProductCount(testGuitars[1]))).toEqual({
      guitarsInCart: mockGuitarsInCartIncrease,
      isLoadedCartCoupon: false,
      errorMessage: '',
      discount: 0,
      coupon: '',
    });
  });

  it('Add setCountGuitarInCart work is success', () => {
    const state = {
      guitarsInCart: mockGuitarsInCart,
      isLoadedCartCoupon: false,
      errorMessage: '',
      discount: 0,
      coupon: '',
    };

    expect(CartProcess.reducer(state, setCountGuitarInCart(mockGuitarsInCartSetCount))).toEqual({
      guitarsInCart: mockGuitarsInCartSetCountExpected,
      isLoadedCartCoupon: false,
      errorMessage: '',
      discount: 0,
      coupon: '',
    });
  });

  it('Add deleteGuitarInCart work is success', () => {
    const state = {
      guitarsInCart: mockGuitarsInCart,
      isLoadedCartCoupon: false,
      errorMessage: '',
      discount: 0,
      coupon: '',
    };

    expect(CartProcess.reducer(state, deleteGuitarInCart(testGuitars[1]))).toEqual({
      guitarsInCart: {},
      isLoadedCartCoupon: false,
      errorMessage: '',
      discount: 0,
      coupon: '',
    });
  });

  it('Add setErrorMessage work is success', () => {
    const state = {
      guitarsInCart: {},
      isLoadedCartCoupon: false,
      errorMessage: '',
      discount: 0,
      coupon: '',
    };

    expect(CartProcess.reducer(state, setErrorMessage('test'))).toEqual({
      guitarsInCart: {},
      isLoadedCartCoupon: true,
      errorMessage: 'test',
      discount: 0,
      coupon: '',
    });
  });

  it('Add resetErrorMessage work is success', () => {
    const state = {
      guitarsInCart: {},
      isLoadedCartCoupon: false,
      errorMessage: 'test',
      discount: 0,
      coupon: '',
    };

    expect(CartProcess.reducer(state, resetErrorMessage())).toEqual({
      guitarsInCart: {},
      isLoadedCartCoupon: false,
      errorMessage: '',
      discount: 0,
      coupon: '',
    });
  });
});
