const logger = require('../components/logger')

function exceptions(app) {
    app.use(notFound, dev, prod)
}

// catch 404 and forward to error handler
function notFound(req, res, next) {
    res.status(404).json({
        message: 'Resource not found',
        status: 404
    })
}

// development error handler - will print stacktrace
function dev(err, req, res, next) {
    if (req.app.get('env') === 'development') {
        res.status(err.status || 500)
        res.render(__dirname + '/error', {
            message: err.message,
            error: err
        })
    }
    next()
}

// production error handler - no stacktraces leaked to user
function prod(err, req, res, next) {
    logger.log('error', err)

    res.status(err.status || 500)
    res.render(__dirname + '/error', {
        message: err.message,
        error: ''
    })
}

module.exports = exceptions;
