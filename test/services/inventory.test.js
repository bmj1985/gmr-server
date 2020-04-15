const app = require('../../src/app');

describe('\'inventory\' service', () => {
  it('registered the service', () => {
    const service = app.service('inventory');
    expect(service).toBeTruthy();
  });
});
