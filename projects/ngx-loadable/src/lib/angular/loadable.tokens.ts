import { InjectionToken } from '@angular/core';
import { DefaultComponents } from './module.options';

export const DEFAULT_COMPONENTS = new InjectionToken<DefaultComponents>(
  'DEFAULT_COMPONENTS'
);
