function exceptions(app) {
    notFound(app);
    dev(app);
    prod(app);
}

// catch 404 and forward to error handler
function notFound(app) {
    app.use((req, res, next) => {
        let err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
}

// development error handler - will print stacktrace
function dev(app) {
    if (app.get('env') === 'development') {
        app.use((err, req, res, next) => {
            res.status(err.status || 500);
            res.render('exceptions/error', {
                message: err.message,
                error: err
            });
        });
    }
}

// production error handler - no stacktraces leaked to user
function prod(app) {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render('exceptions/error', {
            message: err.message,
            error: ''
        });
    });
}

module.exports = exceptions;
