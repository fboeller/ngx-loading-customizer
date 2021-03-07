import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgrxExampleModule } from './examples/ngrx-example/ngrx-example.module';
import { CustomLoadingTemplateExampleModule } from './examples/custom-loading-template-example/custom-loading-template-example.module';
import { DefaultExampleModule } from './examples/default-example/default-example.module';
import { LightweightExampleModule } from './examples/lightweight-example/lightweight-example.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'custom-default-loading-example',
        loadChildren: () =>
          import(
            './examples/custom-default-loading-example/custom-default-loading-example.module'
          ).then((m) => m.CustomDefaultLoadingExampleModule),
      },
    ]),
    NgrxExampleModule,
    CustomLoadingTemplateExampleModule,
    DefaultExampleModule,
    LightweightExampleModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
