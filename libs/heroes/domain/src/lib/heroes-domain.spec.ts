import { heroesDomain } from './heroes-domain';

describe('heroesDomain', () => {
  it('should work', () => {
    expect(heroesDomain()).toEqual('heroes-domain');
  });
});
