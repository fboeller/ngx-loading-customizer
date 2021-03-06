import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgrxExampleModule } from './components/ngrx-example/ngrx-example.module';
import { LoadableComponentExampleModule } from './components/loadable-component-example/loadable-component-example.module';
import { SimpleLoadableComponentExampleModule } from './components/simple-loadable-component-example/simple-loadable-component-example.module';
import { SwitchCaseExampleModule } from './components/switch-case-example/switch-case-example.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgrxExampleModule,
    LoadableComponentExampleModule,
    SimpleLoadableComponentExampleModule,
    SwitchCaseExampleModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
