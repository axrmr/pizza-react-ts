import React from 'react';

import { CATEGORIES } from 'consts';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { setCategoryId } from 'store/filter/filterSlice';
import { selectCategoryId } from 'store/filter/selectors';

const Categories: React.FC = () => {
  const dispatch = useAppDispatch();
  const categoryId = useAppSelector(selectCategoryId);

  const handleCategoryClick = (idx: number) => () => {
    dispatch(setCategoryId(idx));
  };

  return (
    <div className='categories-wrapper'>
      <ul className='categories'>
        {CATEGORIES.map((category, idx) => (
          <li
            key={category}
            className={`item ${categoryId === idx && 'active'}`}
            onClick={handleCategoryClick(idx)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
