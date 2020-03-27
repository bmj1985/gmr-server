/* eslint-disable no-console */

// test-345-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function(app) {
  const db = app.get('knexClient')
  const tableName = 'test_345'
  db.schema.hasTable(tableName).then(exists => {
    if (!exists) {
      db.schema
        .createTable(tableName, table => {
          table.increments('id')
          table.string('text')
        })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e))
    }
  })

  return db
}
