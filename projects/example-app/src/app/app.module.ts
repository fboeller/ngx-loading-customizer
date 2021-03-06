import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgrxExampleModule } from './examples/ngrx-example/ngrx-example.module';
import { CustomLoadingTemplateExampleModule } from './examples/custom-loading-template-example/custom-loading-template-example.module';
import { DefaultExampleModule } from './examples/default-example/default-example.module';
import { LightweightExampleModule } from './examples/lightweight-example/lightweight-example.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgrxExampleModule,
    CustomLoadingTemplateExampleModule,
    DefaultExampleModule,
    LightweightExampleModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
