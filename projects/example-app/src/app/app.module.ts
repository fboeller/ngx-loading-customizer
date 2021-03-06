import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SwitchCaseExampleComponent } from './components/switch-case-example/switch-case-example.component';
import { LoadableComponentExampleComponent } from './components/loadable-component-example/loadable-component-example.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { SimpleLoadableComponentExampleComponent } from './components/simple-loadable-component-example/simple-loadable-component-example.component';
import { LoadableModule } from 'projects/ngx-loadable/src/lib/angular/loadable.module';
import { NgrxExampleModule } from './components/ngrx-example/ngrx-example.module';

@NgModule({
  declarations: [
    AppComponent,
    SwitchCaseExampleComponent,
    SimpleLoadableComponentExampleComponent,
    LoadableComponentExampleComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    NgrxExampleModule,
    LoadableModule.forRoot({
      defaultComponents: {
        loading: LoadingSpinnerComponent,
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
