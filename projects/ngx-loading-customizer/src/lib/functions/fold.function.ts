import { hasErrored, isIdle, isLoaded } from '../loadable.functions';
import { Loadable } from '../loadable.type';

export function fold<T, S>(
  constructors: {
    idle: () => S;
    loading: () => S;
    loaded: (value: T) => S;
    error: (error: unknown) => S;
  },
  loadable: Loadable<T>
): S {
  if (isLoaded(loadable)) {
    return constructors.loaded(loadable.value);
  } else if (hasErrored(loadable)) {
    return constructors.error(loadable.error);
  } else if (isIdle(loadable)) {
    return constructors.idle();
  } else {
    return constructors.loading();
  }
}
