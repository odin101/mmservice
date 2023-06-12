const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GithubStrategy = require('passport-github').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;

const { generateProfileImage } = require('./auth');



var GoogleStrategy = require('passport-google-oidc');



const bcrypt = require('bcryptjs');

const User = require('../models/User');
const keys = require('../keys/dbProd');


var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')
opts.secretOrKey  = "chemikai"

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
  User.findOne({_id: jwt_payload.data._id}).then( (user)  => {
      if (user) {
          return done(null, user);
      } else {
          return done(null, false);
      }
      
  }).catch((error) => {
    done(error, false);
  })
  
}));

passport.use(new LocalStrategy({
  usernameField: 'email'
}, function (email, password, done) {

  User.findOne({
    email: email.toLowerCase()
  })
    .then(user => {
      if (!user) {
        return done(null, false, { message: `No user found with email ${email}` });
      }
      if(!user.password) {
        // 2nd parameter > user / false
        return done(null, false, { message: "User is not connected via Email" });
      }
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          throw err;
        } 

        if (isMatch) {
          return done(null, user)
        } else {
          return done(null, false, {message: 'Incorrect password'});
        }

      });
    });
}));

passport.use(new GithubStrategy({
    clientID: keys.github.clientID,
    clientSecret: keys.github.clientSecret,
    callbackURL: "/auth/github/callback"
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({
      githubID: profile.id
    })
    .then(existinguser => {
      if(existinguser) {
        return done(null, existinguser)
      }
      const newUser = new User({
        username: profile.username,
        githubID: profile.id,
        email: profile._json.email, 
        profileImage: profile._json.avatar_url
      });

      newUser.save()
        .then(user => done(null, user));
    });

  }
));







passport.use(new GoogleStrategy({
    clientID: "182268802434-dbauml5qvlotl44t51a9oc2f1unr70u7.apps.googleusercontent.com",
    clientSecret: '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',
    callbackURL: "/auth/google/callback"
  }, (request, profile, refreshToken, accessToken, done) => {
    console.log(accessToken)
    User.findOne({
      googleID: profile.id
    })
    .then(existinguser => {
      if(existinguser) {
        return done(null, existinguser)
      }else{
     let pEmail = profile.emails[0].value;
      const newUser = new User({
        username: profile.displayName,
        googleID: profile.id,
        email: pEmail, 
        offerStep:1
      });

        newUser.profileImage = generateProfileImage(pEmail);

      newUser.save()
        .then(user => done(null, newUser));
      


      }
    });

  }
));






passport.serializeUser(function (user, done) {
  return done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User
    .findById(id).then( function (err, user) {
      done(err, user);
    })
});