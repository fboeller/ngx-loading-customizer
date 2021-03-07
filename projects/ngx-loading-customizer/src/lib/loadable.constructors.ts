import { Errored, Idle, Loaded, Loading } from './loadable.type';

export const idle: Idle = { type: 'idle' };

export const loading: Loading = { type: 'loading' };

export function loaded<T>(value: T): Loaded<T> {
  return { type: 'loaded', value };
}

export function errored(error: any): Errored {
  return { type: 'error', error };
}
