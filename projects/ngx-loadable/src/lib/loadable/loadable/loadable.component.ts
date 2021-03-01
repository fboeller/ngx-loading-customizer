import { Component, Input } from '@angular/core';
import { Loadable } from '../../loadable.type';

@Component({
  selector: 'ld-loadable',
  templateUrl: './loadable.component.html',
  styleUrls: ['./loadable.component.css'],
})
export class LoadableComponent {
  @Input() loadable!: Loadable<unknown>;

  constructor() {}
}
