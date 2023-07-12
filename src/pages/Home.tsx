import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import qs from 'qs';

import Categories from 'components/Categories/Categories';
import Pizzas from 'components/Pizzas/Pizzas';
import Section from 'components/Section/Section';
import Sort from 'components/Sort/Sort';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { setCategoryId, setSortVal } from 'store/filter/filterSlice';
import { selectCategoryId, selectSortVal } from 'store/filter/selectors';

const Home: React.FC = () => {
  const categoryId = useAppSelector(selectCategoryId);
  const sortVal = useAppSelector(selectSortVal);
  const dispatch = useAppDispatch();
  const isSearchParams = React.useRef(false);
  const isMounted = React.useRef(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (window.location.search) {
      const { categoryId, sortBy } = qs.parse(window.location.search.slice(1));
      dispatch(setSortVal(`${sortBy}`));
      dispatch(setCategoryId(Number(categoryId)));
      isSearchParams.current = true;
    }
  }, [dispatch]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({ categoryId, sortBy: sortVal });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, navigate, sortVal]);

  return (
    <AnimatePresence>
      <motion.div
        key='home'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <Section>
          <Categories />
          <Sort />
        </Section>
        <Pizzas isSearchParams={isSearchParams} />
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
