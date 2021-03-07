import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoadableModule } from 'projects/ngx-loadable/src/lib/angular/loadable.module';
import { LoadFormModule } from '../../load-form/load-form.module';
import { CustomDefaultLoadingExampleComponent } from './custom-default-loading-example.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [CustomDefaultLoadingExampleComponent, LoadingSpinnerComponent],
  imports: [BrowserModule, LoadFormModule, LoadableModule],
  exports: [CustomDefaultLoadingExampleComponent],
})
export class CustomDefaultLoadingExampleModule {}
