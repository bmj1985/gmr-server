// gmrEvents-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

// module.exports = function(app) {
//     const mongooseClient = app.get('mongooseClient')
//     const gmrEvents = new mongooseClient.Schema(
//         {
//             date: { type: Date, required: true } || null,
//             details: { type: String } || null,
//             trailhead:
//                 { name: { type: String }, address: { type: String } } || null,
//             route_id: { type: String } || null,
//             title: { type: String, required: true } || null,
//             runRouteLink: String || null,
//         },
//         {
//             timestamps: true,
//         }
//     )

//     return mongooseClient.model('gmr-events', gmrEvents)
// }

// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection')

class gmrEvents extends Model {
    static get tableName() {
        return 'gmrEvents'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['date', 'title'],

            properties: {
                date: { type: ['date-time', 'null'] },
                details: { type: ['string', 'null'] },
                //             trailhead:
                //                 { name: { type: String }, address: { type: String } } || null,
                //             route_id: { type: String } || null,
                //             title: { type: String, required: true } || null,
                //             runRouteLink: String || null,
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
        .hasTable('gmrEvents')
        .then(exists => {
            if (!exists) {
                db.schema
                    .createTable('gmrEvents', table => {
                        table.increments('id')
                        table.string('email').unique()
                        table.string('password')
                        table.timestamp('createdAt')
                        table.timestamp('updatedAt')
                    })
                    .then(() => console.log('Created gmrEvents table')) // eslint-disable-line no-console
                    .catch(e =>
                        console.error('Error creating gmrEvents table', e)
                    ) // eslint-disable-line no-console
            }
        })
        .catch(e => console.error('Error creating gmrEvents table', e)) // eslint-disable-line no-console

    return gmrEvents
}
