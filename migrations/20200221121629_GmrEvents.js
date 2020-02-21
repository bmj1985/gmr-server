exports.up = (knex, Promise) =>
    knex.schema.createTable('GmrEvents', table => {
        table.increments('id').primary()
        table.datetime('datetime')
        table.string('details')
        table.integer('trailheadId')
        table.string('trailheadName')
        table.integer('routeId')
        table.string('runRouteLink')
        table.string('title')
        table.timestamp('createdAt')
        table.timestamp('updatedAt')
    })

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('GmrEvents')
