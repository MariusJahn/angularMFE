import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, async } from 'rxjs';
import { increment, decrement, reset } from '../actions/counter.actions';


@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<number>;

  private store: Store<{ count: number }>;

  constructor(store: Store<{ count: number }>) {
    this.store = store;

    this.count$ = store.select('count');
  }

  ngOnInit() {

    console.log(this.count$);

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
