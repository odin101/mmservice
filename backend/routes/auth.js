const router = require('express')();
const passport = require('passport');

let secret="chemikai"
const jwt = require('jsonwebtoken');
router.get('/github', passport.authenticate('github'));

router.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: "/user/signin" }),
  (req, res) => {
    res.redirect('/dashboard');
});




// router.get('/google', passport.authenticate('google'));

// router.get('/google/callback', 
//   passport.authenticate('google', { failureRedirect: "/user/signin" }),
//   (req, res) => {
//     res.redirect('/dashboard');
// });




router.get('/google/callback',
  passport.authenticate('google', {scope:['profile'], failureRedirect: 'https://gallant-hodgkin-fb9c52.netlify.app', session: true }),
  function (req, res) {
     const token = jwt.sign({data: req.user}, secret, {
          expiresIn: 604800 // 1 week
        });
    res.redirect('http://localhost:3000/authsuccess/'+token);
  }
  );



  router.get('/google', passport.authenticate('google', { scope: ['profile','email']}), 
  function (req, res) {
     const token = jwt.sign({data: req.user}, secret, {
          expiresIn: 604800 // 1 week
        });
    res.redirect('http://localhost:3000/authsuccess/'+token);
  }
  );







module.exports = router;