import React from 'react';

import { ReactComponent as MinusSvg } from '/public/img/minus.svg';
import { ReactComponent as PlusSvg } from '/public/img/plus.svg';

import { PIZZA_TYPES } from 'consts';
import { useAppDispatch } from 'hooks/redux';
import { toast } from 'react-hot-toast';
import {
  decrementPizza,
  incrementPizza,
  removePizza,
} from 'store/cart/cartSlice';

type CartItemProps = {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  type: number;
  size: number;
  amount: number;
};

const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  imageUrl,
  price,
  type,
  size,
  amount,
}) => {
  const dispatch = useAppDispatch();
  const typeName = PIZZA_TYPES[type];

  const handleClearPizzasClick = (id: number) => () => {
    dispatch(removePizza(id));
  };

  const handleIncrementPizzaClick = (id: number) => () => {
    dispatch(incrementPizza(id));
  };

  const handleDecrementPizzaClick = (id: number) => () => {
    dispatch(decrementPizza(id));
    if (amount < 2) toast.success('ok');
  };

  return (
    <div className='cart__item'>
      <div className='cart__item-img'>
        <img className='pizza-block__image' src={imageUrl} alt='Pizza' />
      </div>
      <div className='cart__item-info'>
        <h3>{title}</h3>
        <p>
          {typeName}, {size} см.
        </p>
      </div>
      <div className='cart__item-count'>
        <button
          disabled={amount < 2}
          onClick={handleDecrementPizzaClick(id)}
          className='button button--outline button--circle cart__item-count-minus '
        >
          <MinusSvg />
        </button>
        <b>{amount}</b>
        <button
          onClick={handleIncrementPizzaClick(id)}
          className='button button--outline button--circle cart__item-count-plus'
        >
          <PlusSvg />
        </button>
      </div>
      <div className='cart__item-price'>
        <b>{price * amount} ₽</b>
      </div>
      <div className='cart__item-remove'>
        <button
          onClick={handleClearPizzasClick(id)}
          className='button button--outline button--circle'
        >
          <PlusSvg />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
