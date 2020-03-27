const { Service } = require("feathers-objection")

exports.RunningRoutes = class RunningRoutes extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options

    super({
      ...otherOptions,
      model: Model,
    })
  }
}
