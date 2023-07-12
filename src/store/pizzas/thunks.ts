import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchParams, PizzaItem } from './types';

axios.defaults.baseURL = 'https://648f0cf375a96b664444a0cb.mockapi.io/';

export const fetchPizzas = createAsyncThunk<PizzaItem[], FetchParams>(
  'pizzas/fetchPizzas',
  async ({ categoryId, searchVal, sortVal }) => {
    const { data } = await axios(
      `/pizzas?${
        searchVal ? `search=${searchVal}` : `category=${categoryId || ''}`
      }`,
      {
        params: {
          sortBy: sortVal,
        },
      }
    );
    return data;
  }
);
