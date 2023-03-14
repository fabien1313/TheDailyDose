const router = require('express').Router();// Import the express package and use the Router() method to create a new router object
const { Post, Comment, User } = require('../models/');
const withAuth = require('../utils/auth');

// HOMEPAGE with all posts
router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            
        });

        const posts = dbPostData.map((post) => post.get({ plain: true }));
        res.render('homepage', { posts })

    } catch (err) {
        res.status(500).json(err);
    }
	
});

router.get('/dash', withAuth, async (req, res) => {
    console.log('dashboard', req.session)
    try {
        const dbPostData = await Post.findAll({
            
        });
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        
        res.render('dash', { posts });

    } catch (err) {
        console.log('error rendering dashboard')
        res.redirect('login');
        
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