import { Loadable } from '../loadable.type';
import { flatMap } from './flap-map.function';
import { of } from './of.function';

export function map<T, S>(f: (t: T) => S, loadable: Loadable<T>): Loadable<S> {
  return flatMap((t) => of(f(t)), loadable);
}
