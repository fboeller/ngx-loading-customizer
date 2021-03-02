import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoadableModule } from 'projects/ngx-loadable/src/public-api';
import { SwitchCaseExampleComponent } from './components/switch-case-example/switch-case-example.component';
import { LoadableComponentExampleComponent } from './components/loadable-component-example/loadable-component-example.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { JsonErrorComponent } from './components/json-error/json-error.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchCaseExampleComponent,
    LoadableComponentExampleComponent,
    LoadingSpinnerComponent,
    JsonErrorComponent,
  ],
  imports: [
    BrowserModule,
    LoadableModule.forRoot({
      defaultComponents: {
        loading: LoadingSpinnerComponent,
        error: JsonErrorComponent,
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
