import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import './scss/app.scss';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import Home from 'pages/Home';

const Cart = React.lazy(() => import('pages/Cart'));
const ErrorPage = React.lazy(() => import('pages/ErrorPage'));

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
