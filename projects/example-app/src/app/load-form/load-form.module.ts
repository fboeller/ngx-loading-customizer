import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadFormComponent } from './load-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [LoadFormComponent],
  exports: [LoadFormComponent],
})
export class LoadFormModule {}
