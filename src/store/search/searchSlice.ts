import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SearchState } from './types';

const initialState: SearchState = {
  searchVal: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchVal(state, { payload }: PayloadAction<string>) {
      state.searchVal = payload;
    },
  },
});

export const { setSearchVal } = searchSlice.actions;

export default searchSlice.reducer;
