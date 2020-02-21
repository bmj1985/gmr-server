require('dotenv').config()

module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://postgres:@localhost:5432/gmrapi',
    },
    staging: {
        client: 'pg',
        connection: `${process.env.DATABASE_URL}?ssl=true`,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
    production: {
        client: 'pg',
        connection: `${process.env.DATABASE_URL}?ssl=true`,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
}
