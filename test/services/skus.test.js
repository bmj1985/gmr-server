const app = require('../../src/app');

describe('\'skus\' service', () => {
  it('registered the service', () => {
    const service = app.service('skus');
    expect(service).toBeTruthy();
  });
});
