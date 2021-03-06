import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoadableModule } from 'projects/ngx-loadable/src/lib/angular/loadable.module';
import { LoadableComponentExampleComponent } from './loadable-component-example.component';

@NgModule({
  declarations: [LoadableComponentExampleComponent],
  imports: [BrowserModule, LoadableModule],
  exports: [LoadableComponentExampleComponent],
})
export class LoadableComponentExampleModule {}
