// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection')

class Trailheads extends Model {
    static get tableName() {
        return 'Trailheads'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'address'],
            properties: {
                name: 'string',
                address: 'string',
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
    const db = app.get('knex')

    db.schema
        .hasTable('Trailheads')
        .then(exists => {
            if (!exists) {
                db.schema
                    .createTable('Trailheads', table => {
                        table.increments('id')
                        table.string('name').unique()
                        table.string('address').unique()
                        table.timestamp('createdAt')
                        table.timestamp('updatedAt')
                    })
                    .then(() => console.log('Created Trailheads table')) // eslint-disable-line no-console
                    .catch(e =>
                        console.error('Error creating Trailheads table', e)
                    ) // eslint-disable-line no-console
            }
        })
        .catch(e => console.error('Error creating Trailheads table', e)) // eslint-disable-line no-console

    return Trailheads
}
