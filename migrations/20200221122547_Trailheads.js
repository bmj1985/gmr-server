exports.up = (knex, Promise) =>
  knex.schema.createTable("trailheads", table => {
    table.increments("id").primary()
    table.string("name")
    table.string("address")
    table.timestamp("createdAt")
    table.timestamp("updatedAt")
  })

exports.down = (knex, Promise) => knex.schema.dropTableIfExists("trailheads")
