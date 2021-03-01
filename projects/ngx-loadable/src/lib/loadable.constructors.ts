import { Errored, Idle, Loaded, Loading } from './loadable.type';

export const idle: Idle = { type: 'Idle' };

export const loading: Loading = { type: 'Loading' };

export function loaded<T>(value: T): Loaded<T> {
  return { type: 'Loaded', value };
}

export function errored(error: any): Errored {
  return { type: 'Error', error };
}
