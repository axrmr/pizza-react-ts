import { RootState } from 'store/store';

export const selectSearchVal = (state: RootState) => state.search.searchVal;
