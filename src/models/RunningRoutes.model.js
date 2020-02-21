// RunningRoutes-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
// module.exports = function(app) {
//   const mongooseClient = app.get('mongooseClient');
//   const RunningRoutes = new mongooseClient.Schema(
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

//   return mongooseClient.model('running-routes', RunningRoutes);
// };

// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
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
