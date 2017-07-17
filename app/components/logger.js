const winston = require('winston')

const logger = new winston.Logger({
    exitOnError: false,

    transports: [
        new winston.transports.Console({
            timestamp: () => {
                return new Date().toString()
            },
            handleExceptions: true,
            json: true,
            level: 'info'
        }),
        new winston.transports.File({
            name: 'warn-file',
            filename: '.logs/winston.warn.log',
            level: 'warn'
        }),
        new winston.transports.File({
            name: 'error-file',
            filename: '.logs/winston.error.log',
            level: 'error'
        })
    ],
    
    exceptionHandlers: [
        new winston.transports.File({
            filename: '.logs/winston.exceptions.json',
            handleExceptions: true,
            humanReadableUnhandledException: true,
            json: true
        })
    ]
})

module.exports = logger
