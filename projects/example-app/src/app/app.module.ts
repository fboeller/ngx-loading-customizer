import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoadableModule } from 'projects/ngx-loadable/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LoadableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
