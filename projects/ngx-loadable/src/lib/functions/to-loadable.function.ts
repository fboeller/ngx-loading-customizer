import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { errored, loaded, loading } from '../loadable.constructors';
import { Loadable } from '../loadable.type';

export function toLoadable<T>(
  observable: Observable<T>
): Observable<Loadable<T>> {
  return observable.pipe(
    map(loaded),
    catchError((error) => of(errored(error))),
    startWith(loading)
  );
}
