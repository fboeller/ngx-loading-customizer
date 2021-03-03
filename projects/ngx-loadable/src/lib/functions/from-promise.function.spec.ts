import { fromPromise } from './from-promise.function';
import { errored, loaded } from '../loadable.constructors';

describe('fromPromise', () => {
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
