import { NgModule } from '@angular/core';

import { LoadingCustomizerModule } from 'projects/ngx-loading-customizer/src/lib/angular/loading-customizer.module';
import { LoadFormModule } from '../../load-form/load-form.module';
import { CustomDefaultLoadingExampleComponent } from './custom-default-loading-example.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CustomDefaultLoadingExampleComponent, LoadingSpinnerComponent],
  imports: [
    CommonModule,
    LoadFormModule,
    RouterModule.forChild([
      {
        path: '',
        component: CustomDefaultLoadingExampleComponent,
      },
    ]),
    LoadingCustomizerModule.forRoot({
      defaultComponents: {
        loading: LoadingSpinnerComponent,
      },
    }),
  ],
})
export class CustomDefaultLoadingExampleModule {}
