var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('challenges/index', { title: 'Challenges' });
});

module.exports = router;
