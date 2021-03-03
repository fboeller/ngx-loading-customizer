import { map } from './map.function';

describe('the map function', () => {
  it('maps the loading state to itself', () => {
    expect(map((x) => x, { type: 'loading' })).toEqual({ type: 'loading' });
  });
});
