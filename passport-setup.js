const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new GitHubStrategy({
  clientID: "b8bd4d142402ac6f4359",
  clientSecret: "a2b09a03cb142102c9e0d4f9222e10c812b7a5f7",
  callbackURL: "http://localhost:8000/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
  return done(null, profile);
}
));