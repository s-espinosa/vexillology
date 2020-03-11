var express = require('express');
var router = express.Router();

router.get('/callback', function(req, res, next) {
  // get the code from the params in the request
  var code = req.query.code;

  // Find or Create new user from github info using a user object

  // MOVE TO SERVICE
  // User will call to service to get this info

  // Send a post request to get a token
  // https://github.com/login/oauth/access_token
  // use the token to get information about a user
  // save that information and the token in our DB



  // set user_id in session to user id


  // redirect to challenges
  res.redirect('/challenges');
});

module.exports = router;
