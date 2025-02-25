import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CounterState } from './counter.state';
export const selectCounterState =
  createFeatureSelector<CounterState>('counter');
export const selectCount = createSelector(
  selectCounterState,
  (state) => state.count
);

// export const selectNum = createSelector(
//   selectCounterState,
//   (state) => state.myNum
// );
