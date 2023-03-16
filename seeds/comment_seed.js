const { Users } = require('../models');
const { Post } = require('../models');
const { Comment } = require('../models');

const commentData = [
    {
        id: 1,
        comment: 'This is my first comment',
        comment_id: 2,
        date_created: 'March 3, 2023 12:00:00',
        blog_id: 1,

    },
    {
        id: 2,
        comment: 'This is my second comment',
        comment_id: 3,
        date_created: 'March 3, 2023 12:00:00',
        blog_id: 2,
    },
    {
        id: 3,
        comment: 'This is my third comment',
        comment_id: 2,
        date_created: 'March 3, 2023 12:00:00',
        blog_id: 2,
    },
    {
        id: 4,
        comment: 'This is my fourth comment',
        comment_id: 2,
        date_created: 'March 3, 2023 12:00:00',
        blog_id: 3,
    },
    {
        id: 5,
        comment: 'This is my fifth comment',
        comment_id: 3,
        date_created: 'March 3, 2023 12:00:00',
        blog_id: 3,
    },
    {
        id: 6,
        comment: 'This is my sixth comment',
        comment_id: 2,
        date_created: 'March 3, 2023 12:00:00',
        blog_id: 4,
    },
    {
        id: 7,
        comment: 'This is my seventh comment',
        comment_id: 1,
        date_created: 'March 3, 2023 12:00:00',
        blog_id: 5,
    },
    {
        id: 8,
        comment: 'This is my eighth comment',
        comment_id: 2,
        date_created: 'March 3, 2023 12:00:00',
        blog_id: 5,
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;