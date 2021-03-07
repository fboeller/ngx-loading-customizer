import { Component } from '@angular/core';
import { idle } from 'projects/ngx-loading-customizer/src/lib/loadable.constructors';
import { Loadable } from 'projects/ngx-loading-customizer/src/lib/loadable.type';

@Component({
  selector: 'app-custom-loading-template-example',
  templateUrl: './custom-loading-template-example.component.html',
  styleUrls: ['./custom-loading-template-example.component.css'],
})
export class CustomLoadingTemplateExampleComponent {
  loadable: Loadable<object> = idle;
}
