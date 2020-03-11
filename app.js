var express = require('express');
var logger = require('morgan');
var protocols = require('./config/protocols')
var router = require('./config/router')
var assets = require('./config/assets')
var handler = require('./config/handler')

var app = express();

require('dotenv').config()
app.use(logger('dev'))
protocols.register(app)
router.register(app)
assets.register(app, __dirname)
handler.register(app)

module.exports = app;
