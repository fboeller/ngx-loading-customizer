import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Inject,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { idle } from '../../loadable.constructors';
import {
  getLoadingState,
  hasErrored,
  isLoaded,
} from '../../loadable.functions';
import { Loadable, LoadingState } from '../../loadable.type';
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

function loadableTemplateContext(loadable: Loadable<unknown>): object {
  if (isLoaded(loadable)) {
    return { value: loadable.value };
  } else if (hasErrored(loadable)) {
    return { error: loadable.error };
  } else {
    return {};
  }
}

export type TemplateRefs = {
  idle?: TemplateRef<void>;
  loading?: TemplateRef<void>;
  error?: TemplateRef<{ error: any }>;
};

@Component({
  selector: 'ld-loadable',
  templateUrl: './loadable.component.html',
  styleUrls: ['./loadable.component.css'],
})
export class LoadableComponent implements OnChanges, AfterViewInit {
  @Input() loadable: Loadable<unknown> = idle;
  @Input() templates: TemplateRefs = {};

  @ViewChild('content', { read: ViewContainerRef })
  content?: ViewContainerRef;

  defaultComponentRef?: ComponentRef<unknown>;
  templateRef?: TemplateRef<unknown>;
  showNgContent = false;
  templateContext?: object;

  get loadingState(): LoadingState {
    return getLoadingState(this.loadable);
  }

  constructor(
    private resolver: ComponentFactoryResolver,
    @Inject(DEFAULT_COMPONENTS) private defaultComponents: DefaultComponents
  ) {}

  updateContent(): void {
    const defaultComponent = this.defaultComponents[this.loadingState];
    if (!this.templateRef && defaultComponent && this.content) {
      this.content.clear();
      const factory = this.resolver.resolveComponentFactory(defaultComponent);
      this.defaultComponentRef = this.content.createComponent(factory);
      setComponentInputs(this.defaultComponentRef, this.loadable);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('loadable' in changes) {
      this.showNgContent = isLoaded(this.loadable);
      this.templateContext = {
        ...loadableTemplateContext(this.loadable),
        type: this.loadable.type,
      };
    }
    if ('loadable' in changes || 'templates' in changes) {
      this.defaultComponentRef?.destroy();
      if (this.loadingState !== 'loaded') {
        this.templateRef = this.templates[this.loadingState];
        this.updateContent();
      }
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.updateContent());
  }
}
