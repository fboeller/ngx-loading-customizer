import { NgModule } from '@angular/core';

import { LoadingCustomizerModule } from 'projects/ngx-loading-customizer/src/lib/angular/loading-customizer.module';
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
    LoadingCustomizerModule,
  ],
  exports: [LightweightExampleComponent],
})
export class LightweightExampleModule {}
