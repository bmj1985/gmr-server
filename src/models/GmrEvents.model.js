// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection')

class GmrEvents extends Model {
    static get tableName() {
        return 'GmrEvents'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['date', 'title'],
            properties: {
                datetime: { type: ['datetime', 'null'] },
                details: { type: ['string', 'null'] },
                runRouteLink: { type: ['string', 'null'] },
                title: { type: ['string', 'null'] },
                routeId: { type: ['integer', 'null'] },
                trailheadId: { type: ['integer', 'null'] },
                trailheadName: 'string'
                },
            }
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
        .hasTable('GmrEvents')
        .then(exists => {
            if (!exists) {
                db.schema
                    .createTable('GmrEvents', table => {
                        table.increments('id')
                        table.string('email').unique()
                        table.string('password')
                        table.timestamp('createdAt')
                        table.timestamp('updatedAt')
                    })
                    .then(() => console.log('Created GmrEvents table')) // eslint-disable-line no-console
                    .catch(e =>
                        console.error('Error creating GmrEvents table', e)
                    ) // eslint-disable-line no-console
            }
        })
        .catch(e => console.error('Error creating GmrEvents table', e)) // eslint-disable-line no-console

    return GmrEvents
}
