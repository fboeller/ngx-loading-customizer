import { Type } from '@angular/core';
import { LoadableErrorComponent } from './loadable-error/loadable-error.component';

export type DefaultComponents = {
  idle?: Type<{}>;
  loading?: Type<{}>;
  loaded?: Type<{ value: any }>;
  error?: Type<{ error: any }>;
};

export const defaultComponents = {
  error: LoadableErrorComponent,
};

export interface ModuleOptions {
  defaultComponents?: DefaultComponents;
}
