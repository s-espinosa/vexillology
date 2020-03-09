var express = require('express')
var cookieParser = require('cookie-parser');

class Protocols {
  constructor(app) {
    this.app = app
  }

  register() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
  }
}

module.exports = Protocols
