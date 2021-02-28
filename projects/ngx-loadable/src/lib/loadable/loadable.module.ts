import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsLoadingPipe } from './is-loading.pipe';
import { LoadingStatePipe } from './loading-state.pipe';

@NgModule({
  declarations: [IsLoadingPipe, LoadingStatePipe],
  imports: [CommonModule],
})
export class LoadableModule {}
