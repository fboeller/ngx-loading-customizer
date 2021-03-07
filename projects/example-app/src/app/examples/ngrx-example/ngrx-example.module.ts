import { NgModule } from '@angular/core';

import { NgrxExampleComponent } from './ngrx-example.component';
import { StoreModule } from '@ngrx/store';
import { responseReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoadEffects } from './effects';
import { LoadingCustomizerModule } from 'projects/ngx-loading-customizer/src/lib/angular/loading-customizer.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NgrxExampleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NgrxExampleComponent,
      },
    ]),
    LoadingCustomizerModule,
    StoreModule.forRoot({
      response: responseReducer,
    }),
    EffectsModule.forRoot([LoadEffects]),
  ],
})
export class NgrxExampleModule {}
