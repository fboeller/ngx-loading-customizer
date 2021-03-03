import { errored, loaded, loading } from '../loadable.constructors';
import { IsLoadingPipe } from './is-loading.pipe';
import { LoadableError } from './loadable-error.type';

describe('the isLoading pipe', () => {
  const pipe = new IsLoadingPipe();

  it('returns true if the object is loading', () => {
    expect(pipe.transform(loading)).toBeTruthy();
  });

  it('returns false if the object is loaded', () => {
    expect(pipe.transform(loaded('value'))).toBeFalsy();
  });

  it('returns false if the object has errored', () => {
    expect(pipe.transform(errored('error'))).toBeFalsy();
  });

  it('throws an error if the object is not a loadable', () => {
    expect(() => pipe.transform({})).toThrowError(LoadableError);
  });
});
