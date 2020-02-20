const { Service } = require('feathers-objection')

exports.GmrEvents = class GmrEvents extends Service {
    constructor(options) {
        const { Model, ...otherOptions } = options

        super({
            ...otherOptions,
            model: Model,
        })
    }
}
