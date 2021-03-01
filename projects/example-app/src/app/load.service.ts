import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoadService {
  load(id: number): Observable<string> {
    return of(`value ${id}`).pipe(delay(1000));
  }
}
