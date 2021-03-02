import {
  Component,
  ComponentFactory,
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
import { Observable, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { isLoading } from '../../loadable.functions';
import { Loadable } from '../../loadable.type';
import { DEFAULT_LOADING_COMPONENT } from '../loadable.tokens';

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

  constructor(
    resolver: ComponentFactoryResolver,
    @Inject(DEFAULT_LOADING_COMPONENT) defaultLoadingComponent: Type<unknown>
  ) {
    this.onChanges$
      .pipe(
        filter((changes) => 'loadable' in changes),
        map((changes) => changes.loadable.currentValue),
        takeUntil(this.onDestroy$)
      )
      .subscribe((loadable) => {
        if (isLoading(loadable)) {
          this.content.clear();
          const factory = resolver.resolveComponentFactory(
            defaultLoadingComponent
          );
          this.defaultLoadingComponentRef = this.content.createComponent(
            factory
          );
        } else {
          this.defaultLoadingComponentRef?.destroy();
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
