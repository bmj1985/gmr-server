// Initializes the `stripe` service on path `/stripe`
const { Stripe } = require("./stripe.class")
const hooks = require("./stripe.hooks")
const {
  Charge,
  Product,
  Order,
  Sku,
  PaymentIntent,
} = require("feathers-stripe")

module.exports = function(app) {
  const paginate = app.get("paginate")
  const { apiKey } = app.get("stripe")

  const options = {
    paginate,
  }

  // Initialize our service with any options it requires
  app.use("/stripe/charges", new Charge({ secretKey: apiKey }))
  app.use("stripe/products", new Product({ secretKey: apiKey }))
  app.use("stripe/orders", new Order({ secretKey: apiKey }))
  app.use("stripe/skus", new Sku({ secretKey: apiKey }))
  app.use("stripe/payment-intents", new PaymentIntent({ secretKey: apiKey }))

  // Get our initialized service so that we can register hooks
  const chargeService = app.service("stripe/charges")
  const productsService = app.service("stripe/products")
  const orderService = app.service("stripe/orders")
  const skusService = app.service("stripe/skus")
  const paymentIntentService = app.service("stripe/payment-intents")

  chargeService.hooks(hooks)
  productsService.hooks(hooks)
  orderService.hooks(hooks)
  skusService.hooks(hooks)
  paymentIntentService.hooks(hooks)
}
