import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoadableModule } from 'projects/ngx-loadable/src/lib/angular/loadable.module';
import { CustomLoadingTemplateExampleComponent } from './custom-loading-template-example.component';
import { LoadFormModule } from '../../load-form/load-form.module';

@NgModule({
  declarations: [CustomLoadingTemplateExampleComponent],
  imports: [BrowserModule, LoadFormModule, LoadableModule],
  exports: [CustomLoadingTemplateExampleComponent],
})
export class CustomLoadingTemplateExampleModule {}
