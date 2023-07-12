import { RootState } from 'store/store';

export const selectCategoryId = (state: RootState) => state.filter.categoryId;
export const selectSortVal = (state: RootState) => state.filter.sortVal;
