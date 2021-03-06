var createError = require('http-errors');

function register(app) {
  register404(app)
  registerHandler(app)
}

function register404(app) {
  app.use(function(req, res, next) {
    next(createError(404));
  });
}

function registerHandler(app) {
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
}

module.exports = {register: register}
