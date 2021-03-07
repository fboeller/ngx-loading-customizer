import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { toLoadable } from 'projects/ngx-loadable/src/lib/functions/to-loadable.function';
import { Loadable } from 'projects/ngx-loadable/src/public-api';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LoadService } from '../load.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-load-form',
  templateUrl: './load-form.component.html',
  styleUrls: ['./load-form.component.css'],
})
export class LoadFormComponent implements OnInit {
  @Output() loadable = new EventEmitter<Loadable<unknown>>();

  load$ = new Subject<{ id: number; error: boolean }>();

  form = this.fb.group({
    isError: [false],
    loadingTime: [2000],
  });

  constructor(private loadService: LoadService, private fb: FormBuilder) {
    this.load$
      .pipe(
        switchMap(({ id, error }) =>
          this.loadService
            .load(id, error, this.form.value.loadingTime)
            .pipe(toLoadable)
        )
      )
      .subscribe(this.loadable);
  }

  ngOnInit(): void {
    this.load$.next({ id: 42, error: this.form.value.isError });
  }

  load(id: number): void {
    this.load$.next({ id, error: this.form.value.isError });
  }
}
