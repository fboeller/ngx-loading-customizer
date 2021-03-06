import { Component, Input } from '@angular/core';

@Component({
  selector: 'ld-loadable-error',
  templateUrl: './loadable-error.component.html',
  styleUrls: ['./loadable-error.component.css'],
})
export class LoadableErrorComponent {
  @Input() error: any;
}
