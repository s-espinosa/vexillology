var express = require('express')
var cookieParser = require('cookie-parser');


function register(app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
}

module.exports = {register: register}
