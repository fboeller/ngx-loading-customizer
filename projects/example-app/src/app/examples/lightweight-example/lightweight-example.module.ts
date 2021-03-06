import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoadableModule } from 'projects/ngx-loadable/src/lib/angular/loadable.module';
import { LightweightExampleComponent } from './lightweight-example.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [LoadingSpinnerComponent, LightweightExampleComponent],
  imports: [BrowserModule, LoadableModule],
  exports: [LightweightExampleComponent],
})
export class LightweightExampleModule {}
