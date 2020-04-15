const { Service } = require("feathers-objection")

exports.Skus = class Skus extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options

    super({
      ...otherOptions,
      model: Model,
    })
  }
}
