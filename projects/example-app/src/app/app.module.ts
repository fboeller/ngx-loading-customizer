import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  DEFAULT_LOADING_COMPONENT,
  LoadableModule,
} from 'projects/ngx-loadable/src/public-api';
import { SwitchCaseExampleComponent } from './components/switch-case-example/switch-case-example.component';
import { LoadableComponentExampleComponent } from './components/loadable-component-example/loadable-component-example.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchCaseExampleComponent,
    LoadableComponentExampleComponent,
    LoadingSpinnerComponent,
  ],
  imports: [BrowserModule, LoadableModule],
  providers: [
    { provide: DEFAULT_LOADING_COMPONENT, useValue: LoadingSpinnerComponent },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
