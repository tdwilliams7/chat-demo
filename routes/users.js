var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// GET user preferences
router.get('/user/preferences', function(req, res, next) {
  res.send('user preferences');
});

module.exports = router;
