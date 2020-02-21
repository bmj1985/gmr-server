exports.up = (knex, Promise) =>
    knex.schema.createTable('Users', table => {
        table.increments('id').primary()
        table.string('email').unique()
        table.string('password')
        table.string('name')
        table.string('profilePicture')
        table.string('googleId')
        table.string('facebookId')
        table.specificType('permissions', 'text[]')
        table.boolean('emailVerified')
        table.boolean('isApprovedByAdmin')
        table.json('adminApprovalData')
        table.timestamp('createdAt')
        table.timestamp('updatedAt')
    })

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('Users')
