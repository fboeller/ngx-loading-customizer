import { Errored, Loadable, Loaded, Loading } from './loadable.type';

export function isLoading<T>(loadable: Loadable<T>): loadable is Loading {
  return loadable.type === 'Loading';
}

export function hasErrored<T>(loadable: Loadable<T>): loadable is Errored {
  return loadable.type === 'Error';
}

export function isLoaded<T>(loadable: Loadable<T>): loadable is Loaded<T> {
  return loadable.type === 'Loaded';
}

export function map<T, S>(f: (t: T) => S, loadable: Loadable<T>): Loadable<S> {
  return isLoaded(loadable)
    ? { type: 'Loaded', value: f(loadable.value) }
    : loadable;
}
