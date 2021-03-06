import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoadableModule } from 'projects/ngx-loadable/src/lib/angular/loadable.module';
import { SimpleLoadableComponentExampleComponent } from './simple-loadable-component-example.component';

@NgModule({
  declarations: [SimpleLoadableComponentExampleComponent],
  imports: [BrowserModule, LoadableModule],
  exports: [SimpleLoadableComponentExampleComponent],
})
export class SimpleLoadableComponentExampleModule {}
