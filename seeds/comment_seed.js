const { Users } = require('../models');
const { Post } = require('../models');
const { Comment } = require('../models');

const commentData = [
    {
       comment: 'This is a comment 1', 

    },
    {
        comment: 'This is a comment 2',
    },
    {
        comment: 'This is a comment 3',
    },
    {
        comment: 'This is a comment 4',
    },
    {
        comment: 'This is a comment 5',
    },
    {
        comment: 'This is a comment 6',
    },
    {
        comment: 'This is a comment 7',
    },
    {
        comment: 'This is a comment 8',
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;