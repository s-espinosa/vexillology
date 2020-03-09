var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');

class Router {
  constructor(app) {
    this.app = app;
  }

  register() {
    this.app.use('/', indexRouter)
    this.app.use('/users', usersRouter)
  }
}

module.exports = Router

