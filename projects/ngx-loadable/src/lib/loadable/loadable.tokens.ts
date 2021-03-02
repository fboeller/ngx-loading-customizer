import { InjectionToken, Type } from '@angular/core';

export const DEFAULT_LOADING_COMPONENT = new InjectionToken<Type<unknown>>(
  'DEFAULT_LOADING_COMPONENT'
);
