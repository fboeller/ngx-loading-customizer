import { Component } from '@angular/core';
import { idle } from 'projects/ngx-loading-customizer/src/lib/loadable.constructors';
import { Loadable } from 'projects/ngx-loading-customizer/src/lib/loadable.type';

@Component({
  selector: 'app-default-example',
  templateUrl: './default-example.component.html',
  styleUrls: ['./default-example.component.css'],
})
export class DefaultExampleComponent {
  loadable: Loadable<object> = idle;
}
