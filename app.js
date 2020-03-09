var express = require('express');
var path = require('path');
var logger = require('morgan');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

var Protocols = require('./config/protocols')
protocols = new Protocols(app)
protocols.register()

app.use(express.static(path.join(__dirname, 'public')));

var Router = require('./config/router')
router = new Router(app)
router.register()

var ErrorHandler = require('./errors/handler')
handler = new ErrorHandler(app)
handler.register()

module.exports = app;
