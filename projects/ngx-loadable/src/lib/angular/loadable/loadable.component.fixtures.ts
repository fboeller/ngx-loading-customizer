import { Component, NgModule } from '@angular/core';
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
