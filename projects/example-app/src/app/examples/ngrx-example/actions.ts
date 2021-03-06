import { createAction, props } from '@ngrx/store';

export const load = createAction(
  '[Ngrx Example] Load',
  props<{ id: number; error: boolean }>()
);

export const loadSuccess = createAction(
  '[Ngrx Example] Load success',
  props<{ response: unknown }>()
);

export const loadError = createAction(
  '[Ngrx Example] Load error',
  props<{ error: unknown }>()
);
