require('dotenv').config()
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('Users')
        .del()
        .then(() =>
            // Inserts seed entries
            knex('Users').insert([
                {
                    email: process.env.ADMIN_EMAIL,
                    password: '',
                    name: process.env.ADMIN_NAME,
                    id: 1,
                    profilePicture: process.env.ADMIN_PROFILE_PICTURE,
                    googleId: process.env.ADMIN_GOOGLEID,
                    facebookId: process.env.ADMIN_FACEBOOKID,
                    permissions: ['user', 'admin', 'super-admin'],
                    emailVerified: true,
                    isApprovedByAdmin: true,
                    adminApprovalData: {
                        adminName: process.env.ADMIN_NAME,
                        date: new Date().toISOString(),
                    },
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                },
            ])
        )
        .then(() => knex.raw('ALTER SEQUENCE Users_id_seq RESTART WITH 2;'))
}
