import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-json-error',
  templateUrl: './json-error.component.html',
  styleUrls: ['./json-error.component.css'],
})
export class JsonErrorComponent {
  @Input() error: any;
}
