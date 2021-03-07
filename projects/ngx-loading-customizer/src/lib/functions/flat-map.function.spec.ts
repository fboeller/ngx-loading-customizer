import { errored, idle, loaded, loading } from '../loadable.constructors';
import { Loadable } from '../loadable.type';
import { flatMap } from './flat-map.function';
import { of } from './of.function';

describe('the flatMap function', () => {
  it.each([[idle], [loading], [loaded('value')], [errored('error')]])(
    'maps the state %s to itself with the of function',
    (state) => {
      expect(flatMap(of, state)).toEqual(state);
    }
  );

  it.each([[idle], [loading], [errored('error')]])(
    'maps the state %s to itself with a function mapping to a loaded state',
    (state: Loadable<number>) => {
      expect(flatMap((x) => loaded(x + 10), state)).toEqual(state);
    }
  );

  it.each([[idle], [loading], [errored('error')]])(
    'maps the state %s to itself with a function mapping to an error state',
    (state: Loadable<number>) => {
      expect(flatMap(() => errored('error'), state)).toEqual(state);
    }
  );

  it('maps the value of a loaded state with the function', () => {
    expect(flatMap((x) => loaded(x + 10), loaded(5))).toEqual(loaded(15));
  });

  it('maps from a loaded state to an error', () => {
    expect(flatMap((x) => errored('error'), loaded(5))).toEqual(
      errored('error')
    );
  });
});
