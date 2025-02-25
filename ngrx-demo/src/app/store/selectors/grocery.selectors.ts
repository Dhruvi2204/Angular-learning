import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Grocery } from '../../../models/grocery.model';

// export const selectGroceries = (state: {groceries: Grocery[]})=> state.groceries
export const selectGroceries = createFeatureSelector<Grocery[]>('groceries');

export const selectGroceriesByType = (type: string) =>
  createSelector(selectGroceries, (state) => {
    console.log('Hello from Grocery selector!');
    return state.filter((item) => item.type === type);
  });
