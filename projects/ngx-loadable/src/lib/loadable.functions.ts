import {
  Errored,
  Idle,
  Loadable,
  Loaded,
  Loading,
  LoadingState,
  loadingStates,
} from './loadable.type';

export function isIdle<T>(loadable: Loadable<T>): loadable is Idle {
  return loadable.type === 'idle';
}

export function isLoading<T>(loadable: Loadable<T>): loadable is Loading {
  return loadable.type === 'loading';
}

export function hasErrored<T>(loadable: Loadable<T>): loadable is Errored {
  return loadable.type === 'error';
}

export function isLoaded<T>(loadable: Loadable<T>): loadable is Loaded<T> {
  return loadable.type === 'loaded';
}

export function isLoadable<T>(object: unknown): object is Loadable<T> {
  return (
    typeof object === 'object' &&
    !!object &&
    'type' in object &&
    loadingStates.includes((object as { type: LoadingState }).type)
  );
}

export function getLoadingState<T>(loadable: Loadable<T>): LoadingState {
  return loadable.type;
}

export function map<T, S>(f: (t: T) => S, loadable: Loadable<T>): Loadable<S> {
  return isLoaded(loadable)
    ? { type: 'loaded', value: f(loadable.value) }
    : loadable;
}
