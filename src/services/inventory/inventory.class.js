const { Service } = require("feathers-objection")

exports.Inventory = class Inventory extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options

    super({
      ...otherOptions,
      model: Model,
    })
  }
}
