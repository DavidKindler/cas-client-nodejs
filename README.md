# cas-client-nodejs

CAS client example in NodeJS.

Test with CAS server : https://github.com/lskk/cas-server

# important dependencies

* `express` js | middleware

* `express-session` | save ticket details to session

* `passport` js | authentication middleware 

* `passport-cas-kth` | cas strategy for passport

## settings

```js
passport.use(new (require('passport-cas-kth').Strategy)({
      ssoBaseURL: '<your-cas-server>',
      serverBaseURL: '<your-app-url-or-server>'
    }, function(data, done) {
      return done(null, user);
    }
));
```

* register `<your-app-url-or-server>` in your CAS server
