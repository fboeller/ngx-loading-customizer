import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { load } from './actions';
import { selectResponse } from './selector';

@Component({
  selector: 'app-ngrx-example',
  templateUrl: './ngrx-example.component.html',
})
export class NgrxExampleComponent {
  loadable$ = this.store.select(selectResponse);

  constructor(private store: Store) {}

  load(id: number, error: boolean): void {
    this.store.dispatch(load({ id, error }));
  }
}
