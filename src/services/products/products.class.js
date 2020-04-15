const { Service } = require("feathers-objection")

exports.Products = class Products extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options

    super({
      ...otherOptions,
      model: Model,
    })
  }
}
