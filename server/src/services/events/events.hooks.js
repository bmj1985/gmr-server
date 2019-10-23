const checkPermissions = require('feathers-permissions');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      checkPermissions({
        roles: ['admin']
      })
    ],
    update: [
      checkPermissions({
        roles: ['admin']
      })
    ],
    patch: [
      checkPermissions({
        roles: ['admin']
      })
    ],
    remove: [
      checkPermissions({
        roles: ['admin']
      })
    ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
