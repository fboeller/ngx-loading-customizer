import {
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
  loaded?: TemplateRef<{ value: any }>;
  error?: TemplateRef<{ error: any }>;
};

@Component({
  selector: 'ld-loadable',
  templateUrl: './loadable.component.html',
  styleUrls: ['./loadable.component.css'],
})
export class LoadableComponent implements OnChanges {
  @Input() loadable: Loadable<unknown> = idle;
  @Input() templates: TemplateRefs = {};

  @ViewChild('content', { read: ViewContainerRef })
  content?: ViewContainerRef;

  @ViewChild('loadedRef')
  loadedRef?: any;

  defaultComponentRef?: ComponentRef<unknown>;
  templateRef?: TemplateRef<unknown>;
  hideLoadedNgContent = true;
  templateContext?: object;

  constructor(
    private resolver: ComponentFactoryResolver,
    @Inject(DEFAULT_COMPONENTS) private defaultComponents: DefaultComponents
  ) {}

  updateContent(loadable: Loadable<unknown>): void {
    this.defaultComponentRef?.destroy();
    const defaultComponent = this.defaultComponents[getLoadingState(loadable)];
    if (defaultComponent && this.content) {
      this.content.clear();
      const factory = this.resolver.resolveComponentFactory(defaultComponent);
      this.defaultComponentRef = this.content.createComponent(factory);
      setComponentInputs(this.defaultComponentRef, loadable);
    }
  }

  isNgContentHidden(loadable: Loadable<unknown>): boolean {
    return (
      this.loadedRef?.nativeElement?.children?.length === 0 ||
      !isLoaded(loadable)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('loadable' in changes) {
      this.hideLoadedNgContent = this.isNgContentHidden(this.loadable);
      this.templateContext = {
        ...loadableTemplateContext(this.loadable),
        type: this.loadable.type,
      };
    }
    if ('loadable' in changes || 'templates' in changes) {
      this.templateRef = this.templates[getLoadingState(this.loadable)];
      this.updateContent(this.loadable);
    }
  }
}
