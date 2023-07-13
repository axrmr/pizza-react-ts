import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import Loader from 'components/ui/Loader/Loader';
import cls from './SharedLayout.module.scss';

const SharedLayout: React.FC = () => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.container}>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default SharedLayout;
