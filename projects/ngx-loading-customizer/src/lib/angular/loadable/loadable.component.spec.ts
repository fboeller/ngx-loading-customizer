import { Component } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { errored, idle, loaded, loading } from '../../loadable.constructors';
import { LoadingCustomizerModule } from '../loading-customizer.module';
import {
  TestErrorFixtureComponent,
  TestErrorModule,
  TestLoadingSpinnerComponent,
  TestLoadingSpinnerModule,
} from './loadable.component.fixtures';

@Component({
  selector: 'ld-test-loaded',
  template: `
    <ld-loadable [loadable]="loadable">
      <p>{{ loadable | loadedValue }}</p>
    </ld-loadable>
  `,
})
class TestLoadedComponent {
  loadable = loaded('42');
}

it('renders the loaded value', () => {
  TestBed.configureTestingModule({
    declarations: [TestLoadedComponent],
    imports: [LoadingCustomizerModule],
  });
  const fixture = TestBed.createComponent(TestLoadedComponent);
  fixture.detectChanges();
  expect(
    fixture.debugElement.query(By.css('p')).nativeElement.textContent
  ).toEqual('42');
});

@Component({
  selector: 'ld-test-loading',
  template: `
    <ld-loadable [loadable]="loadable">
      <p>{{ loadable | loadedValue }}</p>
    </ld-loadable>
  `,
})
class TestLoadingComponent {
  loadable = loading;
}

it('renders the default loading state if loading', fakeAsync(() => {
  TestBed.configureTestingModule({
    declarations: [TestLoadingComponent],
    imports: [LoadingCustomizerModule],
  });
  const fixture = TestBed.createComponent(TestLoadingComponent);
  fixture.detectChanges();
  tick(1);
  expect(
    fixture.debugElement.query(By.css('ld-loadable-loading'))
  ).toBeTruthy();
  expect(fixture.debugElement.query(By.css('p'))).toBeFalsy();
}));

@Component({
  selector: 'ld-test-error',
  template: `
    <ld-loadable [loadable]="loadable">
      <p>{{ loadable | loadedValue }}</p>
    </ld-loadable>
  `,
})
class TestErrorComponent {
  loadable = errored('error');
}

it('renders the default error component if errored', fakeAsync(() => {
  TestBed.configureTestingModule({
    declarations: [TestErrorComponent],
    imports: [LoadingCustomizerModule],
  });
  const fixture = TestBed.createComponent(TestErrorComponent);
  fixture.detectChanges();
  tick(1);
  expect(fixture.debugElement.query(By.css('ld-loadable-error'))).toBeTruthy();
  expect(fixture.debugElement.query(By.css('p'))).toBeFalsy();
}));

@Component({
  selector: 'ld-test-idle',
  template: `
    <ld-loadable [loadable]="loadable">
      <p>{{ loadable | loadedValue }}</p>
    </ld-loadable>
  `,
})
class TestIdleComponent {
  loadable = idle;
}

it('renders nothing if idle', () => {
  TestBed.configureTestingModule({
    declarations: [TestIdleComponent],
    imports: [LoadingCustomizerModule],
  });
  const fixture = TestBed.createComponent(TestIdleComponent);
  fixture.detectChanges();
  expect(
    fixture.debugElement.query(By.css('ld-loadable')).nativeElement.children
      .length
  ).toEqual(0);
});

@Component({
  selector: 'ld-test-default-loading',
  template: `
    <ld-loadable [loadable]="loadable">
      <p>{{ loadable | loadedValue }}</p>
    </ld-loadable>
  `,
})
class TestDefaultLoadingComponent {
  loadable = loading;
}

it('renders the custom global loading state if loading', fakeAsync(() => {
  TestBed.configureTestingModule({
    declarations: [TestDefaultLoadingComponent],
    imports: [
      TestLoadingSpinnerModule,
      LoadingCustomizerModule.forRoot({
        defaultComponents: {
          loading: TestLoadingSpinnerComponent,
        },
      }),
    ],
  });
  const fixture = TestBed.createComponent(TestDefaultLoadingComponent);
  fixture.detectChanges();
  tick(1);
  expect(fixture.debugElement.query(By.css('ld-loadable-loading'))).toBeFalsy();
  expect(
    fixture.debugElement.query(By.css('ld-test-loading-spinner'))
  ).toBeTruthy();
  expect(fixture.debugElement.query(By.css('p'))).toBeFalsy();
}));

@Component({
  selector: 'ld-test-default-loading',
  template: `
    <ld-loadable [loadable]="loadable">
      <p>{{ loadable | loadedValue }}</p>
    </ld-loadable>
  `,
})
class TestDefaultErrorComponent {
  loadable = errored('error');
}

it('renders the custom global error state if errored', fakeAsync(() => {
  TestBed.configureTestingModule({
    declarations: [TestDefaultErrorComponent],
    imports: [
      TestErrorModule,
      LoadingCustomizerModule.forRoot({
        defaultComponents: {
          error: TestErrorFixtureComponent,
        },
      }),
    ],
  });
  const fixture = TestBed.createComponent(TestDefaultErrorComponent);
  fixture.detectChanges();
  tick(1);
  fixture.detectChanges();
  expect(fixture.debugElement.query(By.css('ld-loadable-error'))).toBeFalsy();
  expect(fixture.debugElement.query(By.css('ld-test-error'))).toBeTruthy();
  expect(
    fixture.debugElement.query(By.css('ld-test-error span')).nativeElement
      .textContent
  ).toEqual('Error error');
  expect(fixture.debugElement.query(By.css('p'))).toBeFalsy();
}));

@Component({
  selector: 'ld-test-custom-loading',
  template: `
    <ld-loadable [loadable]="loadable" [templates]="{ loading: loading }">
      <p>{{ loadable | loadedValue }}</p>
    </ld-loadable>
    <ng-template #loading>
      <span>It's loading.</span>
    </ng-template>
  `,
})
class TestCustomLoadingComponent {
  loadable = loading;
}

it('renders the custom local loading state if loading', fakeAsync(() => {
  TestBed.configureTestingModule({
    declarations: [TestCustomLoadingComponent],
    imports: [LoadingCustomizerModule],
  });
  const fixture = TestBed.createComponent(TestCustomLoadingComponent);
  fixture.detectChanges();
  tick(1);
  expect(fixture.debugElement.query(By.css('ld-loadable-loading'))).toBeFalsy();
  expect(fixture.debugElement.query(By.css('span'))).toBeTruthy();
  expect(
    fixture.debugElement.query(By.css('span')).nativeElement.textContent
  ).toEqual(`It's loading.`);
  expect(fixture.debugElement.query(By.css('p'))).toBeFalsy();
}));

@Component({
  selector: 'ld-test-custom-error',
  template: `
    <ld-loadable [loadable]="loadable" [templates]="{ error: error }">
      <p>{{ loadable | loadedValue }}</p>
    </ld-loadable>
    <ng-template #error let-error="error">
      <span>There is an '{{ error }}'.</span>
    </ng-template>
  `,
})
class TestCustomErrorComponent {
  loadable = errored('error');
}

it('renders the custom local error state if loading', fakeAsync(() => {
  TestBed.configureTestingModule({
    declarations: [TestCustomErrorComponent],
    imports: [LoadingCustomizerModule],
  });
  const fixture = TestBed.createComponent(TestCustomErrorComponent);
  fixture.detectChanges();
  tick(1);
  fixture.detectChanges();
  expect(fixture.debugElement.query(By.css('ld-loadable-error'))).toBeFalsy();
  expect(fixture.debugElement.query(By.css('span'))).toBeTruthy();
  expect(
    fixture.debugElement.query(By.css('span')).nativeElement.textContent
  ).toEqual(`There is an 'error'.`);
  expect(fixture.debugElement.query(By.css('p'))).toBeFalsy();
}));
