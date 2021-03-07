import { LoadingCustomizerModule } from './loading-customizer.module';

describe('the loading customizer module', () => {
  it('can be created without options', () => {
    expect(LoadingCustomizerModule.forRoot()).toBeDefined();
  });
});
