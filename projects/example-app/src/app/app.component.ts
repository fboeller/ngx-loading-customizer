import { Component } from '@angular/core';
import { toLoadable } from 'projects/ngx-loadable/src/lib/from.functions';
import { idle } from 'projects/ngx-loadable/src/lib/loadable.constructors';
import { Loadable } from 'projects/ngx-loadable/src/lib/loadable.type';
import { BehaviorSubject, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LoadService } from './load.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
