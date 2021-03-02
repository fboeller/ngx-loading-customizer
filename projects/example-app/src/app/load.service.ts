import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoadService {
  load(id: number, error: boolean): Observable<string> {
    const result = error ? throwError(`error ${id}`) : of(`value ${id}`);
    return of({}).pipe(
      delay(1000),
      mergeMap(() => result)
    );
  }
}
