import { errored, idle, loaded, loading } from '../loadable.constructors';
import { Loadable } from '../loadable.type';
import { map } from './map.function';

describe('the map function', () => {
  it.each([[idle], [loading], [loaded('value')], [errored('error')]])(
    'maps the state %s to itself with the identity function',
    (state) => {
      expect(map((x) => x, state)).toEqual(state);
    }
  );

  it.each([[idle], [loading], [errored('error')]])(
    'maps the state %s to itself with an arbitrary function',
    (state: Loadable<number>) => {
      expect(map((x) => x + 10, state)).toEqual(state);
    }
  );

  it('maps the value of a loaded state with the function', () => {
    expect(map((x) => x + 10, loaded(5))).toEqual(loaded(15));
  });
});
