import { createFeatureSelector } from '@ngrx/store';
import { Loadable } from 'projects/ngx-loadable/src/lib/loadable.type';

export const selectResponse = createFeatureSelector<Loadable<unknown>>(
  'response'
);
