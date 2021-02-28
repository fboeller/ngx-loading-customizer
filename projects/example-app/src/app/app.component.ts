import { Component } from '@angular/core';
import { loaded } from 'projects/ngx-loadable/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly loadable = loaded('Some value');
}
