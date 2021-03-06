import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoadableModule } from 'projects/ngx-loadable/src/lib/angular/loadable.module';
import { SwitchCaseExampleComponent } from './switch-case-example.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [LoadingSpinnerComponent, SwitchCaseExampleComponent],
  imports: [BrowserModule, LoadableModule],
  exports: [SwitchCaseExampleComponent],
})
export class SwitchCaseExampleModule {}
