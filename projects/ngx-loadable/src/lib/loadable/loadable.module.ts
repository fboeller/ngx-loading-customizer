import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsLoadingPipe } from './is-loading.pipe';
import { LoadingStatePipe } from './loading-state.pipe';
import { LoadableComponent } from './loadable/loadable.component';
import { DefaultComponentOptions, ModuleOptions } from './module.options';
import { DEFAULT_LOADING_COMPONENT } from './loadable.tokens';

function defaultComponentProviders(
  options: DefaultComponentOptions
): Provider[] {
  return !!options.loading
    ? [{ provide: DEFAULT_LOADING_COMPONENT, useValue: options.loading }]
    : [];
}

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
      providers: defaultComponentProviders(options.defaultComponents ?? {}),
    };
  }
}
