import { NgModule } from '@angular/core';

import { NgrxExampleComponent } from './ngrx-example.component';
import { StoreModule } from '@ngrx/store';
import { responseReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoadEffects } from './effects';
import { LoadableModule } from 'projects/ngx-loadable/src/lib/angular/loadable.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgrxExampleComponent],
  imports: [
    CommonModule,
    LoadableModule,
    StoreModule.forRoot({
      response: responseReducer,
    }),
    EffectsModule.forRoot([LoadEffects]),
  ],
  exports: [NgrxExampleComponent],
})
export class NgrxExampleModule {}
