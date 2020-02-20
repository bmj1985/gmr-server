// runningRoutes-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
// module.exports = function(app) {
//   const mongooseClient = app.get('mongooseClient');
//   const runningRoutes = new mongooseClient.Schema(
//     {
//       name: String,
//       route: {
//         type: { type: String },
//         features: [
//           {
//             type: { type: String },
//             properties: {
//               name: { type: String, required: true }
//             },
//             geometry: {
//               type: { type: String },
//               coordinates: [[Number]]
//             }
//           }
//         ]
//       }
//     },
//     {
//       timestamps: true
//     }
//   );

//   return mongooseClient.model('running-routes', runningRoutes);
// };

// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection')

class runningRoutes extends Model {
    static get tableName() {
        return 'runningRoutes'
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
        .hasTable('runningRoutes')
        .then(exists => {
            if (!exists) {
                db.schema
                    .createTable('runningRoutes', table => {
                        table.increments('id')
                        table.string('route').unique()
                    })
                    .then(() => console.log('Created runningRoutes table')) // eslint-disable-line no-console
                    .catch(e =>
                        console.error('Error creating runningRoutes table', e)
                    ) // eslint-disable-line no-console
            }
        })
        .catch(e => console.error('Error creating runningRoutes table', e)) // eslint-disable-line no-console

    return runningRoutes
}
