const app = require('../../src/app');

describe('\'announcements\' service', () => {
  it('registered the service', () => {
    const service = app.service('announcements');
    expect(service).toBeTruthy();
  });
});
