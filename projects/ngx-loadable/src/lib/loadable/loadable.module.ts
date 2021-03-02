import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsLoadingPipe } from './is-loading.pipe';
import { LoadingStatePipe } from './loading-state.pipe';
import { LoadableComponent } from './loadable/loadable.component';
import { DefaultComponents, ModuleOptions } from './module.options';
import { DEFAULT_COMPONENTS } from './loadable.tokens';

@NgModule({
  declarations: [IsLoadingPipe, LoadingStatePipe, LoadableComponent],
  imports: [CommonModule],
  exports: [IsLoadingPipe, LoadingStatePipe, LoadableComponent],
})
export class LoadableModule {
  public static forRoot(
    options: ModuleOptions = {}
  ): ModuleWithProviders<LoadableModule> {
    return {
      ngModule: LoadableModule,
      providers: [
        {
          provide: DEFAULT_COMPONENTS,
          useValue: options.defaultComponents ?? {},
        },
      ],
    };
  }
}
