const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');

const postData = [
    {
        id: 1,
        title: 'My first post',
        post: `This is my first post`,
        author: 1,
        date_created: 'March 3, 2023 12:00:00',
    },
    {
        id: 2,
        title: 'My second post',
        post: `This is my second post`,
        author: 1,
        date_created: 'March 3, 2023 12:00:00',
    },
    {
        id: 3,
        title: 'My third post',
        post: `This is my third post`,
        author: 2,
        date_created: 'March 3, 2023 12:00:00',
    },
    {
        id: 4,
        title: 'My fourth post',
        post: `This is my fourth post`,
        author: 1,
        date_created: 'March 3, 2023 12:00:00',
    },
    {
        id: 5,
        title: 'My fifth post',
        post: `This is my fifth post`,
        author: 3,
        date_created: 'March 3, 2023 12:00:00',
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;