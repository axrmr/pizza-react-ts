import React from 'react';

import { PIZZA_TYPES } from 'consts';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { ReactComponent as PlusSvg } from 'img/plus.svg';
import { addPizza } from 'store/cart/cartSlice';
import { selectCartItems } from 'store/cart/selectors';

type PizzaItemProps = {
  sizes: number[];
  types: number[];
  id: number;
  price: number;
  title: string;
  imageUrl: string;
};

const PizzaItem: React.FC<PizzaItemProps> = ({
  id,
  title,
  imageUrl,
  sizes,
  price,
  types,
}) => {
  const [selectedType, setSelectedType] = React.useState(0);
  const [selectedSize, setSelectedSize] = React.useState(0);
  const items = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();
  const itemQuantity = items ? items.find((item) => item.id === id)?.amount : 0;

  const handleAddClick = () => {
    const pizza = {
      id,
      title,
      imageUrl,
      price,
      type: selectedType,
      size: sizes[selectedSize],
      amount: 0,
    };
    dispatch(addPizza(pizza));
  };

  return (
    <li className='pizza-item'>
      <img
        className='pizza-item__image'
        src={imageUrl}
        alt='Pizza'
        width={260}
        height={260}
      />
      <h4 className='pizza-item__title'>{title}</h4>
      <div className='pizza-item__selector'>
        <ul>
          {types.map((typeIdx) => (
            <li
              key={typeIdx}
              onClick={() => setSelectedType(typeIdx)}
              className={selectedType === typeIdx ? 'active' : ''}
            >
              {PIZZA_TYPES[typeIdx]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, idx) => (
            <li
              key={size}
              onClick={() => setSelectedSize(idx)}
              className={selectedSize === idx ? 'active' : ''}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className='pizza-item__bottom'>
        <div className='pizza-item__price'>от {price} ₽</div>
        <button
          className='button button--outline button--add'
          onClick={handleAddClick}
        >
          <PlusSvg />
          <span>Добавить</span>
          {itemQuantity && <i>{itemQuantity}</i>}
        </button>
      </div>
    </li>
  );
};

export default PizzaItem;
