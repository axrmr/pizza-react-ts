import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartItem, CartState } from './types';

const initialState: CartState = {
  items: [],
  totalSum: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPizza(state, { payload }: PayloadAction<CartItem>) {
      const item = state.items.find((item) => item.id === payload.id);
      if (!item) {
        state.items.push({ ...payload, amount: 1 });
        calcTotalSum(state);
      } else {
        item.amount += 1;
        calcTotalSum(state);
      }
    },
    removePizza(state, { payload }: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== payload);
      calcTotalSum(state);
    },
    incrementPizza(state, { payload }: PayloadAction<number>) {
      const item = state.items.find((item) => item.id === payload);
      if (item) item.amount += 1;
      calcTotalSum(state);
    },
    decrementPizza(state, { payload }: PayloadAction<number>) {
      const item = state.items.find((item) => item.id === payload);
      if (item) item.amount -= 1;
      calcTotalSum(state);
    },
    clearCart(state) {
      state.items.length = 0;
      calcTotalSum(state);
    },
  },
});

export const {
  addPizza,
  removePizza,
  incrementPizza,
  decrementPizza,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

function calcTotalSum(state: any) {
  state.totalSum = state.items.reduce(
    (curr: number, next: { price: number; amount: number }) =>
      curr + next.price * next.amount,
    0
  );
}
