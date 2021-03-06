import { errored, loaded, loading } from '../loadable.constructors';
import { LoadableError } from './loadable-error.type';
import { LoadingStatePipe } from './loading-state.pipe';

describe('the loadingState pipe', () => {
  const pipe = new LoadingStatePipe();

  it(`returns 'Loading' if the object is loading`, () => {
    expect(pipe.transform(loading)).toEqual('loading');
  });

  it(`returns 'Loaded' if the object is loaded`, () => {
    expect(pipe.transform(loaded('value'))).toEqual('loaded');
  });

  it(`returns 'Error' if the object has errored`, () => {
    expect(pipe.transform(errored('error'))).toEqual('error');
  });

  it('throws an error if the object is not a loadable', () => {
    expect(() => pipe.transform({})).toThrowError(LoadableError);
  });
});
