import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SwitchCaseExampleComponent } from './components/switch-case-example/switch-case-example.component';
import { LoadableComponentExampleComponent } from './components/loadable-component-example/loadable-component-example.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { SimpleLoadableComponentExampleComponent } from './components/simple-loadable-component-example/simple-loadable-component-example.component';
import { NgrxExampleComponent } from './components/ngrx-example/ngrx-example.component';
import { StoreModule } from '@ngrx/store';
import { responseReducer } from './components/ngrx-example/reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoadEffects } from './components/ngrx-example/effects';
import { LoadableModule } from 'projects/ngx-loadable/src/lib/angular/loadable.module';

@NgModule({
  declarations: [
    AppComponent,
    SwitchCaseExampleComponent,
    SimpleLoadableComponentExampleComponent,
    LoadableComponentExampleComponent,
    LoadingSpinnerComponent,
    NgrxExampleComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      response: responseReducer,
    }),
    EffectsModule.forRoot([LoadEffects]),
    LoadableModule.forRoot({
      defaultComponents: {
        loading: LoadingSpinnerComponent,
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
