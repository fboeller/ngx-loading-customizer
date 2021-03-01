import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoadableModule } from 'projects/ngx-loadable/src/public-api';
import { SwitchCaseExampleComponent } from './components/switch-case-example/switch-case-example.component';
import { LoadableComponentExampleComponent } from './components/loadable-component-example/loadable-component-example.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchCaseExampleComponent,
    LoadableComponentExampleComponent,
  ],
  imports: [BrowserModule, LoadableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
