import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LoadService } from '../../load.service';
import { load, loadError, loadSuccess } from './actions';

@Injectable()
export class LoadEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(load),
      mergeMap((action) =>
        this.loadService.load(action.id, action.error, 1000).pipe(
          map((response) => loadSuccess({ response })),
          catchError((error) => of(loadError({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private loadService: LoadService) {}
}
