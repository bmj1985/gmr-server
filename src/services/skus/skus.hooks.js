const { authenticate } = require("@feathersjs/authentication").hooks
const checkPermissions = require("feathers-permissions")
const { fastJoin } = require("feathers-hooks-common")

const eventResolvers = {
  joins: {
    inventory: (...args) => async (sku, context) => {
      let inventory = await context.app
        .service("/inventory")
        .find({ query: { id: sku.inventoryId } })
      sku.inventory = inventory.data[0]
    },
  },
}

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      authenticate("jwt"),
      checkPermissions({
        roles: ["admin"],
      }),
    ],
    update: [
      authenticate("jwt"),
      checkPermissions({
        roles: ["admin"],
      }),
    ],
    patch: [
      authenticate("jwt"),
      checkPermissions({
        roles: ["admin"],
      }),
    ],
    remove: [
      authenticate("jwt"),
      checkPermissions({
        roles: ["admin"],
      }),
    ],
  },

  after: {
    all: [fastJoin(eventResolvers)],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
}
