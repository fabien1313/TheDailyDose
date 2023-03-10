const router = require('express').Router();// Import the express package and use the Router() method to create a new router object
const { Post, Comment, User } = require('../models/');


router.get('/', async (req, res) => {
    res.render('homepage');
	
});

router.get('/login', async (req, res) => {
    res.render('login')
});


module.exports = router;