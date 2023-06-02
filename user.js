const router = require('express')();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');

let secret="chemikai"

const { check, validationResult } = require('express-validator/check');
// const passportConfig = require('../config/passport');

const { ensureAuthentication, generateProfileImage } = require('../config/auth');


router.post('/signin', (req, res, next) => {
      passport.authenticate('local', (err,user,info) => {
        if(user) {
          const token = jwt.sign({data: user}, secret, {
            expiresIn: 604800 // 1 week
          });
          res.json({
            success: true,
            token: 'JWT '+token,
            user: {
              id: user._id,
              name: user.name,
              username: user.username,
              email: user.email
            }
          })
  
        }else{
          res.send(info)
        }
      })(req,res,next)
  })

router.post('/signup', (req, res) => {

  req.assert('username', 'Username is required').notEmpty();
  req.assert('email', 'Enter a valid email address').isEmail();
  req.assert('password', 'Password must be atleast 6 charecters').isLength({ min: 6 });

  const errors = req.validationErrors();
  if(errors){
    // req.flash('errors', errors)
   res.send({error:errors})
  }

  User.findOne({
    email: req.body.email
  })
  .then(user => {
    if(user) {
      res.send({error:[{msg: `Already a user with Email ${req.body.email}`}]});
    }
    const newUser = new User({
      username: req.body.username.toLowerCase(),
      email: req.body.email.toLowerCase(),
      password: req.body.password,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        
        newUser.password = hash;
        newUser.profileImage = generateProfileImage(newUser.email);

          const token = jwt.sign({data: user}, secret, {
            expiresIn: 604800 // 1 week
          });
          
        newUser.save()
          .then(user => {
            // req.flash('success', {msg: 'Your account has been registered.'});
            // return res.redirect('/user/signin');
            res.send({msg:"Your account has been registered.",
            newUser,
            success: true,
            token: 'JWT '+token,
          })
          })
          .catch(err => {
          });
      });
    });

  });

});


router.get('/dashboard', passport.authenticate("jwt",{session:false}),(req,res) => {
  const token = jwt.sign({data: req.user}, secret, {
          expiresIn: 604800 // 1 week
         });
 res.send({...req.user._doc, 
            success: true,
            token: 'JWT '+token,
})
});

router.get('/signout',async (req, res) => {
  await req.logOut();
   res.send({ msg: 'You are logged out.' + req.user });
})



module.exports = router;
