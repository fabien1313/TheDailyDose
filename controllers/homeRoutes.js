const router = require('express').Router();// Import the express package and use the Router() method to create a new router object
const { Post, Comment, User } = require('../models/');


router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            // include: [User],
        });

        const posts = dbPostData.map((post) => post.get({ plain: true }));
        res.render('homepage', { posts })

    } catch (err) {
        res.status(500).json(err);
    }
	
});

router.get('/login', async (req, res) => {
    res.render('login')
});

router.get('/signup', async (req, res) => {
    res.render('signup')
});


module.exports = router;