import { errored, idle, loaded, loading } from './loadable.constructors';
import { isLoadable } from './loadable.functions';
import { Loadable } from './loadable.type';

describe('isLoadable', () => {
  it.each([[idle], [loading], [loaded('value')], [errored('error')]])(
    'returns true for %s',
    (loadable: Loadable<unknown>) => {
      expect(isLoadable(loadable)).toBeTruthy();
    }
  );

  it.each([
    [[]],
    [{}],
    [undefined],
    [null],
    [0],
    [''],
    ['value'],
    [{ type: undefined }],
    [{ type: null }],
    [{ type: 'load' }],
    [{ value: 'value' }],
    [{ error: 'error' }],
  ])('returns false for %s', (object: unknown) => {
    expect(isLoadable(object)).toBeFalsy();
  });
});
