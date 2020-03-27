// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection')

class announcements extends Model {
  static get tableName() {
    return 'announcements'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['content'],

      properties: {
        content: { type: 'string' },
        permissions: {
          type: 'array',
          items: {
            type: 'string',
          },
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
    .hasTable('announcements')
    .then(exists => {
      if (!exists) {
        db.schema
          .createTable('announcements', table => {
            table.increments('id')
            table.string('content')
            table.specificType('permissions', 'VARCHAR[]')
            table.timestamp('createdAt')
            table.timestamp('updatedAt')
          })
          .then(() => console.log('Created announcements table')) // eslint-disable-line no-console
          .catch(e => console.error('Error creating announcements table', e)) // eslint-disable-line no-console
      }
    })
    .catch(e => console.error('Error creating announcements table', e)) // eslint-disable-line no-console

  return announcements
}
