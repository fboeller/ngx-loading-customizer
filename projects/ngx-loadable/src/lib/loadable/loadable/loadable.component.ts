import { Component, Input, TemplateRef } from '@angular/core';
import { Loadable } from '../../loadable.type';

@Component({
  selector: 'ld-loadable',
  templateUrl: './loadable.component.html',
  styleUrls: ['./loadable.component.css'],
})
export class LoadableComponent {
  @Input() loadable!: Loadable<unknown>;

  @Input() loaded?: TemplateRef<{ value: any }>;
}
