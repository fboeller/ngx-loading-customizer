import { Type } from '@angular/core';

export type DefaultComponents = {
  idle?: Type<{}>;
  loading?: Type<{}>;
  loaded?: Type<{ value: any }>;
  error?: Type<{ error: any }>;
};

export interface ModuleOptions {
  defaultComponents?: DefaultComponents;
}
