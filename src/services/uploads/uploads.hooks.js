const { authenticate } = require("@feathersjs/authentication").hooks
const { getBase64DataURI } = require("dauria")

module.exports = {
  before: {
    all: [authenticate("jwt")],
    find: [],
    get: [],
    create: [
      // function(context) {
      //   if (!context.data.uri && context.params.file) {
      //     const file = context.params.file
      //     const uri = getBase64DataURI(file.buffer, file.mimetype)
      //     context.data = { uri: uri }
      //   }
      // },
    ],
    update: [],
    patch: [],
    remove: [],
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
