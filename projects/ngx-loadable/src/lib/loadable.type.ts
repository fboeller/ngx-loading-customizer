export type Loading = { type: 'Loading' };

export type Loaded<T> = { type: 'Loaded'; value: T };

export type Errored = { type: 'Error'; error: any };

export type Loadable<T> = Loading | Loaded<T> | Errored;
