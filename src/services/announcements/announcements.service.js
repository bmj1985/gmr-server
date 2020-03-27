// Initializes the `announcements` service on path `/announcements`
const { Announcements } = require('./announcements.class')
const createModel = require('../../models/announcements.model')
const hooks = require('./announcements.hooks')

module.exports = function(app) {
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    Model,
    paginate,
  }

  // Initialize our service with any options it requires
  app.use('/announcements', new Announcements(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('announcements')

  service.hooks(hooks)
}
