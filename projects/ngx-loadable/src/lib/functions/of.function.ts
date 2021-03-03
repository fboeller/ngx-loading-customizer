import { loaded } from '../loadable.constructors';
import { Loadable } from '../loadable.type';

export function of<T>(value: T): Loadable<T> {
  return loaded(value);
}
