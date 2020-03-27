exports.up = (knex, Promise) =>
  knex.schema.createTable("gmr_events", table => {
    table.increments("id").primary()
    table.datetime("datetime")
    table.text("details")
    table.integer("trailheadId")
    table.integer("routeId")
    table.string("runRouteLink")
    table.string("title")
    table.timestamp("createdAt")
    table.timestamp("updatedAt")
  })

exports.down = (knex, Promise) => knex.schema.dropTableIfExists("gmr_events")
