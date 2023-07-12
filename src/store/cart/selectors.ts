import { RootState } from 'store/store';

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartTotalItems = (state: RootState) => {
  const cartItems = selectCartItems(state);
  return cartItems.reduce((curr, next) => curr + next.amount, 0);
};

export const selectCartTotalSum = (state: RootState) => state.cart.totalSum;
