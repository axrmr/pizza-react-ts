import React from 'react';

import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

import { ReactComponent as CartSvg } from 'img/cart.svg';
import { ReactComponent as ArrowLeftSvg } from 'img/grey-arrow-left.svg';
import { ReactComponent as TrashSvg } from 'img/trash.svg';

import CartItem from 'components/CartItem/CartItem';
import EmptyCart from 'components/EmptyCart/EmptyCart';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { clearCart } from 'store/cart/cartSlice';
import {
  selectCartItems,
  selectCartTotalItems,
  selectCartTotalSum,
} from 'store/cart/selectors';

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const totalSum = useAppSelector(selectCartTotalSum);
  const totalItems = useAppSelector(selectCartTotalItems);

  const handleClearCartClick = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          key='cart'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          {!items.length ? (
            <EmptyCart />
          ) : (
            <div className='container container--cart'>
              <Toaster />
              <div className='cart'>
                <div className='cart__top'>
                  <h2 className='content__title'>
                    <CartSvg />
                    Корзина
                  </h2>
                  <div className='cart__clear'>
                    <TrashSvg />
                    <span onClick={handleClearCartClick}>Очистить корзину</span>
                  </div>
                </div>
                <div className='content__items'>
                  {items.map((item) => (
                    <CartItem key={item.id} {...item} />
                  ))}
                </div>
                <div className='cart__bottom'>
                  <div className='cart__bottom-details'>
                    <span>
                      Всего пицц: <b>{totalItems} шт.</b>
                      <span></span>
                    </span>
                    Сумма заказа: <b>{totalSum} ₽</b>
                  </div>
                  <div className='cart__bottom-buttons'>
                    <Link
                      to='/'
                      className='button button--outline button--add go-back-btn'
                    >
                      <ArrowLeftSvg />
                      <span>Вернуться назад</span>
                    </Link>
                    <div className='button pay-btn'>
                      <span>Оплатить сейчас</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Cart;
