import { NgModule } from '@angular/core';

import { LoadingCustomizerModule } from 'projects/ngx-loading-customizer/src/lib/angular/loading-customizer.module';
import { DefaultExampleComponent } from './default-example.component';
import { LoadFormModule } from '../../load-form/load-form.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DefaultExampleComponent],
  imports: [
    CommonModule,
    LoadFormModule,
    RouterModule.forChild([
      {
        path: '',
        component: DefaultExampleComponent,
      },
    ]),
    LoadingCustomizerModule,
  ],
  exports: [DefaultExampleComponent],
})
export class DefaultExampleModule {}
