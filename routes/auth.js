var express = require('express');
var router = express.Router();
var githubRouter = require('./auth/github')

router.use('/github', githubRouter)

module.exports = router;
