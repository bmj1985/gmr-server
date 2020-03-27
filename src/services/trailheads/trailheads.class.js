const { Service } = require("feathers-objection")

exports.Trailheads = class Trailheads extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options

    super({
      ...otherOptions,
      model: Model,
    })
  }
}
