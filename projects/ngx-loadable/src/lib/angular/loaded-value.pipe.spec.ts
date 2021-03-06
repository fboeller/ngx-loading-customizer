import { errored, loaded } from '../loadable.constructors';
import { LoadableError } from './loadable-error.type';
import { LoadedValuePipe } from './loaded-value.pipe';

describe('the loadedValue pipe', () => {
  const pipe = new LoadedValuePipe();

  it('returns the loaded value if the object is loaded', () => {
    expect(pipe.transform(loaded('value'))).toEqual('value');
  });

  it('returns undefined if the object is not loaded', () => {
    expect(pipe.transform(errored('error'))).toBeUndefined();
  });

  it('throws an error if the object is not a loadable', () => {
    expect(() => pipe.transform({})).toThrowError(LoadableError);
  });
});
