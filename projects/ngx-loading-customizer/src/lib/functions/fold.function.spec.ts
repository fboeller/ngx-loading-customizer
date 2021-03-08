import { errored, idle, loaded, loading } from '../loadable.constructors';
import { Loadable } from '../loadable.type';
import { fold } from './fold.function';

describe('the fold function', () => {
  const constructors = {
    idle: () => 2,
    loading: () => 3,
    loaded: (v: number) => v * 2,
    error: (_e: unknown) => 0,
  };

  it.each([
    [idle, 2],
    [loading, 3],
    [loaded(5), 10],
    [errored('error'), 0],
  ])(
    'returns for the loadable %s the value %s',
    (loadable: Loadable<number>, expectation: number) => {
      expect(fold(constructors, loadable)).toEqual(expectation);
    }
  );
});
