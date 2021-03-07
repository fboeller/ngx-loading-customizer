import { NgModule } from '@angular/core';

import { LoadableModule } from 'projects/ngx-loading-customizer/src/lib/angular/loadable.module';
import { LightweightExampleComponent } from './lightweight-example.component';
import { LoadFormModule } from '../../load-form/load-form.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LightweightExampleComponent],
  imports: [
    CommonModule,
    LoadFormModule,
    RouterModule.forChild([
      {
        path: '',
        component: LightweightExampleComponent,
      },
    ]),
    LoadableModule,
  ],
  exports: [LightweightExampleComponent],
})
export class LightweightExampleModule {}
