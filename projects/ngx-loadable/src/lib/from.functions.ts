import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { errored, loaded, loading } from './loadable.constructors';
import { Loadable } from './loadable.type';

export function fromPromise<T>(promise: Promise<T>): Promise<Loadable<T>> {
  return promise.then(loaded).catch(errored);
}

export function fromObservable<T>(
  observable: Observable<T>
): Observable<Loadable<T>> {
  return observable.pipe(
    map(loaded),
    catchError((error) => of(errored(error))),
    startWith(loading)
  );
}
