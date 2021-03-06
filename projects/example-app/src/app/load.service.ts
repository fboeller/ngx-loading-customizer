import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoadService {
  load(id: number, error: boolean, loadingTime: number): Observable<object> {
    const result = error
      ? throwError({
          status: 404,
          data: { message: `An entity with the id ${id} does not exist.` },
        })
      : of({
          id,
          name:
            'Answer to the Ultimate Question of Life, the Universe, and Everything',
        });
    return of({}).pipe(
      delay(loadingTime),
      mergeMap(() => result)
    );
  }
}
