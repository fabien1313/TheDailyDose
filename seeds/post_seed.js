const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');

const postData = [
    {
        title: 'Post 1',
        post: 'This is a post 1',
    },
    {
        title: 'Post 2',
        post: 'This is a post 2',
        
    },
    {
        title: 'Post 3',
        post: 'This is a post 3',
        
    },
    {
        title: 'Post 4',
        post: 'This is a post 4',
        
    },
    {
        title: 'Post 5',
        post: 'This is a post 5',
       
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;