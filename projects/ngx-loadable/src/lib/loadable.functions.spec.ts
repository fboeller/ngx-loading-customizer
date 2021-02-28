import { map } from './loadable.functions';

describe('the map function', () => {
  it('maps the loading state to itself', () => {
    expect(map((x) => x, { type: 'Loading' })).toEqual({ type: 'Loading' });
  });
});
