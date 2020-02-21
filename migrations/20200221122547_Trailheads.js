exports.up = (knex, Promise) =>
    knex.schema.createTable('Trailheads', table => {
        table.increments('id').primary()
        table.string('name')
        table.string('address')
        table.timestamp('createdAt')
        table.timestamp('updatedAt')
    })

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('Trailheads')
