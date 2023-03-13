const sequelize = require('../config/connection');
const seedPosts = require('./post_seed');

const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('\n ===== DATABASE SYNCED =====\n');

        await seedPosts();
        console.log('\n ===== DATABASE SEEDED =====\n');
        
        process.exit(0);

    } catch (e) {
       process.exit(1);
    }
};

seedAll();