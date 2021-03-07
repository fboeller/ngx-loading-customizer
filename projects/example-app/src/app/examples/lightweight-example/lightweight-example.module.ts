import { NgModule } from '@angular/core';

import { LoadableModule } from 'projects/ngx-loadable/src/lib/angular/loadable.module';
import { LightweightExampleComponent } from './lightweight-example.component';
import { LoadFormModule } from '../../load-form/load-form.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LightweightExampleComponent],
  imports: [CommonModule, LoadFormModule, LoadableModule],
  exports: [LightweightExampleComponent],
})
export class LightweightExampleModule {}
