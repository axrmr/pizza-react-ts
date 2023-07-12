export type PizzaItem = {
  sizes: number[];
  types: number[];
  id: number;
  price: number;
  title: string;
  imageUrl: string;
};

export interface PizzaState {
  items: PizzaItem[];
  isLoading: boolean;
  error: string;
}

export type FetchParams = {
  categoryId: number;
  searchVal: string;
  sortVal: string;
};
