import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoadableModule } from 'projects/ngx-loadable/src/lib/angular/loadable.module';
import { CustomLoadingTemplateExampleComponent } from './custom-loading-template-example.component';

@NgModule({
  declarations: [CustomLoadingTemplateExampleComponent],
  imports: [BrowserModule, LoadableModule],
  exports: [CustomLoadingTemplateExampleComponent],
})
export class CustomLoadingTemplateExampleModule {}
