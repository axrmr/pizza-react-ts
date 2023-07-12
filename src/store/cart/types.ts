export type CartItem = {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  type: number;
  size: number;
  amount: number;
};

export interface CartState {
  items: CartItem[];
  totalSum: number;
}


