import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoadableModule } from 'projects/ngx-loadable/src/lib/angular/loadable.module';
import { LightweightExampleComponent } from './lightweight-example.component';
import { LoadFormModule } from '../../load-form/load-form.module';

@NgModule({
  declarations: [LightweightExampleComponent],
  imports: [BrowserModule, LoadFormModule, LoadableModule],
  exports: [LightweightExampleComponent],
})
export class LightweightExampleModule {}
