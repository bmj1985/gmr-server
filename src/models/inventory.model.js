// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require("objection")

class inventory extends Model {
  static get tableName() {
    return "inventory"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["quantity", "skuId"],

      properties: {
        quantity: { type: "integer" },
        skuId: { type: "integer" },
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
    .hasTable("inventory")
    .then(exists => {
      if (!exists) {
        db.schema
          .createTable("inventory", table => {
            table.increments("id")
            table.integer("quantity")
            table.integer("skuId")
            table.timestamp("createdAt")
            table.timestamp("updatedAt")
          })
          .then(() => console.log("Created inventory table")) // eslint-disable-line no-console
          .catch(e => console.error("Error creating inventory table", e)) // eslint-disable-line no-console
      }
    })
    .catch(e => console.error("Error creating inventory table", e)) // eslint-disable-line no-console

  return inventory
}
