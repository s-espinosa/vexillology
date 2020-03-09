var createError = require('http-errors');

class Handler {
  constructor(app) {
    this.app = app
  }

  register() {
    this.register404()
    this.registerHandler()
  }

  register404() {
    this.app.use(function(req, res, next) {
      next(createError(404));
    });
  }

  registerHandler() {
    this.app.use(function(err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error');
    });
  }
}

module.exports = Handler
