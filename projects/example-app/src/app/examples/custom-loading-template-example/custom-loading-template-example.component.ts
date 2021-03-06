import { Component } from '@angular/core';
import { idle } from 'projects/ngx-loadable/src/lib/loadable.constructors';
import { Loadable } from 'projects/ngx-loadable/src/lib/loadable.type';

@Component({
  selector: 'app-custom-loading-template-example',
  templateUrl: './custom-loading-template-example.component.html',
})
export class CustomLoadingTemplateExampleComponent {
  loadable: Loadable<object> = idle;
}