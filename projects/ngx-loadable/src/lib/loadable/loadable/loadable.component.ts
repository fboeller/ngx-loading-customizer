import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import {
  getLoadingState,
  hasErrored,
  isLoaded,
  isLoading,
} from '../../loadable.functions';
import { Loadable } from '../../loadable.type';
import { DEFAULT_COMPONENTS } from '../loadable.tokens';
import { DefaultComponents } from '../module.options';

@Component({
  selector: 'ld-loadable',
  templateUrl: './loadable.component.html',
  styleUrls: ['./loadable.component.css'],
})
export class LoadableComponent implements OnChanges, OnDestroy {
  @Input() loadable!: Loadable<unknown>;

  @Input() idle?: TemplateRef<void>;
  @Input() loading?: TemplateRef<void>;
  @Input() loaded?: TemplateRef<{ value: any }>;
  @Input() error?: TemplateRef<{ error: any }>;

  @ViewChild('content', { read: ViewContainerRef })
  content!: ViewContainerRef;

  defaultLoadingComponentRef?: ComponentRef<unknown>;

  readonly onChanges$ = new Subject<SimpleChanges>();
  readonly onDestroy$ = new Subject<SimpleChanges>();

  get templateRef(): TemplateRef<unknown> | undefined {
    switch (getLoadingState(this.loadable)) {
      case 'Idle':
        return this.idle;
      case 'Loading':
        return this.loading;
      case 'Loaded':
        return this.loaded;
      case 'Error':
        return this.error;
    }
  }

  get templateContext(): unknown {
    if (isLoaded(this.loadable)) {
      return { value: this.loadable.value };
    } else if (hasErrored(this.loadable)) {
      return { error: this.loadable.error };
    } else {
      return undefined;
    }
  }

  constructor(
    resolver: ComponentFactoryResolver,
    @Inject(DEFAULT_COMPONENTS) defaultComponents: DefaultComponents
  ) {
    this.onChanges$
      .pipe(
        filter((changes) => 'loadable' in changes),
        map((changes) => changes.loadable.currentValue),
        takeUntil(this.onDestroy$)
      )
      .subscribe((loadable) => {
        if (defaultComponents.loading) {
          if (isLoading(loadable)) {
            this.content.clear();
            const factory = resolver.resolveComponentFactory(
              defaultComponents.loading
            );
            this.defaultLoadingComponentRef = this.content.createComponent(
              factory
            );
          } else {
            this.defaultLoadingComponentRef?.destroy();
          }
        }
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onChanges$.next(changes);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
