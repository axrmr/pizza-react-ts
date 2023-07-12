import { createSlice } from '@reduxjs/toolkit';
import { fetchPizzas } from 'store/pizzas/thunks';
import { PizzaState } from './types';

const initialState: PizzaState = {
  items: [],
  isLoading: false,
  error: '',
};

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPizzas.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, { error }) => {
          state.error = error;
          state.isLoading = false;
        }
      );
  },
});

export default pizzasSlice.reducer;
