var express = require('express');
var assets = require('./config/assets')
var logger = require('morgan');
var Protocols = require('./config/protocols')
var Router = require('./config/router')
var ErrorHandler = require('./errors/handler')

var app = express();

assets.register(app, __dirname)

app.use(logger('dev'));

protocols = new Protocols(app)
protocols.register()

router = new Router(app)
router.register()

handler = new ErrorHandler(app)
handler.register()

module.exports = app;
