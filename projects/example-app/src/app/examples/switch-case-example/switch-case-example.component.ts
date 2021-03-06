import { Component } from '@angular/core';
import { toLoadable } from 'projects/ngx-loadable/src/lib/functions/to-loadable.function';
import { idle } from 'projects/ngx-loadable/src/lib/loadable.constructors';
import { Loadable } from 'projects/ngx-loadable/src/lib/loadable.type';
import { Subject, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LoadService } from '../../load.service';

@Component({
  selector: 'app-switch-case-example',
  templateUrl: './switch-case-example.component.html',
})
export class SwitchCaseExampleComponent {
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
