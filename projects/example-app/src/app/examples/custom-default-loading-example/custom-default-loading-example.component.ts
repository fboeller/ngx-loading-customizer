import { Component } from '@angular/core';
import { idle } from 'projects/ngx-loadable/src/lib/loadable.constructors';
import { Loadable } from 'projects/ngx-loadable/src/lib/loadable.type';

@Component({
  selector: 'app-custom-default-loading-example',
  templateUrl: './custom-default-loading-example.component.html',
})
export class CustomDefaultLoadingExampleComponent {
  loadable: Loadable<object> = idle;
}
