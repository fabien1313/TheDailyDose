const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');

const userData = [
    {
        id: 1,
        username: 'user1',
        password: 'password1',

    },
    {
        id: 2,
        username: 'user2',
        password: 'password2',
    },
    {
        id: 3,
        username: 'user3',
        password: 'password3',
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;

