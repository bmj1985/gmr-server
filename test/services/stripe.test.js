const app = require('../../src/app');

describe('\'stripe\' service', () => {
  it('registered the service', () => {
    const service = app.service('stripe');
    expect(service).toBeTruthy();
  });
});
