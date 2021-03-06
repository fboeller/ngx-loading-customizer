import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoadableModule } from 'projects/ngx-loadable/src/lib/angular/loadable.module';
import { DefaultExampleComponent } from './default-example.component';
import { LoadFormModule } from '../../load-form/load-form.module';

@NgModule({
  declarations: [DefaultExampleComponent],
  imports: [BrowserModule, LoadFormModule, LoadableModule],
  exports: [DefaultExampleComponent],
})
export class DefaultExampleModule {}
