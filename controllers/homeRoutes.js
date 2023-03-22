const router = require('express').Router();// Import the express package and use the Router() method to create a new router object
const { Post, Comment, User } = require('../models/');
const withAuth = require('../utils/auth');

// HOMEPAGE with all posts
router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            attributes : [ 'id', 'title', 'content', 'created_at' ],
            include: [
                {
                    model: Comment, attributes: ['id', 'comment_content', 'post_id', 'user_id', 'created_at'],
                    include: { model: User, attributes: ['username']}
                },
                {
                    model: User, attributes: ['username']
                }
            ]
            
        });

        const posts = dbPostData.map((post) => post.get({ plain: true }));
        res.render('homepage', { posts, loggedIn: req.session.loggedIn, username: req.session.username });

    } catch (err) {
        res.status(500).json(err);
    }
	
});

// DASH page GET routes
router.get('/dash', withAuth, async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            where: { user_id: req.session.user_id },
            attributes: ['id', 'title', 'content', 'created_at'],
            include: [
                {
                    model: Comment, attributes: ['id', 'comment_content', 'post_id', 'user_id', 'created_at'],
                    include: { model: User, attributes: ['username']}
                },
                {
                    model: User, attributes: ['username']
                }
            ]
        });

        const posts = dbPostData.map((post) => post.get({ plain: true }));
        
        res.render('dash', { posts, username: req.session.username });

    } catch (err) {
        console.log('error rendering dashboard')
        res.redirect('login');
        
    }
});


router.get('/newpost',  async (req, res) => {
    res.render('newpost', {
        layout: 'main',
    });
});

router.get('/editpost/:id', async (req, res) => {
    try {
        const dbPostData = await Post.findOne({
            where: { id: req.params.id },
            attributes: ['id', 'title', 'content', 'created_at'],
            include: [
                {
                    model: Comment, attributes: ['id', 'comment_content', 'post_id', 'user_id', 'created_at'],
                    include: { model: User, attributes: ['username']}
                },
                {
                    model: User, attributes: ['username']
                }
            ],
        });

        if (dbPostData) {
            const post = dbPostData.get({ plain: true });
            res.render('editpost', { post, loggedIn: req.session.loggedIn, username: req.session.username});
        }

    } catch (err) {
        console.log('error rendering post')
        res.status(500).json(err);
    }
});


// DASH page GET routes END




router.get('/post/:id', async (req, res) => {
    try {
        const dbPostData = await Post.findOne({
            where: { id: req.params.id },
            attributes: ['id', 'title', 'content', 'created_at'],
            include: [
                {
                    model: Comment, attributes: ['id', 'comment_content', 'post_id', 'user_id', 'created_at'],
                    include: { model: User, attributes: ['username']}
                },
                {
                    model: User, attributes: ['username']
                }
            ],
        });

        if (dbPostData) {
            const post = dbPostData.get({ plain: true });
            res.render('singlepost', { post, loggedIn: req.session.loggedIn});
        }

    } catch (err) {
        console.log('error rendering post')
        res.status(500).json(err);
    }

});






router.get('/login', async (req, res) => {
    if (req.session.loggedIn) {
    res.redirect('/')
    return;
    }

    res.render('login');
});







router.get('/signup', async (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/')
        return;
    }

    res.render('signup')
});


module.exports = router;