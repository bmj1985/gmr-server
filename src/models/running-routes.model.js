const { Model } = require('objection')

class RunningRoutes extends Model {
    static get tableName() {
        return 'RunningRoutes'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['password', 'name'],

            properties: {
                name: 'string',
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
        .hasTable('RunningRoutes')
        .then(exists => {
            if (!exists) {
                db.schema
                    .createTable('RunningRoutes', table => {
                        table.increments('id')
                        table.string('route').unique()
                    })
                    .then(() => console.log('Created RunningRoutes table')) // eslint-disable-line no-console
                    .catch(e =>
                        console.error('Error creating RunningRoutes table', e)
                    ) // eslint-disable-line no-console
            }
        })
        .catch(e => console.error('Error creating RunningRoutes table', e)) // eslint-disable-line no-console

    return RunningRoutes
}
