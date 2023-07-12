import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import cls from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={cls.wrapper}>
      <span className={cls.icon}>😕</span>
      <h2 className={cls.title}> Ничего не найдено</h2>
      <p className={cls.descr}>
        К сожалению данная страница отсутствует в нашем интернет-магазине.
      </p>
      <Link to='/' className={cls.btn}>
        <AiOutlineHome size={26} />
        На главную
      </Link>
    </div>
  );
};

export default NotFound;
