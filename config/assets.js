var express = require('express');
var path = require('path');

function register(app, root) {
  setViews(app, root)
  setStatic(app, root)
}

function setViews(app, root) {
  app.set('views', path.join(root, 'views'));
  app.set('view engine', 'ejs');
}

function setStatic(app, root) {
  app.use(express.static(path.join(root, 'public')));
}

module.exports = {register: register}
