import { isLoaded } from '../loadable.functions';
import { Loadable } from '../loadable.type';

export function map<T, S>(f: (t: T) => S, loadable: Loadable<T>): Loadable<S> {
  return isLoaded(loadable)
    ? { type: 'loaded', value: f(loadable.value) }
    : loadable;
}
