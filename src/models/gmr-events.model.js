// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection')

class gmrEvents extends Model {
    static get tableName() {
        return 'gmr_events'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['datetime', 'title'],
            properties: {
                datetime: { type: ['date-time', 'null', 'string'] },
                details: { type: ['string', 'null'] },
                runRouteLink: { type: ['string', 'null'] },
                title: { type: ['string', 'null'] },
                routeId: { type: ['integer', 'null'] },
                trailheadId: { type: ['integer', 'null'] },
                trailheadName: 'string',
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
        .hasTable('gmr_events')
        .then(exists => {
            if (!exists) {
                db.schema
                    .createTable('gmr_events', table => {
                        table.increments('id').primary()
                        table.datetime('datetime')
                        table.text('details')
                        table.integer('trailheadId')
                        table.string('trailheadName')
                        table.integer('routeId')
                        table.string('runRouteLink')
                        table.string('title')
                        table.timestamp('createdAt')
                        table.timestamp('updatedAt')
                    })
                    .then(() => console.log('Created gmr_events table')) // eslint-disable-line no-console
                    .catch(e =>
                        console.error('Error creating gmr_events table', e)
                    ) // eslint-disable-line no-console
            }
        })
        .catch(e => console.error('Error creating gmr_events table', e)) // eslint-disable-line no-console

    return gmrEvents
}
