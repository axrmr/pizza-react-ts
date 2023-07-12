import React from 'react';

import Skeleton from 'components/Skeleton/Skeleton';

import PizzaItem from 'components/PizzaItem/PizzaItem';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { selectCategoryId, selectSortVal } from 'store/filter/selectors';
import { selectIsLoading, selectPizzaItems } from 'store/pizzas/selectors';
import { fetchPizzas } from 'store/pizzas/thunks';
import { selectSearchVal } from 'store/search/selectors';
import cls from './Pizzas.module.scss';

type PizzasProps = {
  isSearchParams: { current: boolean };
};

const Pizzas: React.FC<PizzasProps> = ({ isSearchParams }) => {
  const dispatch = useAppDispatch();
  const pizzas = useAppSelector(selectPizzaItems);
  const isLoading = useAppSelector(selectIsLoading);
  const sortVal = useAppSelector(selectSortVal);
  const searchVal = useAppSelector(selectSearchVal);
  const categoryId = useAppSelector(selectCategoryId);

  const skeletons = Array(10)
    .fill(null)
    .map((_, idx) => <Skeleton key={idx} className='pizza-item' />);

  React.useEffect(() => {
    if (!isSearchParams.current) {
      dispatch(fetchPizzas({ categoryId, searchVal, sortVal }));
    }
    isSearchParams.current = false;
  }, [categoryId, dispatch, isSearchParams, searchVal, sortVal]);

  return (
    <>
      <h2 className={cls.title}>Все пиццы</h2>
      <ul className={cls.pizzasList}>
        {isLoading
          ? skeletons
          : pizzas.map((pizza) => <PizzaItem key={pizza.id} {...pizza} />)}
      </ul>
    </>
  );
};

export default Pizzas;
