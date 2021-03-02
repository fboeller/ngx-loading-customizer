import { LoadableModule } from './loadable.module';

describe('the loadable module', () => {
  it('can be created without options', () => {
    expect(LoadableModule.forRoot()).toBeDefined();
  });
});
