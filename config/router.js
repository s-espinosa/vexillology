var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
var authRouter = require('../routes/auth')
var challengesRouter = require('../routes/challenges')

function register(app) {
  app.use('/', indexRouter)
  app.use('/users', usersRouter)
  app.use('/auth', authRouter)
  app.use('/challenges', challengesRouter)
}

module.exports = {register: register}

