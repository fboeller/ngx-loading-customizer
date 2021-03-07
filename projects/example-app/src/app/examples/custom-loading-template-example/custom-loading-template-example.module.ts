import { NgModule } from '@angular/core';

import { LoadableModule } from 'projects/ngx-loadable/src/lib/angular/loadable.module';
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
    LoadableModule,
  ],
  exports: [CustomLoadingTemplateExampleComponent],
})
export class CustomLoadingTemplateExampleModule {}
