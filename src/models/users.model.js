// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection')

class users extends Model {
    static get tableName() {
        return 'users'
    }
    // static get idColumn() {
    //     return 'googleId'
    // }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['email', 'name'],
            properties: {
                id: 'number',
                email: { type: ['string', 'null'] },
                password: 'string',
                name: 'string',
                profilePicture: 'string',
                googleId: 'string',
                facebookId: 'string',
                permissions: {
                    type: 'array',
                    items: {
                        type: 'string',
                        default: 'user',
                    },
                },
                emailVerified: { type: 'boolean', default: false },
                isApprovedByAdmin: { type: 'boolean', default: false },
                adminApprovalData: {
                    type: 'object',
                    properties: { adminName: 'string', date: 'date-time' },
                },
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
        .hasTable('users')
        .then(exists => {
            if (!exists) {
                db.schema
                    .createTable('users', table => {
                        table.increments('id').primary()
                        table.string('email')
                        table.string('password')
                        table.string('name')
                        table.string('profilePicture')
                        table.string('googleId')
                        table.string('facebookId')
                        table
                            .specificType('permissions', 'text[]')
                            .defaultTo(['user']) // eslint-disable-line
                        table.boolean('emailVerified')
                        table.boolean('isApprovedByAdmin')
                        table.json('adminApprovalData')
                        table.timestamp('createdAt')
                        table.timestamp('updatedAt')
                    })
                    .then(() => console.log('Created users table')) // eslint-disable-line no-console
                    .catch(e => console.error('Error creating users table', e)) // eslint-disable-line no-console
            }
        })
        .catch(e => console.error('Error creating users table', e)) // eslint-disable-line no-console

    return users
}
