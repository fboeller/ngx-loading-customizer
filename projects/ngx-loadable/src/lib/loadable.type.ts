export type LoadingState = 'Loading' | 'Loaded' | 'Error';

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

export type Loadable<T> = Loading | Loaded<T> | Errored;

export interface ILoadable {
  type: LoadingState;
}
