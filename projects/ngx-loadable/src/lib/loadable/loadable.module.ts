import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsLoadingPipe } from './is-loading.pipe';

@NgModule({
  declarations: [IsLoadingPipe],
  imports: [CommonModule],
})
export class LoadableModule {}
