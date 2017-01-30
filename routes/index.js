var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.cas) {
    return res.send('<p>You are logged in. Your name is Hendra Permana' + '. <a href="/logout">Log Out</a></p>');
  } else {
    return res.send('<p>You are not logged in. <a href="/users/login">Log in now.</a><p>');
  }
});

module.exports = router;
