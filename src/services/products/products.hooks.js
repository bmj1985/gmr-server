const { authenticate } = require("@feathersjs/authentication").hooks
const checkPermissions = require("feathers-permissions")
const { fastJoin } = require("feathers-hooks-common")

const eventResolvers = {
  joins: {
    skus: (...args) => async (sku, context) => {
      console.log("SKU:", sku, "CONTEXT:", context)
      let skus = await context.app
        .service("/skus")
        .find({ query: { id: sku.productId } })
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
    all: [],
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
