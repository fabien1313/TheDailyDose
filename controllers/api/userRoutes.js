const router = require('express').Router();
const { User } = require('../../models');

// CREATE a new user
router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.userId = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json(dbUserData);
        });
    } catch (e) {
        res.status(500).json(e);
    }
});

router.post('/login', async (req, res) => {
    try {
        const existingUser = await User.findOne({
            where: {
                username: req.body.username,
            },
        });

        if (!existingUser) {
            res.status(400).json({ message: 'Incorrect username or password, please try again' });
            return;
        }

        const validPassword = existingUser.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect username or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.userId = existingUser.id;
            req.session.username = existingUser.username;
            req.session.loggedIn = true;

            res.status(200).json({ user: existingUser, message: 'You are now logged in!' });
        });

    } catch (e) {
        res.status(500).json(e);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });


module.exports = router;