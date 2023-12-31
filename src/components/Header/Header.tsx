import React from 'react';
import { Link } from 'react-router-dom';

import Search from 'components/Search/Search';

import { ReactComponent as CartSvg } from 'img/cart.svg';
import { ReactComponent as LogoSvg } from 'img/pizza-logo.svg';

import { useAppSelector } from 'hooks/redux';
import { selectCartTotalItems, selectCartTotalSum } from 'store/cart/selectors';

const Header: React.FC = () => {
  const totalSum = useAppSelector(selectCartTotalSum);
  const totalItems = useAppSelector(selectCartTotalItems);

  return (
    <header className='header'>
      <div className='container'>
        <Link to='/' className='logo'>
          <LogoSvg width='38' className='logo__img' />
          <div>
            <h1 className='logo__title'>Mamma-Mia!</h1>
            <p className='logo__aftertitle'>самая вкусная пицца во вселенной</p>
          </div>
        </Link>
        <Search />
        <div className='header__cart'>
          <Link to='/cart' className='button button--cart'>
            <span>{totalSum} ₽</span>
            <div className='button__delimiter'></div>
            <CartSvg />
            <span>{totalItems}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
