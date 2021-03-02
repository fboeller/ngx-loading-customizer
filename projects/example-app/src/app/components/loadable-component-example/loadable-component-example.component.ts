import { Component } from '@angular/core';
import { toLoadable } from 'projects/ngx-loadable/src/lib/from.functions';
import { idle } from 'projects/ngx-loadable/src/lib/loadable.constructors';
import { Loadable } from 'projects/ngx-loadable/src/lib/loadable.type';
import { BehaviorSubject, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LoadService } from '../../load.service';

@Component({
  selector: 'app-loadable-component-example',
  templateUrl: './loadable-component-example.component.html',
  styleUrls: ['./loadable-component-example.component.css'],
})
export class LoadableComponentExampleComponent {
  load$ = new Subject<number>();
  loadable$ = new BehaviorSubject(idle as Loadable<string>);

  constructor(private loadService: LoadService) {
    this.load$
      .pipe(switchMap((id) => this.loadService.load(id).pipe(toLoadable)))
      .subscribe(this.loadable$);
  }

  load(id: number): void {
    this.load$.next(id);
  }
}