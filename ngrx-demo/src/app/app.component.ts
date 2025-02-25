import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { BucketComponent } from './components/bucket/bucket.component';
import { Store } from '@ngrx/store';
import { Grocery } from '../models/grocery.model';
import { selectGroceriesByType } from './store/selectors/grocery.selectors';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, GroceryComponent, BucketComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ngrx-demo';
  // selectors are memoized means they are only called once and then stored in cache.
  // constructor(private store: Store<{ groceries: Grocery[] }>) {
  //   store.select(selectGroceriesByType).subscribe((data) => {
  //     console.log('Hello from app component: ', data);
  //   });
  // }
}
