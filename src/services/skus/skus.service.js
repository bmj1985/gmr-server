// Initializes the `skus` service on path `/skus`
const { Skus } = require("./skus.class")
const createModel = require("../../models/skus.model")
const hooks = require("./skus.hooks")

module.exports = function(app) {
  const Model = createModel(app)
  const paginate = app.get("paginate")

  const options = {
    Model,
    paginate,
  }

  // Initialize our service with any options it requires
  app.use("/skus", new Skus(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service("skus")

  service.hooks(hooks)
}
