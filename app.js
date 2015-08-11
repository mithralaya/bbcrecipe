//referencing all required dependencies
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

// referencing all required controllers to route
var routes = require('./routes/index');
var users = require('./routes/users');
var recipe = require('./routes/recipe');
var filter = require('./routes/filter');
var starred = require('./routes/starred');
var MessageInstance = require('./Message/message');
var fabricate = require('./Helper/fabricate');

//initialise express
var app = express();

// view engine setup. using EJS.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//initialising express middleware
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: 'keyboard cat',
    proxy: true,
    resave: true,
    saveUninitialized: true}))
app.use(express.static(path.join(__dirname, 'public')));

//starting and initialising variables that may be used throughout the journey
var start = function(req, res, next)
{

    //assuming joe is already a user the session is forced through out the system
    req.session.user = {};
    req.session.user.id = 3;
    req.session.user.name = "Joe";
    req.session.user.email = "joe@bbc.co.uk";

    //initialising message instance
    req.messageInstance = new MessageInstance();
    req.built = {};
    //move to next function in routes
    next();
};

//routing webpages
app.get('/page/:pageNo'                     , start, routes.index); //home page with paginated recipe
app.get('/'                                 , start, routes.index); //home page
app.get('/login'                            , start, users.login); //not used
app.get('/register'                         , start, users.register); //not used
app.get('/recipe/:recipeId/:recipeUrl'      , start, recipe.index); //recipe details page with recipeId and url params

//routing api
app.get('/filter'                           , start, filter.index, fabricate.index); // api that returns JSON filtered recipes list
app.get('/starred'                          , start, starred.index, fabricate.index); // api enables to set a recipe star per user

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
