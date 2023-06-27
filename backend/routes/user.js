const router = require('express')();
const User = require('../models/User');
const Offer = require('../models/Offer');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
var ObjectId = require('mongoose').Types.ObjectId; 

const axios = require('axios');




 




let secret="chemikai"
const games = [
 "Roblox",
 "CS:GO"

]
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
      offerStep:1
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


router.get('/getgamelist',async (req, res) => {
   res.send({ games });
})

router.get('/getstep',passport.authenticate("jwt",{session:false}),async(req, res) => {
   res.send({step:req.user.offerStep });
})

router.post('/createGameOffer',passport.authenticate("jwt",{session:false}),async (req, res) => {
   User.findByIdAndUpdate({_id:req.user._id},{offerStep:2},{upsert:true}).then((err,doc) => {
        let newOffer = new Offer({
          Game:req.body.game,
          PostedBy:req.user._id,
          Product:req.body.product,
          creating:true
        })
        newOffer.save()
      res.send("Successfully saved!");
   })


})


router.post('/GameOfferNext',passport.authenticate("jwt",{session:false}),async (req, res) => {
  Offer.findOneAndUpdate({PostedBy:req.user._id,creating:true},
   {
    price:req.body.price,
    stock:req.body.stock

   },{upsert:true}).then((err,doc) => {
   User.findByIdAndUpdate({_id:req.user._id},{offerStep:3},{upsert:true}).then((err,doc) => {
           res.send("Successfully saved!");
      })
  })
})


router.post('/GameOfferNext2',passport.authenticate("jwt",{session:false}),async (req, res) => {
  Offer.findOneAndUpdate({PostedBy:req.user._id,creating:true},
   {
    desc:req.body.desc,
    title:req.body.title
   },{upsert:true}).then((err,doc) => {
    User.findByIdAndUpdate({_id:req.user._id},{offerStep:4},{upsert:true}).then((err,doc) => {
            res.send("Successfully saved!");
        })
    })
})


router.post('/GameOfferNext3',passport.authenticate("jwt",{session:false}),async (req, res) => {
  Offer.findOneAndUpdate({PostedBy:req.user._id,creating:true},
   {
    delivery:req.body.delivery,
    deliveryDetails:req.body.details
   },{upsert:true}).then((err,doc) => {
    User.findByIdAndUpdate({_id:req.user._id},{offerStep:5},{upsert:true}).then((err,doc) => {
            res.send("Successfully saved!");
        })
    })
})


router.post('/GameOfferNext4',passport.authenticate("jwt",{session:false}),async (req, res) => {
  Offer.findOneAndUpdate({PostedBy:req.user._id,creating:true},
   {
    duration:req.body.duration,
    creating:false
   },{upsert:true}).then((err,doc) => {
    console.log(req.user._id)
    User.findByIdAndUpdate({_id:req.user._id},{offerStep:1},{upsert:true}).then((err,doc) => {
          console.log(err)
          console.log(doc)
            res.send("Successfully saved!");
        })
    })
})
router.get('/findOffer',passport.authenticate("jwt",{session:false}),async (req, res) => {
  Offer.findOne({PostedBy:req.user._id, creating:true}).then((doc,err) => {
     console.log(req.user._id)
           res.send(doc);
  })
})
router.get('/getSpecOffers',async (req, res) => {
  const { page = 1, limit = 10 } = req.query;


  Offer.find({Game:req.query.game,creating:false})
      .populate("PostedBy")
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({date:-1}).then(async (doc,err) => {
        const count = await Offer.countDocuments();

              console.log(doc)
              res.send({all:doc,length:doc.length, 
              totalPages: Math.ceil(count / limit),
              currentPage: page,});
      })




})

router.post('/photo',passport.authenticate("jwt",{session:false}),async (req, res) => {
  console.log(req.user._id)
    Offer.findOneAndUpdate({PostedBy:req.user._id,creating:true},{Image:req.body.photo},{upsert:true}).then((err,doc) => {
            res.send("Successfully saved!");
        })
})


router.post('/userphoto',passport.authenticate("jwt",{session:false}),async (req, res) => {
  console.log(req.user._id)
    User.findOneAndUpdate({_id:req.user._id},
      {profileImage:req.body.photo},{upsert:true}).then((err,doc) => {
            res.send("Successfully saved!");
        })
})




router.get('/userphoto',async (req, res) => {
  console.log(req.query.id)
    User.findOne({_id:req.query.id}).then((doc) => {
      console.log(doc)
      if(doc.profileImage) {
            res.redirect(doc?.profileImage+"_100x100");
      }else{

            res.redirect("/images/notfound.webp");
      }
        })
})







router.get('/product/:offerId',async (req, res) => {
	  try {
  if (req.params.offerId.match(/^[0-9a-fA-F]{24}$/)) {
    // Yes, it's a valid ObjectId, proceed with `findById` call.
  Offer.findOne({_id:req.params.offerId}).populate("PostedBy").then((doc,err) => {
           res.send(doc);
  })

}else{
  res.send("not found")
}

	  }catch(e) {
	  }
})


module.exports = router;
