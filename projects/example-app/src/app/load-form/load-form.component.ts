import { Component, EventEmitter, Output } from '@angular/core';
import { toLoadable } from 'projects/ngx-loadable/src/lib/functions/to-loadable.function';
import { Loadable } from 'projects/ngx-loadable/src/public-api';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LoadService } from '../load.service';

@Component({
  selector: 'app-load-form',
  templateUrl: './load-form.component.html',
  styleUrls: ['./load-form.component.css'],
})
export class LoadFormComponent {
  @Output() loadable = new EventEmitter<Loadable<unknown>>();

  load$ = new Subject<{ id: number; error: boolean }>();

  constructor(private loadService: LoadService) {
    this.load$
      .pipe(
        switchMap(({ id, error }) =>
          this.loadService.load(id, error).pipe(toLoadable)
        )
      )
      .subscribe(this.loadable);
  }

  load(id: number, error: boolean): void {
    this.load$.next({ id, error });
  }
}
