require('dotenv').config();
const { User } = require('../models');

const adminSeed = {
        "name": process.env.ADMIN_NAME,
        "email": process.env.ADMIN_EMAIL ,
        "password": process.env.ADMIN_PASSWORD,
        "isAdmin": true,
        "isSuper": true    
    }

const seedUsers = async () => {
    // NOTE: update this code if you wish to seed multiple users.
    // NOTE: bulkCreate does not seem to currently work with admin/super seeding...
    // ...I'll see if I can't fix this bug later
    await User.create(adminSeed);

    console.log(`Admin user added to database.`);
}

module.exports = seedUsers;