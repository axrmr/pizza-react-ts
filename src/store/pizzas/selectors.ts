import { RootState } from 'store/store';

export const selectPizzaItems = (state: RootState) => state.pizzas.items;

export const selectIsLoading = (state: RootState) => state.pizzas.isLoading;
