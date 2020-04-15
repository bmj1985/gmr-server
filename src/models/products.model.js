// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require("objection")

class products extends Model {
  static get tableName() {
    return "products"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "active", "primaryImage", "gender"],

      properties: {
        name: { type: "string" },
        active: { type: "boolean" },
        description: { type: ["string", "null"] },
        primaryImage: { type: "string" },
        images: {
          type: "array",
          items: { type: "string" },
        },
        categories: {
          type: "array",
          items: {
            type: "string",
          },
        },
        gender: { type: ["string", "null"] },
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
    .hasTable("products")
    .then(exists => {
      if (!exists) {
        db.schema
          .createTable("products", table => {
            table.increments("id")
            table.string("name")
            table.boolean("active")
            table.string("description")
            table.string("primaryImage")
            table.specificType("images", "text[]")
            table.specificType("categories", "text[]")
            table.string("gender")
            table.timestamp("createdAt")
            table.timestamp("updatedAt")
          })
          .then(() => console.log("Created products table")) // eslint-disable-line no-console
          .catch(e => console.error("Error creating products table", e)) // eslint-disable-line no-console
      }
    })
    .catch(e => console.error("Error creating products table", e)) // eslint-disable-line no-console

  return products
}
