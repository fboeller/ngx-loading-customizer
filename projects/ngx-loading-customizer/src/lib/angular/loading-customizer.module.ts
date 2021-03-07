import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsLoadingPipe } from './is-loading.pipe';
import { LoadingStatePipe } from './loading-state.pipe';
import { LoadableComponent } from './loadable/loadable.component';
import { defaultComponents, ModuleOptions } from './module.options';
import { DEFAULT_COMPONENTS } from './loadable.tokens';
import { LoadableErrorComponent } from './loadable-error/loadable-error.component';
import { LoadableLoadingComponent } from './loadable-loading/loadable-loading.component';
import { LoadedValuePipe } from './loaded-value.pipe';

@NgModule({
  declarations: [
    IsLoadingPipe,
    LoadedValuePipe,
    LoadingStatePipe,
    LoadableComponent,
    LoadableErrorComponent,
    LoadableLoadingComponent,
  ],
  imports: [CommonModule],
  exports: [
    IsLoadingPipe,
    LoadedValuePipe,
    LoadingStatePipe,
    LoadableComponent,
    LoadableErrorComponent,
    LoadableLoadingComponent,
  ],
  entryComponents: [LoadableLoadingComponent, LoadableErrorComponent],
})
export class LoadingCustomizerModule {
  public static forRoot(
    options: ModuleOptions = {}
  ): ModuleWithProviders<LoadingCustomizerModule> {
    return {
      ngModule: LoadingCustomizerModule,
      providers: [
        {
          provide: DEFAULT_COMPONENTS,
          useValue: {
            ...defaultComponents,
            ...options.defaultComponents,
          },
        },
      ],
    };
  }
}
