const withAuth = (req, res, next) => {
  console.log('withAuth', req.session)
    if (!req.session.user_id) {
      console.log('We are redirecting to login from withAuth')
      res.redirect("/login");
    } else {
      next();
    }
  };
  
  module.exports = withAuth;