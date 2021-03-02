import { Type } from '@angular/core';
import { LoadingState } from '../loadable.type';

export type DefaultComponents = {
  [K in LoadingState]?: Type<unknown>;
};

export interface ModuleOptions {
  defaultComponents?: DefaultComponents;
}
