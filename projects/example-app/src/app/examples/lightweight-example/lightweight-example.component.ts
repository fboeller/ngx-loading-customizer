import { Component } from '@angular/core';
import { idle } from 'projects/ngx-loadable/src/lib/loadable.constructors';
import { Loadable } from 'projects/ngx-loadable/src/lib/loadable.type';

@Component({
  selector: 'app-lightweight-example',
  templateUrl: './lightweight-example.component.html',
})
export class LightweightExampleComponent {
  loadable: Loadable<object> = idle;
}
