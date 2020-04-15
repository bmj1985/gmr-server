const users = require("./users/users.service.js")
const gmrEvents = require("./gmr-events/gmr-events.service.js")
const trailheads = require("./trailheads/trailheads.service.js")
const runningRoutes = require("./running-routes/running-routes.service.js")
const announcements = require("./announcements/announcements.service.js")
const stripe = require("./stripe/stripe.service.js")
const uploads = require("./uploads/uploads.service.js")
const products = require('./products/products.service.js');
const skus = require('./skus/skus.service.js');
const inventory = require('./inventory/inventory.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function(app) {
  app.configure(users)
  app.configure(gmrEvents)
  app.configure(trailheads)
  app.configure(runningRoutes)
  app.configure(announcements)
  app.configure(stripe)
  app.configure(uploads)
  app.configure(products);
  app.configure(skus);
  app.configure(inventory);
}
