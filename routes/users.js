var express = require('express');
var router = express.Router();
var cas = require('connect-cas');
var passport = require("passport");

passport.use(new (require('passport-cas-kth').Strategy)({
      ssoBaseURL: 'http://localhost:8000/cas',
      serverBaseURL: 'http://localhost:3000'
    }, function(user, done) {
      console.log("user: " + user);
      return done(null, user);
    }
));

router.get('/login', function(req, res, next) {
  //---------------------------------
  if(req.query['ticket']){
    var loginstatus = req.query['ticket'];
    console.log(loginstatus);
    req.session.cas = loginstatus;
    return res.redirect('/');
  }else {
    passport.authenticate('cas', function (err, user, info) {
          if (err) {
            return next(err);
          }
          if (!user) {
            return res.redirect('../');
          }
          req.logIn(user, function (err) {
            if (err) {
              return next(err);
            }
            return res.redirect(req.param('nextUrl')); // 4
          });
        }
    )(req, res, next);
  }
});

module.exports = router;
