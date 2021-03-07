import { Component, Input, NgModule } from '@angular/core';
import { loading } from '../../loadable.constructors';

@Component({
  selector: 'ld-test-loading-spinner',
  template: `<span>Loading...</span>`,
})
export class TestLoadingSpinnerComponent {
  loadable = loading;
}

@NgModule({
  declarations: [TestLoadingSpinnerComponent],
  entryComponents: [TestLoadingSpinnerComponent],
})
export class TestLoadingSpinnerModule {}

@Component({
  selector: 'ld-test-error',
  template: `<span>Error {{ error }}</span>`,
})
export class TestErrorFixtureComponent {
  @Input() error: any;
  loadable = loading;
}

@NgModule({
  declarations: [TestErrorFixtureComponent],
  entryComponents: [TestErrorFixtureComponent],
})
export class TestErrorModule {}
