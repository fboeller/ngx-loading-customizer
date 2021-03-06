import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoadableModule } from 'projects/ngx-loadable/src/lib/angular/loadable.module';
import { DefaultExampleComponent } from './default-example.component';

@NgModule({
  declarations: [DefaultExampleComponent],
  imports: [BrowserModule, LoadableModule],
  exports: [DefaultExampleComponent],
})
export class DefaultExampleModule {}
