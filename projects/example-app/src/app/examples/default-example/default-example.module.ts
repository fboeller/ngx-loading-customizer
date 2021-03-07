import { NgModule } from '@angular/core';

import { LoadableModule } from 'projects/ngx-loadable/src/lib/angular/loadable.module';
import { DefaultExampleComponent } from './default-example.component';
import { LoadFormModule } from '../../load-form/load-form.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DefaultExampleComponent],
  imports: [CommonModule, LoadFormModule, LoadableModule],
  exports: [DefaultExampleComponent],
})
export class DefaultExampleModule {}
