const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
const expressValidator = require('express-validator');
const expressStatusmonitor = require('express-status-monitor');
const compression = require('compression');
const flash = require('express-flash');
const cors = require('cors');

const app = express();

const indexRoute = require('./routes/index');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');

const getGithubFollowerAndFollowing = require('./config/hbs');

//Mongoose
const db = require('./keys/dbProd')
mongoose.connect(db.mongoUri)
.then(() => console.log('Connected to database'))
.catch(err => console.log(err));
//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//express-hanldebars
 
app.use('/images', express.static('images'))

//express helper packages
app.use(expressStatusmonitor());
//express-validatoraa
app.use(expressValidator());
app.use(compression());
//Express-session


app.use(session({
  secret: 'nodepassportsecret',
  resave: true,
  saveUninitialized: true,
}));
app.use(flash());

app.use(cors({
  origin: '*'
}));
//passport
require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next){
  res.locals.user = req.user || null
  next();
})
//Routes
app.use('/', indexRoute);
app.use('/user', userRoute);
app.use('/auth', authRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started.'));