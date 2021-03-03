import { cold } from 'jest-marbles';
import { errored, loaded, loading } from '../loadable.constructors';
import { toLoadable } from './to-loadable.function';

describe('toLoadable', () => {
  it('returns first a loading state and then the loaded result if the observable does not error', () => {
    expect(toLoadable(cold('(x|)', { x: 'value' }))).toBeObservable(
      cold('(ab|)', { a: loading, b: loaded('value') })
    );
  });

  it('returns first a loading state and then an error if the observable errors', () => {
    expect(toLoadable(cold('#', {}, 'error'))).toBeObservable(
      cold('(ab|)', { a: loading, b: errored('error') })
    );
  });
});
