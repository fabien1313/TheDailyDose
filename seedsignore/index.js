const sequelize = require('../config/connection');
const seedPosts = require('./post_seed');
const seedUsers = require('./user_seed');
const seedComments = require('./comment_seed');

const seedAll = async () => {
    
        await sequelize.sync({ force: true });
        console.log('\n ===== DATABASE SYNCED =====\n');

        await seedPosts();
        console.log('\n ===== DATABASE SEEDED POSTS =====\n');

        await seedUsers();
        console.log('\n ===== DATABASE SEEDED USERS=====\n');

        await seedComments();
        console.log('\n ===== DATABASE SEEDED COMMENTS =====\n');
        
        process.exit(0);

};

seedAll();