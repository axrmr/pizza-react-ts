import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import cart from './cart/cartSlice';
import filter from './filter/filterSlice';
import pizzas from './pizzas/pizzasSlice';
import search from './search/searchSlice';

const rootReducer = combineReducers({
  pizzas,
  filter,
  search,
  cart,
});

const persistConfig = {
  key: 'cart',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof persistedReducer>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
