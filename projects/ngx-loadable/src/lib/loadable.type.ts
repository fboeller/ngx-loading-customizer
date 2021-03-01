export type LoadingState = 'Idle' | 'Loading' | 'Loaded' | 'Error';

export const loadingStates = ['Idle', 'Loading', 'Loaded', 'Error'];

export interface Idle extends ILoadable {
  type: 'Idle';
}

export interface Loading extends ILoadable {
  type: 'Loading';
}

export interface Loaded<T> extends ILoadable {
  type: 'Loaded';
  value: T;
}

export interface Errored extends ILoadable {
  type: 'Error';
  error: any;
}

export type Loadable<T> = Idle | Loading | Loaded<T> | Errored;

export interface ILoadable {
  type: LoadingState;
}
