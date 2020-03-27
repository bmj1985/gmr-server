require('dotenv').config()
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users')
        .del()
        .then(() =>
            // Inserts seed entries
            knex('users').insert([
                {
                    id: 1,
                    email: process.env.ADMIN_EMAIL,
                    password: '',
                    name: process.env.ADMIN_NAME,
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
                {
                    id: 2,
                    email: process.env.ADMIN_EMAIL_2,
                    password: '',
                    name: process.env.ADMIN_NAME_2,
                    profilePicture: process.env.ADMIN_PROFILE_PICTURE_2,
                    googleId: process.env.ADMIN_GOOGLEID_2,
                    facebookId: process.env.ADMIN_FACEBOOKID_2,
                    permissions: ['user', 'admin', 'super-admin'],
                    emailVerified: true,
                    isApprovedByAdmin: true,
                    adminApprovalData: {
                        adminName: process.env.ADMIN_NAME_2,
                        date: new Date().toISOString(),
                    },
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                },
            ])
        )
        .then(() => knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 3;'))
}
