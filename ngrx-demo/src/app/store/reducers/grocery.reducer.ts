import { createReducer } from '@ngrx/store';
// import { Grocery } from '../state/grocery.state';
import { Grocery } from '../../../models/grocery.model';
import { GroceryState } from '../state/grocery.state';

// ! Grocery is an interface with id, name and type as an object
const initialState: GroceryState = [
  { id: 1, name: 'Apple', type: 'fruit' },
  { id: 2, name: 'Mango', type: 'fruit' },
  { id: 3, name: 'chips', type: 'snacks' },
  { id: 4, name: 'nachos', type: 'snacks' },
];

export const groceryReducer = createReducer(initialState);
