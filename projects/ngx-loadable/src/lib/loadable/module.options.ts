import { Type } from '@angular/core';

export interface DefaultComponentOptions {
  loading?: Type<unknown>;
}

export interface ModuleOptions {
  defaultComponents?: DefaultComponentOptions;
}
