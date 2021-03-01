import { toLoadable, fromPromise } from './from.functions';
import { errored, loaded, loading } from './loadable.constructors';
import { cold } from 'jest-marbles';

describe('the creation from a promise', () => {
  it('returns a loaded result if the promise resolves', async () => {
    expect(await fromPromise(Promise.resolve('value'))).toEqual(
      loaded('value')
    );
  });

  it('returns an error if the promise rejects', async () => {
    expect(await fromPromise(Promise.reject('error'))).toEqual(
      errored('error')
    );
  });
});

describe('the creation from an observable', () => {
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
