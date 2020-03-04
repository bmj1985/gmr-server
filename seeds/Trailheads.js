exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('trailheads')
        .del()
        .then(() =>
            // Inserts seed entries
            knex('trailheads').insert([
                {
                    id: 1,
                    name: 'Mountain Toad',
                    address: '900 Washington Ave, Golden, CO 80401',
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                },
                {
                    id: 2,
                    name: 'Green Mountain/Rooney',
                    address: '1000 S. Rooney Road, Lakewood, CO 80228',
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                },
                {
                    id: 3,
                    name: 'Matthews / Winters Park Trailhead',
                    address: '1103 County Highway 93 Golden, CO 80401',
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                },
                {
                    id: 4,
                    name: 'Golden City Brewery',
                    address: '920 12th St, Golden, CO 80401',
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                },
            ])
        )
        .then(() =>
            knex.raw('ALTER SEQUENCE Trailheads_id_seq RESTART WITH 5;')
        )
}
