var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');

function register(app) {
  app.use('/', indexRouter)
  app.use('/users', usersRouter)
}

module.exports = {register: register}

