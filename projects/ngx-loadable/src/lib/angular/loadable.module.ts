import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsLoadingPipe } from './is-loading.pipe';
import { LoadingStatePipe } from './loading-state.pipe';
import { LoadableComponent } from './loadable/loadable.component';
import { defaultComponents, ModuleOptions } from './module.options';
import { DEFAULT_COMPONENTS } from './loadable.tokens';
import { LoadableErrorComponent } from './loadable-error/loadable-error.component';
import { LoadableLoadingComponent } from './loadable-loading/loadable-loading.component';

@NgModule({
  declarations: [
    IsLoadingPipe,
    LoadingStatePipe,
    LoadableComponent,
    LoadableErrorComponent,
    LoadableLoadingComponent,
  ],
  imports: [CommonModule],
  exports: [
    IsLoadingPipe,
    LoadingStatePipe,
    LoadableComponent,
    LoadableErrorComponent,
    LoadableLoadingComponent,
  ],
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
          useValue: {
            ...defaultComponents,
            ...options.defaultComponents,
          },
        },
      ],
    };
  }
}
