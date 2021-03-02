import { Type } from '@angular/core';

export interface DefaultComponents {
  loading?: Type<unknown>;
}

export interface ModuleOptions {
  defaultComponents?: DefaultComponents;
}
