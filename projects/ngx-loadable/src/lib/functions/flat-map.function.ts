import { isLoaded } from '../loadable.functions';
import { Loadable } from '../loadable.type';

export function flatMap<T, S>(
  f: (t: T) => Loadable<S>,
  loadable: Loadable<T>
): Loadable<S> {
  return isLoaded(loadable) ? f(loadable.value) : loadable;
}
