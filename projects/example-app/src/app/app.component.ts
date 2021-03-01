import { Component } from '@angular/core';
import { fromObservable, Loadable } from 'projects/ngx-loadable/src/public-api';
import { Observable, Subject } from 'rxjs';
import { delay, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  load$ = new Subject<void>();
  loadable$ = this.load$.pipe(mapTo('Some value'), fromObservable, delay(1000));

  load(): void {
    this.load$.next();
  }
}
