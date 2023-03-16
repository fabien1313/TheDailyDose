const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Comment, {
    foreignKey: 'comment_id',
    // onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'comment_id',
    
});

User.hasMany(Post, {
    foreignKey: 'author',
    // onDelete: 'CASCADE'
    
});

Post.belongsTo(User, {
    foreignKey: 'author',
    
});


Post.hasMany(Comment, {
    foreignKey: 'blog_id',
    // onDelete: 'CASCADE'
});


Comment.belongsTo(Post, {
    foreignKey: 'blog_id',
});





module.exports = { Post, User, Comment };