import { errored, loaded } from '../loadable.constructors';
import { Loadable } from '../loadable.type';

export function fromPromise<T>(promise: Promise<T>): Promise<Loadable<T>> {
  return promise.then(loaded).catch(errored);
}
