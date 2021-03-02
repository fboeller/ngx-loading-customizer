import { Component } from '@angular/core';
import { toLoadable } from 'projects/ngx-loadable/src/lib/from.functions';
import { idle } from 'projects/ngx-loadable/src/lib/loadable.constructors';
import { Loadable } from 'projects/ngx-loadable/src/lib/loadable.type';
import { BehaviorSubject, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LoadService } from '../../load.service';

@Component({
  selector: 'app-simple-loadable-component-example',
  templateUrl: './simple-loadable-component-example.component.html',
  styleUrls: ['./simple-loadable-component-example.component.css'],
})
export class SimpleLoadableComponentExampleComponent {
  load$ = new Subject<{ id: number; error: boolean }>();
  loadable$ = new BehaviorSubject(idle as Loadable<object>);

  constructor(private loadService: LoadService) {
    this.load$
      .pipe(
        switchMap(({ id, error }) =>
          this.loadService.load(id, error).pipe(toLoadable)
        )
      )
      .subscribe(this.loadable$);
  }

  load(id: number, error: boolean): void {
    this.load$.next({ id, error });
  }
}
