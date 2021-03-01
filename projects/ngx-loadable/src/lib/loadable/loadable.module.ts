import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsLoadingPipe } from './is-loading.pipe';
import { LoadingStatePipe } from './loading-state.pipe';
import { LoadableComponent } from './loadable/loadable.component';

@NgModule({
  declarations: [IsLoadingPipe, LoadingStatePipe, LoadableComponent],
  imports: [CommonModule],
  exports: [IsLoadingPipe, LoadingStatePipe, LoadableComponent],
})
export class LoadableModule {}
