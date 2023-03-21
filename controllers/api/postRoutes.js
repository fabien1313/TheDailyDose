const router = require('express').Router();
const { Post, User, Comment } = require('../../models/');
const withAuth = require('../../utils/auth');



router.post('/', withAuth, (req, res) => {
	console.log('this is the api/posts route');
	Post.create({
		title: req.body.title,
		content: req.body.content,
		user_id: req.session.user_id
	})
		.then(dbPostData => res.json(dbPostData))
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});


router.get('/:id', (req, res) => {
	try {
		Post.findOne({
			where: {
				id: req.params.id
			},
			attributes: [
				'id',
				'title',
				'content',
				'created_at'
			],
			include: [
				{
					model: Comment,
					attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
					include: {
						model: User,
						attributes: ['username']
					}
				},
				{
					model: User,
					attributes: ['username']
				}
			]
		});

		if (dbPostData) {
			const post = dbPostData.get({ plain: true });
			res.render('editpost', { post, loggedIn: req.session.loggedIn, username: req.session.username });
		}


	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});


router.put('/:id', withAuth, (req, res) => {
	try {
		Post.update(
			{
				title: req.body.title,
				content: req.body.content
			},
			{
				where: { id: req.params.id }
			}
		)

		if (dbPostData) {
			const post = dbPostData.get({ plain: true });
			res.render('editpost', { post, loggedIn: req.session.loggedIn, username: req.session.username });
		}

	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});


router.delete('/:id', withAuth, async (req, res) => {
	const postId = req.params.id;
  
	try {
	  const post = await Post.findOne({ where: { id: postId } });
  
	  if (!post) {
		return res.status(404).end();
	  }
  
	  await post.destroy();
  
	  res.status(200).end();
	} catch (error) {
	  res.status(500).json(error);
	}
  });

module.exports = router;