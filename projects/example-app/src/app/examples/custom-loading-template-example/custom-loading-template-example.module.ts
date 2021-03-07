import { NgModule } from '@angular/core';

import { LoadingCustomizerModule } from 'projects/ngx-loading-customizer/src/lib/angular/loading-customizer.module';
import { CustomLoadingTemplateExampleComponent } from './custom-loading-template-example.component';
import { LoadFormModule } from '../../load-form/load-form.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CustomLoadingTemplateExampleComponent],
  imports: [
    CommonModule,
    LoadFormModule,
    RouterModule.forChild([
      {
        path: '',
        component: CustomLoadingTemplateExampleComponent,
      },
    ]),
    LoadingCustomizerModule,
  ],
  exports: [CustomLoadingTemplateExampleComponent],
})
export class CustomLoadingTemplateExampleModule {}
