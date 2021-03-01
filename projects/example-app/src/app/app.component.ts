import { Component } from '@angular/core';
import { fromObservable } from 'projects/ngx-loadable/src/lib/from.functions';
import { idle } from 'projects/ngx-loadable/src/lib/loadable.constructors';
import { Loadable } from 'projects/ngx-loadable/src/lib/loadable.type';
import { BehaviorSubject, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LoadService } from './load.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  load$ = new Subject<number>();
  loadable$ = new BehaviorSubject(idle as Loadable<string>);

  constructor(private loadService: LoadService) {
    this.load$
      .pipe(switchMap((id) => this.loadService.load(id).pipe(fromObservable)))
      .subscribe(this.loadable$);
  }

  load(id: number): void {
    this.load$.next(id);
  }
}
