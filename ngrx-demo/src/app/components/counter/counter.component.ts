import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './store/counter.actions';
import { CommonModule } from '@angular/common';
import { selectCount } from './store/counter.selectors';
import { CounterState } from './store/counter.state';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count$: Observable<number>;
  myNum$: Observable<number>;

  constructor(private store: Store<{ counter: CounterState }>) {
    debugger;
    this.count$ = this.store.select(selectCount);
    this.myNum$ = this.store.select((state) => state.counter.myNum);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
