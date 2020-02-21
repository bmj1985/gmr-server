// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection')

class trailheads extends Model {
    static get tableName() {
        return 'trailheads'
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
        .hasTable('trailheads')
        .then(exists => {
            if (!exists) {
                db.schema
                    .createTable('trailheads', table => {
                        table.increments('id').primary()
                        table.string('name')
                        table.string('address')
                        table.timestamp('createdAt')
                        table.timestamp('updatedAt')
                    })
                    .then(() => console.log('Created trailheads table')) // eslint-disable-line no-console
                    .catch(e =>
                        console.error('Error creating trailheads table', e)
                    ) // eslint-disable-line no-console
            }
        })
        .catch(e => console.error('Error creating trailheads table', e)) // eslint-disable-line no-console

    return trailheads
}
