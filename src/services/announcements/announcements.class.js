const { Service } = require('feathers-objection')

exports.Announcements = class Announcements extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options

    super({
      ...otherOptions,
      model: Model,
    })
  }
}
