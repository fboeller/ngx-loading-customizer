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
import { Observable, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { idle } from '../../loadable.constructors';
import {
  getLoadingState,
  hasErrored,
  isLoaded,
} from '../../loadable.functions';
import { Loadable } from '../../loadable.type';
import { DEFAULT_COMPONENTS } from '../loadable.tokens';
import { DefaultComponents } from '../module.options';

export function setComponentInputs(
  defaultComponentRef: ComponentRef<any>,
  loadable: Loadable<unknown>
): void {
  defaultComponentRef.instance.type = loadable.type;
  if (isLoaded(loadable)) {
    defaultComponentRef.instance.value = loadable.value;
  } else if (hasErrored(loadable)) {
    defaultComponentRef.instance.error = loadable.error;
  }
}

export type TemplateRefs = {
  idle?: TemplateRef<void>;
  loading?: TemplateRef<void>;
  loaded?: TemplateRef<{ value: any }>;
  error?: TemplateRef<{ error: any }>;
};

@Component({
  selector: 'ld-loadable',
  templateUrl: './loadable.component.html',
  styleUrls: ['./loadable.component.css'],
})
export class LoadableComponent implements OnChanges, OnDestroy {
  @Input() loadable: Loadable<unknown> = idle;
  @Input() templates: TemplateRefs = {};

  private loadable$: Observable<Loadable<unknown>>;
  private templates$: Observable<TemplateRefs>;

  @ViewChild('content', { read: ViewContainerRef })
  content!: ViewContainerRef;

  @ViewChild('loadedRef')
  loadedRef!: any;

  defaultComponentRef?: ComponentRef<unknown>;

  readonly onChanges$ = new Subject<SimpleChanges>();
  readonly onDestroy$ = new Subject<void>();

  get hideLoadedNgContent(): boolean {
    return (
      this.loadedRef?.nativeElement?.children?.length === 0 ||
      !isLoaded(this.loadable)
    );
  }

  get templateRef(): TemplateRef<unknown> | undefined {
    return this.templates[getLoadingState(this.loadable)];
  }

  get templateContext(): object {
    return {
      ...this.specificTemplateContext,
      type: this.loadable.type,
    };
  }

  get specificTemplateContext(): object {
    if (isLoaded(this.loadable)) {
      return { value: this.loadable.value };
    } else if (hasErrored(this.loadable)) {
      return { error: this.loadable.error };
    } else {
      return {};
    }
  }

  constructor(
    private resolver: ComponentFactoryResolver,
    @Inject(DEFAULT_COMPONENTS) private defaultComponents: DefaultComponents
  ) {
    this.templates$ = this.onChanges$.pipe(
      filter((changes) => 'templates' in changes),
      map((changes) => changes.templates),
      map((change) => change.currentValue)
    );
    this.loadable$ = this.onChanges$.pipe(
      filter((changes) => 'loadable' in changes),
      map((changes) => changes.loadable),
      map((change) => change.currentValue)
    );
    this.loadable$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((loadable: Loadable<unknown>) => {
        this.updateContent(loadable);
      });
  }

  updateContent(loadable: Loadable<unknown>): void {
    this.defaultComponentRef?.destroy();
    const defaultComponent = this.defaultComponents[getLoadingState(loadable)];
    if (defaultComponent) {
      this.content.clear();
      const factory = this.resolver.resolveComponentFactory(defaultComponent);
      this.defaultComponentRef = this.content.createComponent(factory);
      setComponentInputs(this.defaultComponentRef, loadable);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onChanges$.next(changes);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
