import { Action, createReducer, on } from '@ngrx/store';
import {
  errored,
  idle,
  loaded,
  loading,
} from 'projects/ngx-loading-customizer/src/lib/loadable.constructors';
import { Loadable } from 'projects/ngx-loading-customizer/src/lib/loadable.type';
import { load, loadError, loadSuccess } from './actions';

const reducer = createReducer(
  idle as Loadable<unknown>,
  on(load, (_) => loading),
  on(loadSuccess, (_, { response }) => loaded(response)),
  on(loadError, (_, { error }) => errored(error))
);

export function responseReducer(
  state: Loadable<unknown> | undefined,
  action: Action
): Loadable<unknown> {
  return reducer(state, action);
}
