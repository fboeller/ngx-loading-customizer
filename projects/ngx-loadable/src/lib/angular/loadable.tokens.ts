import { InjectionToken } from '@angular/core';
import { defaultComponents, DefaultComponents } from './module.options';

export const DEFAULT_COMPONENTS = new InjectionToken<DefaultComponents>(
  'DEFAULT_COMPONENTS',
  { factory: () => defaultComponents }
);
