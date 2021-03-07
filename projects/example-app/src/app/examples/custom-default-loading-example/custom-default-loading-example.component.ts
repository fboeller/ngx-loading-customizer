import { Component } from '@angular/core';
import { idle } from 'projects/ngx-loading-customizer/src/lib/loadable.constructors';
import { Loadable } from 'projects/ngx-loading-customizer/src/lib/loadable.type';

@Component({
  selector: 'app-custom-default-loading-example',
  templateUrl: './custom-default-loading-example.component.html',
  styleUrls: ['./custom-default-loading-example.component.css'],
})
export class CustomDefaultLoadingExampleComponent {
  loadable: Loadable<object> = idle;
}
