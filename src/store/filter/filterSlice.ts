import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilterState } from './types';

const initialState: FilterState = { categoryId: 0, sortVal: 'rating' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, { payload }: PayloadAction<number>) {
      state.categoryId = Number(payload) || 0;
    },
    setSortVal(state, { payload }: PayloadAction<string>) {
      state.sortVal = payload || 'rating';
    },
  },
});

export const { setCategoryId, setSortVal } = filterSlice.actions;

export default filterSlice.reducer;
