const Post = require('../models/Post');

const postData = [
    {
        title: 'My first post',
        content: 'This is my first post',
    },
    {
        title: 'My second post',
        content: 'This is my second post',
    },
    {
        title: 'My third post',
        content: 'This is my third post',
    },
    {
        title: 'My fourth post',
        content: 'This is my fourth post',
    },
    {
        title: 'My fifth post',
        content: 'This is my fifth post',
    },
    {
        title: 'My sixth post',
        content: 'This is my sixth post',
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;