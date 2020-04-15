// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require("objection")

class skus extends Model {
  static get tableName() {
    return "skus"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["active", "currency", "inventoryId", "price", "productId"],

      properties: {
        active: { type: "boolean" },
        currency: { type: "string" },
        image: { type: "string" },
        inventoryId: { type: "integer" },
        price: { type: "number" },
        productId: { type: "integer" },
        color: { type: ["string", "null"] },
        size: { type: ["string", "null"] },
      },
    }
  }

  $beforeInsert() {
    this.createdAt = this.updatedAt = new Date().toISOString()
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString()
  }
}

module.exports = function(app) {
  const db = app.get("knex")

  db.schema
    .hasTable("skus")
    .then(exists => {
      if (!exists) {
        db.schema
          .createTable("skus", table => {
            table.increments("id")
            table.boolean("active")
            table.string("currency")
            table.string("image")
            table.number("price")
            table.string("color")
            table.string("size")
            table.integer("inventoryId")
            table.integer("productId")
            table.timestamp("createdAt")
            table.timestamp("updatedAt")
          })
          .then(() => console.log("Created skus table")) // eslint-disable-line no-console
          .catch(e => console.error("Error creating skus table", e)) // eslint-disable-line no-console
      }
    })
    .catch(e => console.error("Error creating skus table", e)) // eslint-disable-line no-console

  return skus
}
