export type LoadingState = 'idle' | 'loading' | 'loaded' | 'error';

export const loadingStates: LoadingState[] = [
  'idle',
  'loading',
  'loaded',
  'error',
];

export interface Idle extends ILoadable {
  type: 'idle';
}

export interface Loading extends ILoadable {
  type: 'loading';
}

export interface Loaded<T> extends ILoadable {
  type: 'loaded';
  value: T;
}

export interface Errored extends ILoadable {
  type: 'error';
  error: any;
}

export type Loadable<T> = Idle | Loading | Loaded<T> | Errored;

export interface ILoadable {
  type: LoadingState;
}
