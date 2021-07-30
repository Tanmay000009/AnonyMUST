const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const app = express();
const db = require('./config/mongoose');
// Connect db
db();

const PORT = process.env.PORT || 3000;

// For passport
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport_local');
// for cookies to db
const MongoStore = require('connect-mongo');  

dotenv.config({path: 'config.env'});

app.use(express.static(__dirname + "/assets"));
app.use(express.urlencoded());
app.use(cookieParser());

// View Engine
app.set('view engine','ejs');
app.set('views','./views');

// middleware for encrypting cookie
app.use(session({
    //name of cookie
    name: 'whistle',
    secret: 'randomForEncryptingCookie',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000*60*100)
    },
    // Adding mongostore to store cookie in db
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        
    }, function(err) {
        if (err) {console.log('error in connecting to db')}
        else {console.log('Connect-mongo connected')}
    })
}));

// intializing passport
app.use(passport.initialize());
app.use(passport.session());

// it will check if session cookie is there, and if then provide user data
app.use(passport.setAuthenticatedUser);

app.use('/', require('./routes'));


app.listen(PORT, (err) => {
    if (err) {
        console.log("Error in starting server!");
    } else {
        console.log(`Server started on port: ${PORT}`);
    }
})