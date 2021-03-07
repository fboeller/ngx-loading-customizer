import { Component } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { errored, idle, loaded, loading } from '../../loadable.constructors';
import { LoadableModule } from '../loadable.module';

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
    imports: [LoadableModule],
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
    imports: [LoadableModule],
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
    imports: [LoadableModule],
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
    imports: [LoadableModule],
  });
  const fixture = TestBed.createComponent(TestIdleComponent);
  fixture.detectChanges();
  expect(
    fixture.debugElement.query(By.css('ld-loadable')).nativeElement.children
      .length
  ).toEqual(0);
});
